import motor.motor_asyncio
from bson import ObjectId
from decouple import config
import json
from .database_helper import student_helper, admin_helper ,asset_helper, asset_helperV1,asset_helperV2
import asyncio
import pprint
# MONGO_DETAILS = config('MONGO_DETAILS')
# client = pymongo.MongoClient("mongodb+srv://cdac:<password>@cluster0.fa505.mongodb.net/cdac?retryWrites=true&w=majority")
# db = client.predMaint
# client = pymongo.MongoClient("mongodb+srv://cdac:cdac@cluster0.fa505.mongodb.net/cdac?retryWrites=true&w=majority")
# db = client.predMaint
# DATABASE_URL = "mongodb://localhost:27017"
DATABASE_URL = "mongodb+srv://cdac:cdac@cluster0.fa505.mongodb.net/cdac?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(DATABASE_URL, uuidRepresentation="standard")

# database = client.students

database = client["DB"]

# MongoDB users collection instance ("users" by default, can be changed)
# collection = database["users"]

student_collection = database['students_collection']
admin_collection = database['admins']
asset_collection = database['assets_collection']
em_logs = database['emDataset']

async def add_admin(admin_data: dict) -> dict:
    admin = await admin_collection.insert_one(admin_data)
    new_admin = await admin_collection.find_one({"_id": admin.inserted_id})
    return admin_helper(new_admin)

async def retrieve_students():
    students = []
    async for student in student_collection.find():
        students.append(student_helper(student))
    return students


async def add_student(student_data: dict) -> dict:
    student = await student_collection.insert_one(student_data)
    new_student = await student_collection.find_one({"_id": student.inserted_id})
    return student_helper(new_student)


async def retrieve_student(id: str) -> dict:
    student = await student_collection.find_one({"_id": ObjectId(id)})
    if student:
        return student_helper(student)


async def delete_student(id: str):
    student = await student_collection.find_one({"_id": ObjectId(id)})
    if student:
        await student_collection.delete_one({"_id": ObjectId(id)})
        return True


async def update_student_data(id: str, data: dict):
    student = await student_collection.find_one({"_id": ObjectId(id)})
    if student:
        student_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
        return True


####################################Asset Databases###############################################################
async def retrieve_assets():
    assets = []
    async for asset in asset_collection.find():
        assets.append(asset_helper(asset))
    return assets


async def add_asset(asset_data: dict,user:dict) -> dict:
    # print(user)
    # user_data1 = json.dumps(user)
    # print("hi")
    # print(user_data1)
    # user_data=json.loads(user_data1)
    # print("hi1")
    asset = await asset_collection.insert_one(asset_data)
    new_asset = await asset_collection.find_one({"_id": asset.inserted_id})
    new_admin = await admin_collection.find_one({"email": user['user_id']})
    # print(asset.inserted_id)
    assets=[]
    if 'assets' in new_admin:
        # print("1")
        if new_admin['assets'] is not None:
            # print("2")
            assets.extend(new_admin['assets'])

    # print(assets)
    assets.append(asset.inserted_id)

    result = await admin_collection.update_one({'_id': new_admin['_id']}, {'$set': {'assets': assets}})

    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    return asset_helperV1(new_asset)


async def add_asset_parameters(parameter_data: list,asset_id:str) -> dict:

    # asset = await asset_collection.insert_one(asset_data)
    new_asset = await asset_collection.find_one({"_id": ObjectId(asset_id)})
    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    # print(new_admin)
    parameters=[]
    if 'parameters' in new_asset:
        if new_asset['parameters'] is not None:
            parameters.extend(new_asset['parameters'])


    parameters.extend(parameter_data)

    result = await asset_collection.update_one({'_id': new_asset['_id']}, {'$set': {'parameters': parameters}})

    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    return asset_helperV1(new_asset)

async def add_asset_services(services_data: list,asset_id:str) -> dict:

    # asset = await asset_collection.insert_one(asset_data)
    new_asset = await asset_collection.find_one({"_id": ObjectId(asset_id)})
    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    # print(new_admin)
    services=[]
    if 'services' in new_asset:
        if new_asset['services'] is not None:
            services.extend(new_asset['services'])


    services.extend(services_data)
    print(services)
    result = await asset_collection.update_one({'_id': new_asset['_id']}, {'$set': {'services': services}})

    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    return asset_helperV1(new_asset)

async def get_asset_parameters(asset_id:str) -> dict:

    # asset = await asset_collection.insert_one(asset_data)
    new_asset = await asset_collection.find_one({"_id": ObjectId(asset_id)})
    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    # print(new_admin)
    parameters=[]
    if 'services' in new_asset:
        if new_asset['services'] is not None:
            import requests
            import json
            data=requests.get(new_asset['services'][0]['apiUrl'])
            dat=json.loads(data.text) 
            pred={
                "name":"Time To Failure Engine",
                "value":dat['y_pred']
            }
            new_asset['parameters'].append(pred)
            # parameters.extend(new_asset['parameters'])


    # parameters.extend(parameter_data)

    # result = await asset_collection.update_one({'_id': new_asset['_id']}, {'$set': {'parameters': parameters}})

    # new_admin = await admin_collection.find_one({"email": user['user_id']})

    return asset_helper(new_asset['parameters'])


async def update_asset_params_current_data(parameter_data: dict,asset_id:str) -> dict:

    # asset = await asset_collection.insert_one(asset_data)
    new_asset = await asset_collection.find_one({"_id": ObjectId(asset_id)})
    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    print(new_asset)
    
    # if 'parameters' in new_asset:
    #     if new_asset['parameters'] is not None:
    #         parameters.extend(new_asset['parameters'])
    param_len=len(parameter_data['parameters'])
    new_asset_len=len(new_asset['parameters'])

    print(param_len)
    print(new_asset_len)

    for i in range(param_len):
        print(i)
        for j in range(new_asset_len):
            print(j)
            if(new_asset['parameters'][j]['name'] == parameter_data['parameters'][i]['name']):
                new_asset['parameters'][j]['value']=parameter_data['parameters'][i]['value']

    parameters=new_asset['parameters']
    # parameters.extend(parameter_data)

    result = await asset_collection.update_one({'_id': new_asset['_id']}, {'$set': {'parameters': parameters}})

    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    return asset_helper(new_asset)

async def getParamName(asset_id:str) -> list:
    assets=[]
    new_asset = await asset_collection.find_one({"_id": ObjectId(asset_id)})

    for asset in new_asset['parameters']:
        name=asset['name']
        assets += [name]
    return assets

async def getDefaultAnalytics(asset_id:str) -> dict:

    # params = await getParamName(asset_id)
    doc=[]
    for document in await em_logs.find({'asset_id': asset_id}).to_list(length=1000000):
        # pprint.pprint(document)
        del document['_id']
        # print(document)
        doc.append(document)
    

    # loop = asyncio.get_event_loop()
    # dat = loop.run_until_complete(do_find())


    # new_admin = await admin_collection.find_one({"email": user['user_id']})
    return doc


async def retrieve_asset(id: str) -> dict:
    asset = await asset_collection.find_one({"_id": ObjectId(id)})
    if asset:
        return asset_helper(asset)


async def delete_asset(id: str):
    asset = await asset_collection.find_one({"_id": ObjectId(id)})
    if asset:
        await asset_collection.delete_one({"_id": ObjectId(id)})
        return True


async def update_asset_data(id: str, data: dict):
    asset = await asset_collection.find_one({"_id": ObjectId(id)})
    if asset:
        asset_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
        return True

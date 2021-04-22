from fastapi import APIRouter, Body ,Request,Depends
from fastapi.encoders import jsonable_encoder
# from fastapi import  Request
import json
# from starlette.responses import JSONResponse
# app = FastAPI()
import requests
from ..auth.jwt_bearer import JWTBearer
from ..auth.jwt_handler import *
# @app.get("/items/{item_id}")

# def read_root(item_id: str, request: Request):

#     client_host = request.client.host

#     return {"client_host": client_host, "item_id": item_id}



from ..database.database import *
from ..models.asset import *

router = APIRouter()


@router.get("/", response_description="Assets retrieved")
async def get_assets():
    assets = await retrieve_assets()
    return ResponseModel(assets, "Assets data retrieved successfully") \
        if len(assets) > 0 \
        else ResponseModel(
        assets, "Empty list returned")


@router.get("/{id}", response_description="Assets data retrieved")
async def get_asset_data(id):
    asset = await retrieve_asset(id)
    return ResponseModel(asset, "Assets data retrieved successfully") \
        if asset \
        else ErrorResponseModel("An error occured.", 404, "Assets doesn'exist.")

@router.post("/getAssets", response_description="Assets data retrieved")
async def get_asset_data(asset=Body(...)):
    data=[]
    # print(asset)
    for id in asset['assets']:
        # print(id)
        new_asset = await retrieve_asset((id))
        # new_asset= json.loads(new_asset)
        # print(type(new_asset))
        # my_id=new_asset["_id"]
        # print(my_id)
        new_asset['_id']=str(new_asset["_id"])
        # print(type(new_asset['_id']))
        data.append(new_asset)
    return ResponseModel(data, "Assets data retrieved successfully") \
        if asset \
        else ErrorResponseModel("An error occured.", 404, "Assets doesn'exist.")


@router.post("/", response_description="Asset data added into the database")
async def add_asset_data(token: str = Depends(JWTBearer()),asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    data=decodeJWT(token)
    asset = jsonable_encoder(asset)
    # print(asset)
    new_asset = await add_asset(asset,data)
    print(new_asset)
    return ResponseModel(new_asset, "Asset added successfully.")
    # return ResponseModel("new_asset", "Asset added successfully.")

@router.post("/addParmeters", response_description="Asset data added into the database")
async def add_asset_params(asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    # data=decodeJWT(token)
    # asset = jsonable_encoder(asset)
    print(type(asset['parameters']))
    new_asset = await add_asset_parameters(asset['parameters'],asset['asset_id'])
    return ResponseModel(new_asset, "Asset added successfully.")


@router.post("/addServices", response_description="Asset data added into the database")
async def add_asset_Services(asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    # data=decodeJWT(token)
    # asset = jsonable_encoder(asset)
    print(type(asset['services']))
    new_asset = await add_asset_services(asset['services'],asset['asset_id'])
    return ResponseModel(new_asset, "Asset added successfully.")

@router.post("/getParameters", response_description="Asset data added into the database")
async def add_asset_param(asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    # data=decodeJWT(token)
    # asset = jsonable_encoder(asset)
    # print(type(asset['parameters']))
    new_asset = await get_asset_parameters(asset['asset_id'])
    
    
    return ResponseModel(new_asset, "Asset added successfully.")

@router.post("/updateData", response_description="Asset data added into the database")
async def update_asset_param_current_data(asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    # data=decodeJWT(token)
    # asset = jsonable_encoder(asset)
    # print(type(asset['parameters']))
    new_asset = await update_asset_params_current_data(asset,asset['asset_id'])
    return ResponseModel(new_asset, "Asset added successfully.")


@router.post("/getAnalytics", response_description="Past 7 days data")
async def past_7_days_data(asset=Body(...)):
    # print(str(asset)+"hi")
    # print(decodeJWT(token))
    # data=decodeJWT(token)
    # asset = jsonable_encoder(asset)
    # print(type(asset['parameters']))
    new_asset = await getDefaultAnalytics(asset['asset_id'])
    data=[]
    params = await getParamName(asset['asset_id'])

    for j in range(0,len(params)):
        # data[params[j]]={}
        dat={
            "name":params[j],
            "type":"",
            "option":{}
        }
        dataModel={
            'xAxis': {
                'type': 'category',
                'data': []
            },
            'yAxis': {
                'type': 'value'
            },
            'series': [{
                'data': [],
                'type': 'line'
            }]
        }
        # print('hi1')
        for i in range(0,len(new_asset)):
            # print('hi2')
            if (new_asset[i]['asset_id'] == "60603de39c2537761fe6d334"):
                time=new_asset[i]['cycle']
                # print('hi')
            else:
                # print('hi')
                time=new_asset[i]['datetime'].strftime("%d:%m:%Y:%H:%M:%S")
            dataModel['xAxis']['data'].append( time  )
            val=new_asset[i][params[j]]
            dataModel['series'][0]['data'].append(val)
            # print(dataModel['series'][0]['data'])
        dat['option']=dataModel
        data.append(dat)

    return ResponseModel(data, "Asset added successfully.")

@router.delete("/{id}", response_description="Asset data deleted from the database")
async def delete_asset_data(id: str):
    deleted_asset = await delete_asset(id)
    return ResponseModel("Asset with ID: {} removed".format(id), "Asset deleted successfully") \
        if deleted_asset \
        else ErrorResponseModel("An error occured", 404, "Asset with id {0} doesn't exist".format(id))


@router.delete("/getPredMTurboFan", response_description="Asset data deleted from the database")
async def delete_asset_data(id: int):
    deleted_asset = await delete_asset(id)
    return ResponseModel("Asset with ID: {} removed".format(id), "Asset deleted successfully") \
        if deleted_asset \
        else ErrorResponseModel("An error occured", 404, "Asset with id {0} doesn't exist".format(id))

@router.put("{id}")
async def update_asset(id: str, req=  Body(...)):
    update_asset = await update_asset_data(id, req.dict())
    return ResponseModel("Asset with ID: {} name update is successful".format(id),
                         "Asset name updated successfully") \
        if update_asset \
        else ErrorResponseModel("An error occurred", 404, "There was an error updating the Asset.".format(id))

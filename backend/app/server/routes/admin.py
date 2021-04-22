from fastapi import Body, APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.security import HTTPBasicCredentials
from passlib.context import CryptContext

from ..database.database import admin_collection
import json
#from app.server.auth.admin import validate_login
from ..auth.jwt_handler import signJWT
from ..database.database import add_admin
from ..models.admin import AdminModel

router = APIRouter()

hash_helper = CryptContext(schemes=["bcrypt"])

@router.post("/login")
async def admin_login(admin_credentials = Body(...)):
    print(admin_credentials)
    admin_user = await admin_collection.find_one({"email": admin_credentials['email']})
    print(type(admin_user))
    if ( bool(admin_user) ):
        password = hash_helper.verify(
            admin_credentials['password'], admin_user["password"])
        if (password):
            
            token=signJWT(admin_credentials['email'])
            admin_user['access_token']=token['access_token']
            admin_user['_id']=str(admin_user['_id'])
            for i in range(len(admin_user['assets'])):
                admin_user['assets'][i]=str(admin_user['assets'][i])

            # print(admin_user)
            del admin_user['password']
            return admin_user

        return "Incorrect email or password"

    return "Incorrect email or password"

    # OLD CODE 
    # if validate_login(admin_user):
    #     return {
    #         "email": admin_user.username,
    #         "access_token": signJWT(admin_user.username)
    #     }
    # return "Invalid Login Details!"

@router.post("/")
async def admin_signup(admin: AdminModel = Body(...)):
    print(admin)
    admin1 = await admin_collection.find_one({"email":  admin.email})
    print(admin1)
    if(admin1):
        return "Email already exists"
    admin.password = hash_helper.encrypt(admin.password)
    new_admin = await add_admin(jsonable_encoder(admin))
    return new_admin
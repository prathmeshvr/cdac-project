from __future__ import annotations
from typing import Optional,List
from pydantic import BaseModel, EmailStr, Field
import json




class DataModel(BaseModel):
    name: str
    value: str

# class ServiceModel(BaseModel):
class ServiceModel(BaseModel):
    name: str
    serviceType: str
    trainDataUrl: str
    testDataUrl: str
    modelUrl: str
    apiUrl: str


# class Model(BaseModel):
#     datetime: int
#     name: str
#     data: List[Datum]

class AssetModel(BaseModel):
    datetime: int
    name: str
    topic: str
    parameters:Optional[List[DataModel]]
    url: str
    services:Optional[List[ServiceModel]]
    class Config:
        schema_extra = {
            "example": {
                "datetime": "Date time",
                "topic": "Your topic name",
                "name": "Energy Meter",
                "parameters": [{ "name": "name", "value":"value"}],
                "url": "str"
            }
        }


class UpdateAssetModel(BaseModel):
    datetime: Optional[int]
    topic:Optional[str]
    name: Optional[int]
    parameters: List[DataModel]
    url: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "datetime": "Date time",
                "name": "Energy Meter",
                "topic": "Your topic name",
                "parameters": [{ "name": "name", "value":"value"}],
                "url": "str"
            }
        }


def ResponseModel(data, message):
    return {
        "data": data,
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {
        "error": error,
        "code": code,
        "message": message
    }

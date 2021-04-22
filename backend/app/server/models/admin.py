from pydantic import BaseModel, Field, EmailStr
from typing import Optional,List

class AdminModel(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)
    assets:Optional[List[str]] 

    class Config:
        schema_extra = {
            "example": {
                "fullname": "Abdulazeez Abdulazeez Adeshina",
                "email": "abdulazeez@x.com",
                "password": "Yourpasswordgoes here."
            }
        }
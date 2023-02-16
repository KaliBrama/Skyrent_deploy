
from pydantic import BaseModel


class LocationSchema(BaseModel):
    pk: int
    title: str
    description: str
    picture_url: str
    price: int
    country: str
    city:str
    features_on: str
    features_off: str
    host_name: str
    host_phone: str
    host_location: str    

    class Config:
        orm_mode = True

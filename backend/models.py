from sqlalchemy import Column, Integer, String

from database import Base


class LockalModel(Base):
    __tablename__ = "location"

    pk = Column(Integer, primary_key=True, index=True)
    title = Column(String(50), index=True)
    description = Column(String(300))
    picture_url = Column(String(300))
    price = Column(Integer)
    country = Column(String(50))
    city = Column(String(30))
    features_on = Column(String(300))
    features_off = Column(String(300))
    host_name = Column(String(100))
    host_phone = Column(String(100))
    host_location = Column(String(100))



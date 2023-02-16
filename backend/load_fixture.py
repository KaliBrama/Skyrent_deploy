import json
from database import SessionLocal, engine
import models

db = SessionLocal()
models.Base.metadata.create_all(bind=engine)

with open("../fixture/total_list.json", encoding="utf-8") as f:

    places = json.load(f)
    for i in places:
        db_places = models.LockalModel(
   
            pk = i["pk"],
            title = i["title"],
            description = i["description"],
            picture_url = i["picture_url"],
            price = i["price"],
            country = i["country"],
            city = i["city"],
            features_on = i["features_on"],
            features_off = i["features_off"],
            host_name = i["host_name"],
            host_phone = i["host_phone"],
            host_location = i["host_location"]         
        )
        
        db.add(db_places)
    db.commit()
db.close()
         

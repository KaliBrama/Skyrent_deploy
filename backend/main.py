from fastapi import FastAPI, HTTPException, Query
from models import Base
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI
from schemas import LocationSchema
import uvicorn

from crud import get_places, get_from_pk

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    session = SessionLocal()
    try:
        yield session
        session.commit()
    finally:
        session.close()


@app.get("/places/", response_model=List[LocationSchema])
def all_places(db: Session = Depends(get_db), city: Optional[str] = Query(None, alias="city"), frome: Optional[int] = Query(None, alias="from"), to: Optional[int] = Query(None, alias="to")):
    """ Функция get метода страницы /places
        В строке URL получает данные для фильтров:
        /places?city=<city>
        /places?from=1,to=1000
        Если есть query по городу, и цене от и до
    """
    filters = {"city": city, "frome": frome, "to": to}
    places = get_places(db, **filters)
    return places


@app.get("/places/{pk}", response_model=LocationSchema)
def one_place(pk: int, db: Session = Depends(get_db)):
    """ Функция get метода страницы /places/pk
        Это кариочка одного товара
    """
    db_places = get_from_pk(db, pk=pk)
    if db_places is None:
        raise HTTPException(status_code=404, detail="Pk not found")
    return db_places


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

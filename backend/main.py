from fastapi import FastAPI, HTTPException
from models import LockalModel, Base
from database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
from typing import Any, List
from sqlalchemy.orm import Session
from fastapi import Depends, FastAPI
from schemas import LocationSchema
import uvicorn

from crud import get_places, get_from_pk

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
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
def all_places(db: Session = Depends(get_db)):
    places = get_places(db)
    return places


@app.get("/places/{pk}", response_model=LocationSchema)
def one_place(pk: int, db: Session = Depends(get_db)):
    db_places = get_from_pk(db, pk=pk)
    if db_places is None:
        raise HTTPException(status_code=404, detail="Framework not found")
    return db_places


if __name__ == "__main__":
    uvicorn.run(app, host="192.168.12.1", port=8000)


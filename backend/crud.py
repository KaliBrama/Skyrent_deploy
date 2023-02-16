from sqlalchemy.orm import Session
from models import LockalModel


def get_from_pk(db: Session, pk: int):
    return db.query(LockalModel).filter(LockalModel.pk == pk).first()

def get_places(db: Session):
    return db.query(LockalModel).all()

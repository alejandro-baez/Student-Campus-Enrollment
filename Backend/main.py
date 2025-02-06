from fastapi import FastAPI, Depends
import models
from database import engine, Session
from typing import Annotated
from sqlalchemy import Session


app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():
    session = Session()
    try:
        yield session
    finally:
        session.close()

db_dependency = Annotated(Session, Depends(get_db))

@app.get("/")
async def hello_world():
    return "Hello Worldssssss"

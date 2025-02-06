from fastapi import FastAPI, Depends
import models
from database import engine, Session
from typing import Annotated
from sqlalchemy import Session
from pydantic import BaseModel, EmailStr, Field
import uuid


app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Pydantic models
class StudentBase(BaseModel):
    id: uuid.UUID
    first_name: str
    last_name: str
    email: EmailStr
    imageUrl: str
    gpa: Annotated[float,Field(ge=0,le=4)]


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

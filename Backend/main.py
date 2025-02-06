from fastapi import FastAPI, Depends
import models
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
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
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
async def hello_world():
    return "Hello Worldssssss"

@app.post('/student')
async def create_student(student: StudentBase, db: db_dependency):
    db_student = models.Student(first_name=student.first_name, last_name=student.last_name, email=student.email, imageUrl=student.imageUrl,gpa=student.gpa)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return {"student": db_student}



from fastapi import FastAPI, Depends, HTTPException
import models
from database import engine, SessionLocal
from typing import Annotated,Optional
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr, Field
# import uuid



app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Pydantic models
class StudentBase(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    imageUrl: Optional[str] = None
    gpa: Annotated[float,Field(ge=0,le=4)]

class CampusBase(BaseModel):
    name: str
    imageUrl: Optional[str] = None
    address: str
    description: str


def get_db():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
async def hello_world():
    return {'status': 'endpoints running'}


@app.post('/students')
async def create_student(student: StudentBase, db: db_dependency):
    db_student = models.Student(**student.model_dump(exclude_unset=True))
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return {"student": db_student}

@app.get('/students')
async def get_all_students(db:db_dependency):
    db_all_students = db.query(models.Student).all()
    return db_all_students


@app.get('/students/{student_id}')
async def get_single_student(student_id:int, db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()
    return {"student":db_student}


@app.put('/students/{student_id}')
async def update_student(student:StudentBase,student_id:int,db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()

    if not db_student:
        raise HTTPException(status_code=404,detail='Student not found')
    
    for key,value in student.model_dump(exclude_unset=True).items():
        setattr(db_student,key,value)
    
    db.commit()
    db.refresh(db_student)

    return db_student


@app.delete('/students/{student_id}')
async def delete_student(student_id:int,db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()

    if not db_student:
        raise HTTPException(status_code=404,detail='Student not found')
    
    db.delete(db_student)
    db.commit()

    return {'message':"Student deleted successfully"}


# Campuses Route

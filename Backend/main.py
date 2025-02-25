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
    first_name: str
    last_name: str
    email: EmailStr
    imageUrl: Optional[str] = None
    gpa: Annotated[float,Field(ge=0,le=4)]
    campus_id: Optional[int] = None

class UpdateStudent(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[EmailStr] = None
    imageUrl: Optional[str] = None
    gpa: Optional[Annotated[float,Field(ge=0,le=4)]] = None
    campus_id: Optional[int] = None

class CampusBase(BaseModel):
    name: str
    imageUrl: Optional[str] = None
    address: str
    description: str

class UpdateBase(BaseModel):
    name: Optional[str] = None
    imageUrl: Optional[str] = None
    address: Optional[str] = None
    description: Optional[str] = None

def get_db():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/api/")
async def hello_world():
    return {'status': 'endpoints running'}


@app.post('/api/students')
async def create_student(student: StudentBase, db: db_dependency):
    db_student = models.Student(**student.model_dump(exclude_unset=True))
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return {"student": db_student}

@app.get('/api/students')
async def get_all_students(db:db_dependency):
    db_all_students = db.query(models.Student).all()
    return db_all_students


@app.get('/api/students/{student_id}')
async def get_single_student(student_id:int, db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()
    return {"student":db_student}


@app.put('/api/students/{student_id}')
async def update_student(student:UpdateStudent,student_id:int,db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()

    if not db_student:
        raise HTTPException(status_code=404,detail='Student not found')
    
    for key,value in student.model_dump(exclude_unset=True).items():
        setattr(db_student,key,value)
    
    db.commit()
    db.refresh(db_student)

    return db_student


@app.delete('/api/students/{student_id}')
async def delete_student(student_id:int,db:db_dependency):
    db_student = db.query(models.Student).filter_by(id=student_id).one_or_none()

    if not db_student:
        raise HTTPException(status_code=404,detail='Student not found')
    
    db.delete(db_student)
    db.commit()

    return {'message':"Student deleted successfully"}


# Campuses Route

@app.post('/api/campuses')
async def create_campus(campus: CampusBase, db:db_dependency):
    db_campus = models.Campus(**campus.model_dump(exclude_unset=True))
    db.add(db_campus)
    db.commit()
    db.refresh(db_campus)
    return db_campus


@app.get('/api/campuses')
async def get_all_campuses(db:db_dependency):
    db_all_campuses = db.query(models.Campus).all()

    if not db_all_campuses:
        raise HTTPException(status_code=404,detail="No campuses")
    
    return db_all_campuses


@app.get('/api/campuses/{campus_id}')
async def get_single_campus(campus_id: int,db:db_dependency):
    db_campus = db.query(models.Campus).filter_by(id=campus_id).one_or_none()
    
    if not db_campus:
        raise HTTPException(status_code=404,detail="Campus not found")
    
    return {'campus':db_campus}


@app.put('/api/campuses/{campus_id}')
async def update_campus(campus:UpdateBase,campus_id:int,db:db_dependency):
    db_campus = db.query(models.Campus).filter_by(id=campus_id).one_or_none()

    if not db_campus:
        raise HTTPException(status_code=404, detail='Campus not found')

    for key,value in campus.model_dump(exclude_unset=True).items():
         setattr(db_campus,key,value)
    
    db.commit()
    db.refresh(db_campus)

    return db_campus

@app.delete('/api/campuses/{campus_id}')
async def delete_campus(campus_id:int,db:db_dependency):
    db_campus = db.query(models.Campus).filter_by(id=campus_id).one_or_none()

    if not db_campus:
        raise HTTPException(status_code=404,detail='Campus not found')

    db.delete(db_campus)
    db.commit()

    return {'message':'Student deleted successfully'}
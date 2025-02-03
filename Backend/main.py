from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

URL_DATABASE = 'postgres://localhost:5432/campus_db'

engine = create_engine(URL_DATABASE)

Session = sessionmaker(bind=engine)

class Base(DeclarativeBase):
    pass
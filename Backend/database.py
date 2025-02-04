from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

URL_DATABASE ="postgresql://myuser:password@db:5432/campus_db"

engine = create_engine(URL_DATABASE)

Session = sessionmaker(bind=engine)

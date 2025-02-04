from fastapi import FastAPI
import models
from database import engine, Session


app = FastAPI()

models.Base.metadata.create_all(bind=engine)


def get_db():

    session = Session()
    try:
        yield session
    finally:
        session.close()


@app.get("/")
async def hello_world():
    return "Hello Worldssssss"

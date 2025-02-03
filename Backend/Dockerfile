FROM python:3.12.8-alpine

RUN pip install poetry==1.8.3

WORKDIR /app

COPY pyproject.toml poetry.lock main ./

RUN poetry install

ENTRYPOINT [ "poetry","run","python","-m","main" ]

CMD [ "uvicorn" , "main:app" , "--host" , "0.0.0.0" , "--port", "80" ]

EXPOSE 80
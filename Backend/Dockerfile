FROM python:3.12.8-alpine

WORKDIR /app

RUN pip install --no-cache-dir poetry==1.8.3

COPY pyproject.toml poetry.lock ./

RUN poetry config virtualenvs.create false \
    && poetry install 

COPY . .

# ENTRYPOINT [ "poetry","run","python","-m","main" ]
EXPOSE 80

CMD [ "uvicorn" , "main:app" , "--host" , "0.0.0.0" , "--port", "80" ]

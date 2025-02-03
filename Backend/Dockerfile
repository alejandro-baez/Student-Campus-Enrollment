FROM python:3.12.8-alpine

# Sets the working directory inside the container named app
WORKDIR /app

# Install poetry using pip
RUN pip install --no-cache-dir poetry==1.8.3

# Copies only dependency files first for better caching
COPY pyproject.toml poetry.lock ./

# Install dependencies using Poetry and makes it so Poetry does not us a virtual environmnet
RUN poetry config virtualenvs.create false \
    && poetry install 

# Copy application files from Backend folder,
COPY . .

# Exposing FastAPI default port
EXPOSE 80

# Running with hot reload
CMD [ "uvicorn" , "main:app" , "--host" , "0.0.0.0" , "--port", "80", "--reload" ]

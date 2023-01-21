# start by pulling the python image

# Shared service
FROM python:alpine3.17

# FROM python:3.8-slim-buster

RUN addgroup -S api && adduser -S api -G api

COPY ./services/python_flask /home/api
COPY ./shared /home/api/shared/

WORKDIR /home/api

RUN pip3 install -r requirements.txt

ENV FLASK_APP=main.py

EXPOSE 3700

ENV FLASK_DEBUG=1

RUN mkdir -p repositories

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

# Standalon service

# FROM python:3.8-slim-buster

# WORKDIR /python-flask

# COPY requirements.txt requirements.txt
# RUN pip3 install -r requirements.txt

# COPY . .

# ENV FLASK_APP=main.py

# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]

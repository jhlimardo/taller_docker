# Microservices Template

## Start services

- Copy example .envExample to .env in environment
- execute docker-compose up -d

--------------

## Auth Service

### Health Check

curl -X GET http://localhost:8080/v1/auth/public/healthcheck

### RestFull Resources:

- Create User Account
curl -X POST http://localhost:8080/v1/auth/resources/users --header "Content-Type: application/json" --data '{ "email" : "test@email.com" , "name" : "Gato", "lastName": "Gris", "password" : "1234"}'


### Other Rest endpoints:
- Login 
curl -X POST http://localhost:8080/v1/auth/login --header "Content-Type: application/json"   --data '{ "email" : "test@email.com" , "password" : "1234"}'

----------

## Product Service

### Health Check

curl -X GET http://localhost:8080/v1/product/public/healthcheck


### RestFull Resources:

- Create a new product
curl -X POST http://localhost:8080/v1/transaction/resources/assets  --header "Content-Type: application/json" --header  "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MjAyZTMwYmE4NzAwNjAzYzM5NzFlNWMiLCJpYXQiOjE2NDQ1MDkyODQsImV4cCI6MTY0OTY5MzI4NH0.pCiGQ-Rt9JKtB84iWplWUpsBOxP0b6CUdLqsuEhIcRc" --data '{ "name" : "Registro de nacimiento" , "hash" : "34423423545345345345345" }'

-----
Author Dimar Borda

------------------------------------------------------------------------------------------------------
# Taller

### Create a new User 
curl -X POST http://localhost:8080/v1/auth/resources/users --header "Content-Type: application/json" --data '{ "email" : "test@email.com" , "name" : "Tatiana", "lastName": "Pachon", "password" : "123456"}'

Author: Tatiana Pachon

### Delete User 
curl -X DELETE http://localhost:8080/v1/auth/resources/users/:id  --header "Content-Type: application/json"

Author: Joseph

### Modify User 
curl -X PUT http://localhost:8080/v1/auth/resources/users/:id  --header "Content-Type: application/json" --data '{ "email" : "test@email.com" , "name" : "Jose", "lastName": "Limardo", "password" : "123456"}'

### Get Users
curl -X GET http://localhost:8080/v1/auth/resources/users/  --header "Content-Type: application/json"


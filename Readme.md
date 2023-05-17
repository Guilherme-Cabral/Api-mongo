# this project is under development 

that is it by now is on **development** version

## Post - "/user"
> requires a few fields to be accepted 

    {
        "name": "rafael lata",
        "email": "rafael.miranda@hotmail.com",
        "password": "123456"
    }

## Get - "/search"

> a simple get can list all users for now 

### to setup mongodb on docker try this code on your default shell

    docker run --name {name of your preference} -d -p 27017:27017 mongo:latest
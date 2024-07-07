# E-commerce app : Users service

## Floder structure

    products-service/
    ├── config/
    │   └── database.js             (Database connection setup)
    ├── controllers/
    │   └── userController.js       (Handles incoming requests and provides valid responses)
    ├── middleware/
    │   └── authMiddleware.js       (Validate jwt token and grants the access)
    ├── models/
    │   └── User.js                 (Defines the model schema using ORM tool)
    ├── routes/
    │   └── userRoutes.js           (Defines request type and parameters)
    ├── app.js                      (Initializes the server and configures API endpoints)
    ├── .env                        (Environment variables: credentials, ports, etc.)
    └── package.json


## Workflow

1. **DB Schema :** Create a database schema and store the credentials in the **.env** file.
2. **DB connection :** Create a file **database.js** inside the **config/** folder and write code to connect with the database.
3. **Model :** Create a file **User.js** inside the **models/** folder. This file will define the table schema in the database using Sequelize.
4. **Controller :** Create a file **userController.js** inside the **controllers/** folder. This file will contain the main logic for handling incoming requests and providing valid responses.
5. **Middleware :** Create a file **authMiddleware.js** inside the **middlewares/** folder. this file will contain the JWT token validation logic.
6. **Routes :** Create a file **userRoutes.js** inside the **routes/** folder. This file will define the routes, request types (GET, PUT, POST, DELETE), parameters, and appropriate controller functions for each request.
7. **Server :** Create a file **app.js** in the main service folder (**users-service**). This file will contain the code to start the service and configure API endpoints.


## Libraries

1. **dotnet :** Loads environment variables from a .env file into process.env, making it easier to manage configuration settings.
2. **express :** Minimalist web framework for Node.js, used to build APIs and web applications.
3. **sequelize :** ORM for Node.js that supports various SQL dialects, making it easier to interact with a database using models and queries.


## Endpoints

1. **POST /api/users/register -** Register new user
    sample_data: **{ "username": "user1", "contact":9876543210, "email": "user1@example.com", "password": "password123" }**
2. **POST /api/users/login -** Login user (provides the JWT toke)
    sample_data: **{ "email": "user1@example.com", "password": "password123" }**
    sample_output: **{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMDM1ODQxMSwiZXhwIjoxNzIwMzYyMDExfQ.gBE3Yo4gGDXFmiXbsfWMbTVCmVvdQE1TWM9zAcCxkSA" }**
3. **GET /api/users/profile -** Get user profile (requires JWT token in Authorization header)
    procedure: In Postman, before hitting the profile endpoint, go to the Auth section, select the auth type as Bearer Token, and replace the value of the token with the value received after hitting the login endpoint.

# Installations

1. open cmd navigate to main folder(**users-service**) and run command : **npm install**

# run
1. open cmd navigate to main folder(**users-service**) and run command : **node app.js**
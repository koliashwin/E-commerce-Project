# E-commerce app : Payments service

## Floder structure

    products-service/
    ├── config/
    │   └── database.js             (Database connection setup)
    ├── controllers/
    │   └── paymentController.js       (Handles incoming requests and provides valid responses)
    ├── middleware/
    │   └── authMiddleware.js       (Validate jwt token and grants the access)
    ├── models/
    │   └── Payment.js                 (Defines the model schema using ORM tool)
    ├── routes/
    │   └── paymentRoutes.js           (Defines request type and parameters)
    ├── app.js                      (Initializes the server and configures API endpoints)
    ├── .env                        (Environment variables: credentials, ports, etc.)
    └── package.json


## Workflow

1. **DB Schema :** Create a database schema and store the credentials in the **.env** file.
2. **DB connection :** Create a file **database.js** inside the **config/** folder and write code to connect with the database.
3. **Model :** Create files **payment.js** inside the **models/** folder. This file will define the table schema in the database using Sequelize.
4. **Controller :** Create a file **paymentController.js** inside the **controllers/** folder. This file will contain the main logic for handling incoming requests and providing valid responses.
5. **Middleware :** Create a file **authMiddleware.js** inside the **middlewares/** folder. this file will contain the JWT token validation logic.
6. **Routes :** Create a file **paymentRoutes.js** inside the **routes/** folder. This file will define the routes, request types (GET, PUT, POST, DELETE), parameters, and appropriate controller functions for each request.
7. **Server :** Create a file **app.js** in the main service folder (**payments-service**). This file will contain the code to start the service and configure API endpoints.


## Libraries

1. **dotnet :** Loads environment variables from a .env file into process.env, making it easier to manage configuration settings.
2. **express :** Minimalist web framework for Node.js, used to build APIs and web applications.
3. **sequelize :** ORM for Node.js that supports various SQL dialects, making it easier to interact with a database using models and queries.


## Endpoints

**for valid jwt token do this :** In Postman, go to the Auth section, select the auth type as Bearer Token, and replace the value of the token with the value received after hitting the login endpoint (**POST /api/users/login**).

1. **POST /api/payments -** Create a new payment (requires JWT token in Authorization header)
    **sample_data:** 
    {
        "orderId": 1,
        "amount": 130.0,
        "paymentMethod": "card"
    }

2. **PUT /api/payments/status -** Update payment status (requires JWT token in Authorization header)
    **sample_data:** 
    {
        "paymentId": 1,
        "status": "completed"
    }
    
3. **GET /api/payments/order/:orderId -** Get payment details by order ID (requires JWT token in Authorization header)

# Installations

1. open cmd navigate to main folder(**payments-service**) and run command : **npm install**

# run
1. open cmd navigate to main folder(**payments-service**) and run command : **node app.js**
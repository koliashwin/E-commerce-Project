# E-commerce app : Product service

## Floder structure

    products-service/
    ├── config/
    │   └── database.js             (Database connection setup)
    ├── controllers/
    │   └── productController.js    (Handles incoming requests and provides valid responses)
    ├── models/
    │   └── Product.js              (Defines the model schema using ORM tool)
    ├── routes/
    │   └── productRoutes.js        (Defines request type and parameters)
    ├── app.js                      (Initializes the server and configures API endpoints)
    ├── .env                        (Environment variables: credentials, ports, etc.)
    └── package.json


## Workflow

1. **DB Schema :** Create a database schema and store the credentials in the **.env** file.
2. **DB connection :** Create a file **database.js** inside the **config/** folder and write code to connect with the database.
3. **Model :** Create a file **Product.js** inside the **models/** folder. This file will define the table schema in the database using Sequelize.
4. **Controller :** Create a file **productController.js** inside the **controllers/** folder. This file will contain the main logic for handling incoming requests and providing valid responses.
5. **Routes :** Create a file **productRoutes.js** inside the **routes/** folder. This file will define the routes, request types (GET, PUT, POST, DELETE), parameters, and appropriate controller functions for each request.
6. **Server :** Create a file **app.js** in the main service folder (**products-service**). This file will contain the code to start the service and configure API endpoints.


## Libraries

1. **dotnet :** Loads environment variables from a .env file into process.env, making it easier to manage configuration settings.
2. **express :** Minimalist web framework for Node.js, used to build APIs and web applications.
3. **sequelize :** ORM for Node.js that supports various SQL dialects, making it easier to interact with a database using models and queries.


## Endpoints

1. **GET /api/products -** Fetch all products
2. **GET /api/products/:id -** Fetch a specific product
3. **POST /api/products -** Add a new product
    sample data: **{ "name": "Product 1", "description": "Description", "price": 100.0, "stock": 10, "rating": 2.5 }**
4. **PUT /api/products/:id -** Update a product
    sample data: **{ "name": "Updated Product", "description": "Updated Description", "price": 150.0, "stock": 5, "rating": 4.5 }**
5. **DELETE /api/products/:id -** Delete a product


# Installations

1. open cmd navigate to main folder(**products-service**) and run command : **npm install**


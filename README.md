# E-commerce-Project

### Current progress:

1. **product-service:** Created APIs for getting a single product, getting a product list, updating a product, deleting a product, and creating a product.
2. **user-service:** Created APIs for login, registration, and authenticating users with JWT tokens.
3. **order-service:** Created APIs for order creation, getting an order by orderId, and getting orders by userId.
4. **payment-service:** Created APIs for payment creation, updating payment status, and getting payment details by orderId.
5. **microservice setup:** All microservices are set up and functioning independently(for ease of devlopment I've kept all sevices in same parent folder and used the same database).
6. **JWT authorization:** Most of the APIs are validated based on JWT tokens.
7. **API testing in Postman:** You can find the testing flow in the `API_Test.md` file inside the backend folder.


### To do List:

1. **Frontend:** Create the frontend of the application and integrate all the APIs.
2. **Config Script :** Create the single script file to run all the services in one go.
3. **Documentation:** Complete and update the documentation for the project.


### Optional Features:

1. **Inventory Management System:** Implement an inventory management system to track stock levels and manage inventory.
2. **Reports Based on Sales/Stocks of Products:** Generate reports based on the sales and stock levels of products.


### setup and test:

you can find the `README.md` file inside every service folder. This file contains flow/explanations of that servies, endpoints, install and run instructions.

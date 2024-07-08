1. **registration (POST):-** http://localhost:5001/api/users/register

   **sample data :-**

   ```json
   {
     "username": "testuser",
     "contact": 9876543210,
     "email": "testuser@example.com",
     "password": "password123"
   }
   ```

   **sample response (201):-**

   ```json
   {
     "id": 2,
     "username": "testuser",
     "email": "testuser@example.com",
     "contact": 9876543210,
     "password": "$2a$10$iwL6/3YiI90ONWrBKNVZv.9vpu/cIofVUBESlPYTkXDFPcGAnHn42",
     "updatedAt": "2024-07-08T15:55:50.681Z",
     "createdAt": "2024-07-08T15:55:50.681Z"
   }
   ```

2. **login (POST):-** http://localhost:5001/api/users/login

   **sample data :-**

   ```json
   {
     "email": "testuser@example.com",
     "password": "password123"
   }
   ```

   **sample response :-**

   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMDQ1NDIyOSwiZXhwIjoxNzIwNDU3ODI5fQ.NBSiqxiXG8BnHeXV47id4oN5hvKIX9tkHb3HJdlw4LI"
   }
   ```

**Note (do this for befor every hitting api's below) :** in postman, go to Auth tab, in Auth Type select Bearer Token and replace the token value with the login response

3. **create order (POST):-** http://localhost:5002/api/orders

   **sample data :-**

   ```json
   {
     "items": [
       { "productId": 1, "quantity": 2, "price": 249.99 },
       { "productId": 3, "quantity": 1, "price": 149.99 }
     ],
     "totalAmount": 649.97
   }
   ```

   **sample response :-**

   ```json
   {
     "id": 3,
     "userId": 2,
     "totalAmount": 649.97,
     "status": "pending",
     "updatedAt": "2024-07-08T16:07:38.114Z",
     "createdAt": "2024-07-08T16:07:38.114Z"
   }
   ```

4. **create payment for order (POST):-** http://localhost:5003/api/payments

   **sample data :-**

   ```json
   {
     "orderId": 2, // Use the actual order ID from the previous step
     "amount": 649.0,
     "paymentMethod": "card"
   }
   ```

   **sample response :-**

   ```json
   {
     "payment": {
       "id": 2,
       "orderId": 2,
       "amount": 649,
       "status": "pending",
       "paymentMethod": "card",
       "updatedAt": "2024-07-08T16:09:41.771Z",
       "createdAt": "2024-07-08T16:09:41.771Z"
     },
     "clientSecret": "pi_1PaK8HJAJfZb9HEBNUPHUCl0_secret_zqVrUBtHVTBF88qu9KfLEIBIu"
   }
   ```

5. **update payment status (PUT):-** http://localhost:5003/api/payments/status

   **sample data :-**

   ```json
   {
     "paymentId": 2, // Use the actual payment ID from the previous step
     "status": "completed"
   }
   ```

   **sample response :-**

   ```json
   {
     "id": 2,
     "orderId": 2,
     "amount": 649,
     "status": "completed",
     "paymentMethod": "card",
     "createdAt": "2024-07-08T16:09:41.000Z",
     "updatedAt": "2024-07-08T16:11:06.464Z"
   }
   ```

6. **varify payment status (GET):-** http://localhost:5003/api/payments/order/2 (Replace 2 with the actual order ID)

   **sample response :-**

   ```json
   {
     "id": 2,
     "orderId": 2,
     "amount": 649,
     "status": "completed",
     "paymentMethod": "card",
     "createdAt": "2024-07-08T16:09:41.000Z",
     "updatedAt": "2024-07-08T16:11:06.000Z"
   }
   ```

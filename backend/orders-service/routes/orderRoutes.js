import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { createOrder, getOrderById, getOrdersByUser } from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/', authenticate, createOrder);
orderRoutes.get('/:id', authenticate, getOrderById);
orderRoutes.get('/user/:userId', authenticate, getOrdersByUser);

export default orderRoutes;
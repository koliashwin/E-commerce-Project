import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { createPayment, getPaymentByOrderId, updatePaymentStatus } from '../controllers/paymentController.js';

const paymentRoutes = express.Router();

paymentRoutes.post('/', authenticate, createPayment);
paymentRoutes.put('/status', authenticate, updatePaymentStatus);
paymentRoutes.get('/order/:orderId', authenticate, getPaymentByOrderId);

export default paymentRoutes
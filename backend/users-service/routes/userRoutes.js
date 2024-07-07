import express from 'express';
import { getProfile, login, register } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile', authenticate, getProfile);

export default userRouter;
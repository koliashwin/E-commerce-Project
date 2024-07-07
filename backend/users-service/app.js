import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import sequelize from './config/database.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5001;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`users-service is running on port ${PORT}`);
    });
}).catch(err => {
    console.log('Error syncing database: '+ err)
})

export default app;
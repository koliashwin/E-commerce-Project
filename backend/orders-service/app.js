import express from 'express';
import orderRoutes from './routes/orderRoutes.js';
import sequelize from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5002;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`orders-service is running on port ${PORT}`);
    });
}).catch(err => {
    console.log('Error syncing database: '+ err)
});

export default app;
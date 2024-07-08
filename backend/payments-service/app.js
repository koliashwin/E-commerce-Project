import express from 'express';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js';
import sequelize from './config/database.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5003;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`payments-service is running on port ${PORT}`);
    });
}).catch(err => {
    console.log('Error syncing database: '+ err)
});

export default app;
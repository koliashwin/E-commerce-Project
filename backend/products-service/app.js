import express from "express";
import dotenv from 'dotenv';
import productRoutes from "./routes/productRoutes.js";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`products-service is running on port ${PORT}`);
    });
}).catch(err => {
    console.log('Error syncing database: '+ err)
})

export default app;
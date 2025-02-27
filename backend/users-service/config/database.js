import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected via users-service ... '))
    .catch(err => console.log('Error: '+err));

export default sequelize;
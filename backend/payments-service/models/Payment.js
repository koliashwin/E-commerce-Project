import { DataTypes } from 'sequelize';
import sequelize from "../config/database.js";

const Payment = sequelize.define('Payment',{
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Payment;
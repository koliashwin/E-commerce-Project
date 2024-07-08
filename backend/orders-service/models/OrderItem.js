import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Order from './Order.js';

const OrderItem = sequelize.define('OrderItem', {
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

Order.hasMany(OrderItem, {as: 'items', foreignKey: 'orderId'});
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

export default OrderItem;
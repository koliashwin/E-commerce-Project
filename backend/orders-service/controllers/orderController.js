import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";


export const createOrder = async (req, res) => {
    const { items, totalAmount } = req.body;

    try {
        const order = await Order.create({
            userId: req.userId,
            totalAmount,
            status: 'pending'
        });

        const orderItems = items.map(item => ({
            orderId: order.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
        }));

        await OrderItem.bulkCreate(orderItems);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {include: 'items'});
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({error: 'Order not found'});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.findAll({
            where: { userId: req.userId },
            include: 'items'
        });
        res.json(orders)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
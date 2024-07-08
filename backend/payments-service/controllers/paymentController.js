import Stripe from 'stripe';
import Payment from '../models/Payment.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPayment = async (req, res) => {
    const { orderId, amount, paymentMethod } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'INR',
            payment_method_types: ['card']
        });

        const payment = await Payment.create({
            orderId,
            amount,
            status: 'pending',
            paymentMethod,
        });

        res.status(201).json({
            payment,
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePaymentStatus = async (req, res) => {
    const { paymentId, status } = req.body;

    try {
        const payment = await Payment.findByPk(paymentId);
        if (payment) {
            payment.status = status;
            await payment.save();
            res.json(payment);
        } else {
            res.status(404).json({ error: 'Something went wrong with update payment status' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPaymentByOrderId = async (req, res) => {
    try {
        const payment = await Payment.findOne({ where: { orderId: req.params.orderId } });
        if (payment) {
            res.json(payment);
        } else {
            res.status(404).json({ error: 'Something went wrong with get payment by orderId'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
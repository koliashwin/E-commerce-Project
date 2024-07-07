import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ error: 'Product not fount' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, rating } = req.body;
        const newProduct = await Product.create({ name, description, price, stock, rating });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, stock, rating } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.update({ name, description, price, stock, rating });
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not fount' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ error: 'Product not fount' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
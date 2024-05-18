const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products)
    } catch (err) {
        res.status(500).json({error : err.message });
    };
});

// get product by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.getProductById(id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// create product
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const result = await Product.createProduct(name, description, price);
        res.status(201).json({ message: 'Product created', id: result.insertId });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// update product
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const result = await Product.updateProduct(id, name, description, price);
        res.json({ message: 'Product updated' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// delete product
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Product.deleteProduct(id);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
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
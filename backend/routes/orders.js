const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.getAllOrders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get order by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.getOrderById(id);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// create new order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json({ status: 'Order saved' });
});

// delete order
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Order.deleteOrder(id);
    res.json({ status: 'Order deleted' });
});

// update order
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await Order.updateOrder(id, req.body);
    res.json({ status: 'Order updated' });
});

module.exports = router;
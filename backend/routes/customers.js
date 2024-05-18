const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create a new customer
router.post('/customers', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await Customer.createCustomer(username, email, password);
        res.status(201).json({ message: 'Customer created', id: result.insertId });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.getAllCustomers();
        res.json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get customer by ID
router.get('/customers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.getCustomerById(id);
        if (!customer) {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            res.json(customer);
        }
    } catch (error) {
        console.error('Error fetching customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update customer
router.put('/customers/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const result = await Customer.updateCustomer(id, username, email, password);
        res.json({ message: 'Customer updated' });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
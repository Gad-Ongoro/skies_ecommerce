const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// get all addresses
router.get('/', async (req, res) => {
    try {
        const addresses = await Address.getAllAddresses();
        res.json(addresses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get address by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const address = await Address.getAddressById(id);
        res.json(address);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
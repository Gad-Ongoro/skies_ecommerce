const express = require('express');
const router = express.Router();
const Supplier = require('../models/Supplier');

// get all suppliers
router.get('/', async (req, res) => {
    const suppliers = await Supplier.getAllSuppliers();
    res.json(suppliers);
});

// get supplier by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const supplier = await Supplier.getSupplierById(id);
    res.json(supplier);
});

// add supplier
router.post('/', async (req, res) => {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.json({ status: 'Supplier saved' });
});

// update supplier
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await Supplier.updateSupplier(id, req.body);
    res.json({ status: 'Supplier updated' });
});

// delete supplier
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Supplier.deleteSupplier(id);
    res.json({ status: 'Supplier deleted' });
});


module.exports = router
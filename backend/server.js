// create an express server
require('dotenv').config();
const express = require('express');
const connection = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Import routes
const customerRoutes = require('./routes/customers');
const addressRoutes = require('./routes/addresses');
const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/suppliers');
const reviewRoutes = require('./routes/reviews');
const orderRoutes = require('./routes/orders');
const profileRoutes = require('./routes/profiles');

// register routes
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/addresses', addressRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/reviews', reviewRoutes);
app.use('/orders', orderRoutes);
app.use('/profiles', profileRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
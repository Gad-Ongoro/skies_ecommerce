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

// Import customer routes
const customerRoutes = require('./routes/customers');

// Import product routes
const productRoutes = require('./routes/products');

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

// Routes
// register customer route
app.use('/customers', customerRoutes);

// register product route
app.use('/products', productRoutes);


// get all customers
// app.get('/customers', async (req, res) => {
//     connection.query('SELECT * FROM customer', (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal server error' });
//             return;
//         }
//         res.json(results);
//     })
// })

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
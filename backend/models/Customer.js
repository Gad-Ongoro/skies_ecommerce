const db = require('../db');
const bcrypt = require('bcrypt');

class Customer {
    // create customer
    static async createCustomer(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [rows] = await db.query('INSERT INTO customer (username, email, password, date_joined) VALUES (?, ?, ?, NOW())', [username, email, hashedPassword]);
        return rows;
    };

    // get all Customers
    static async getAllCustomers() {
        const [rows] = await db.query('SELECT * FROM customer');
        return rows;
    };

    // get customer by id
    static async getCustomerById(id) {
        const [rows] = await db.query('SELECT * FROM customer WHERE id = ?', [id]);
        return rows[0];
    };

    // update customer
    static async updateCustomer(id, username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [rows] = await db.query('UPDATE customer SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, hashedPassword, id]);
        return rows;
    };
};

module.exports = Customer;
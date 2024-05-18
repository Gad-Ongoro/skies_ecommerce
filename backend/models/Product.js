const db = require('../db');
const bcrypt = require('bcrypt');

class Product {
    static async getAllProducts() {
        const [rows] = await db.query('SELECT * FROM USERS');
        return rows;
    };
}

module.exports = Product;
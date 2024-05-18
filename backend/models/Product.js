const db = require('../db');
const bcrypt = require('bcrypt');

class Product {
    // get all products
    static async getAllProducts() {
        const [rows] = await db.query('SELECT * FROM product');
        return rows;
    };

    // get product by id
    static async getProductById(id) {
        const [rows] = await db.query('SELECT * FROM product WHERE product_id = ?', [id]);
        return rows[0];
    };

    // create product
    static async createProduct(name, description, price) {
        const [rows] = await db.query('INSERT INTO product (name, description, price) VALUES (?, ?, ?)', [name, description, price]);
        return rows.insertId;
    };

    // update product
    static async updateProduct(id, name, description, price) {
        const [rows] = await db.query('UPDATE product SET name = ?, description = ?, price = ? WHERE product_id = ?', [name, description, price, id]);
        return rows;
    };

    // delete product
    static async deleteProduct(id) {
        const [rows] = await db.query('DELETE FROM product WHERE product_id = ?', [id]);
        return rows;
    };

}

module.exports = Product;
const db = require('../db');
const bcrypt = require('bcrypt');

class Address {
    // create address street, city, state, zip_code, customer_id(FOREIGN KEY)
    static async createAddress(street, city, state, zip_code, customer_id) {
        const [rows] = await db.query('INSERT INTO address (street, city, state, zip_code, customer_id) VALUES (?, ?, ?, ?, ?)', [street, city, state, zip_code, customer_id]);
        return rows.insertId;
    };

    // get all addresses
    static async getAllAddresses() {
        const [rows] = await db.query('SELECT * FROM address');
        return rows;
    };

    // get address by id
    static async getAddressById(id) {
        const [rows] = await db.query('SELECT * FROM address WHERE address_id = ?', [id]);
        return rows[0];
    };

    // delete address
    static async deleteAddress(id) {
        const [rows] = await db.query('DELETE FROM address WHERE address_id = ?', [id]);
        return rows;
    };

    // update address
    static async updateAddress(id, street, city, state, zip_code) {
        const [rows] = await db.query('UPDATE address SET street = ?, city = ?, state = ?, zip_code = ? WHERE address_id = ?', [street, city, state, zip_code, id]);
        return rows;
    };
};

module.exports = Address;
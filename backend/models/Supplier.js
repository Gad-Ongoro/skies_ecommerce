const db = require('../db');

class Supplier {
    // create supplier supplier_name, email , phone_number, address, website
    static async createSupplier(supplier_name, email, phone_number, address, website) {
        const [rows] = await db.query('INSERT INTO supplier (supplier_name, email, phone_number, address, website) VALUES (?, ?, ?, ?, ?)', [supplier_name, email, phone_number, address, website]);
        return rows.insertId;
    }

    // get all suppliers
    static async getAllSuppliers() {
        const [rows] = await db.query('SELECT * FROM supplier');
        return rows;
    }

    // get supplier by id
    static async getSupplierById(id) {
        const [rows] = await db.query('SELECT * FROM supplier WHERE supplier_id = ?', [id]);
        return rows[0];
    }

    // update supplier
    static async updateSupplier(id, supplier_name, email, phone_number, address, website) {
        const [rows] = db.query('UPDATE supplier SET supplier_name = ?, email = ?, phone_number = ?, address = ?, website = ? WHERE supplier_id = ?', [supplier_name, email, phone_number, address, website, id]);
        return rows;
    }

    // delete supplier
    static async deleteSupplier(id) {
        const [rows] = await db.query('DELETE FROM supplier WHERE supplier_id = ?', [id]);
        return rows;
    }

};

module.exports = Supplier
const db = require('../db');

class Order {
    // get all orders
    static async getAllOrders() {
        const [rows] = await db.query('SELECT * FROM `order`');
        return rows;
    };

    // get order by id
    static async getOrderById(id) {
        const [rows] = await db.query('SELECT * FROM `order` WHERE order_id = ?', [id]);
        return rows[0];
    };

    // create new order quantity, payment_method, order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, total_amount DECIMAL(5, 2) NOT NULL, status VARCHAR(50), product_id INT, customer_id INT, supplier_id INT
    static async createOrder(order) {
        const [rows] = await db.query('INSERT INTO `order` SET ?', [order]);
        return rows.insertId;
    }    

    // delete order
    static async deleteOrder(id) {
        const [rows] = await db.query('DELETE FROM `order` WHERE order_id = ?', [id]);
        return rows;
    };

    // update order
    static async updateOrder(id, order) {
        const [rows] = await db.query('UPDATE `order` SET ? WHERE order_id = ?', [order, id]);
        return rows;
    };
};

module.exports = Order;
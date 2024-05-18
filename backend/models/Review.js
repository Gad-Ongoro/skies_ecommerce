const db = require('../db');

class Review {
    // get all reviews
    static async getAllReviews() {
        const [rows] = await db.query('SELECT * FROM review');
        return rows;
    };

    // get review by id
    static async getReviewById(id) {
        const [rows] = await db.query('SELECT * FROM review WHERE review_id = ?', [id]);
        return rows[0];
    };

    // create review
    static async createReview(rating, review_text, customer_id, product_id) {
        const [rows] = await db.query('INSERT INTO review (rating, review_text, customer_id, product_id) VALUES (?, ?, ?, ?)', [rating, review_text, customer_id, product_id]);
        return rows.insertId;
    };

    // update review
    static async updateReview(id, rating, review_text) {
        const [rows] = await db.query('UPDATE review SET rating = ?, review_text = ? WHERE review_id = ?', [rating, review_text, id]);
        return rows;
    };

    // delete review
    static async deleteReview(id) {
        const [rows] = await db.query('DELETE FROM review WHERE review_id = ?', [id]);
        return rows;
    };


};

module.exports = Review;
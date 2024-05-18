const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.getAllReviews();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get review by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.getReviewById(id);
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// create review
router.post('/', async (req, res) => {
    const review = new Review(req.body);
    await review.save();
    res.json({ status: 'Review saved' });
});

// update review
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await Review.updateReview(id, req.body);
    res.json({ status: 'Review updated' });
});

// delete review
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Review.deleteReview(id);
    res.json({ status: 'Review deleted' });
});

module.exports = router;
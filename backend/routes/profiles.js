const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// get all profiles
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.getAllProfiles();
        res.json(profiles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get profile by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.getProfileById(id);
        res.json(profile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// create new profile
router.post('/', async (req, res) => {
    const profile = new Profile(req.body);
    await profile.save();
    res.json({ message: 'Profile created' });
});

// update profile
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    await Profile.updateProfile(id, req.body);
    res.json({ message: 'Profile updated' });
});

// delete profile
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Profile.deleteProfile(id);
    res.json({ message: 'Profile deleted' });
});

module.exports = router;
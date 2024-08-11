const express = require('express');
const firebase = require('firebase-admin');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Configure rate limiting
const signupLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many accounts created from this IP, please try again later.',
});

// Apply rate limiting to the signup route
router.post('/signup', signupLimiter, async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await firebase.auth().createUser({
            email: email,
            password: password,
        });
        res.status(201).json({ message: 'User created successfully', uid: userRecord.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

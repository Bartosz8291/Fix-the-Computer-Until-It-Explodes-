const express = require('express');
const firebase = require('firebase-admin');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Configure rate limiting
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again later.',
});

// Apply rate limiting to the login route
router.post('/login', loginLimiter, async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await firebase.auth().getUserByEmail(email);
        // Here, add logic to verify the password and return a session token
        res.status(200).json({ message: 'Login successful', uid: user.uid });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;

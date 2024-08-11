const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.post('/login', async (req, res) => {
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

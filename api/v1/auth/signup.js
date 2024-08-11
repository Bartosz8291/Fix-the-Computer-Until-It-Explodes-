const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Download from Firebase console
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

router.post('/signup', async (req, res) => {
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

const express = require('express');
const bodyParser = require('body-parser');
const signup = require('./api/v1/auth/signup');
const login = require('./api/v1/auth/login');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth/html/api/v1/auth', signup);
app.use('/auth/html/api/v1/auth', login);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

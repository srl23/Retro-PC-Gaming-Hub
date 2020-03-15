const express = require('express');

const router = express.Router();
const User = require('../models/users.js');

router.get('/new', (request, response) => {
	response.send('sign up now! also this works!');
});

router.get('/', (request, response) => {
	response.send('the area where registered users can be viewed');
});

module.exports = router;
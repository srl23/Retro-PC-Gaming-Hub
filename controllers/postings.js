const express = require('express');

const router = express.Router();
const Posting = require('../models/postings.js');

router.get('/new', (request, response) => {
	response.render('postings/new.ejs');
});

router.post('/', (request, response) => {
	response.send('this works! yay!');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

const bcrypt = require('bcrypt');

//path for beginning a session
router.get('/new', (request, response) => {
	response.send('new session/signin path working!');
});

//for creating the sign in process and verifying the password is correct
router.post('/', (request, response) => {
	User.findOne({ username: request.body.username }, (error, foundUsername) => {
		if(foundUsername === null) {
			response.send('Please go back and input a username!');
		} else {
			const passwordMatcher = bcrypt = compareSync(request.body.password, foundUsername.password);
			if(passwordMatcher) {
				request.session.user = foundUsername;
				response.send('password matches, this path works!');
			} else {
				response.send('back to sign-in screen');
			}
		}
	});
});

module.exports = router;
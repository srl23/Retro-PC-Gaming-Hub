//I ended up retyping all of this for fun and it gave me time to consider each phrase and keyword
//and what it all meant as I felt inexperienced with controllers and did not like my initial code structure

const express = require('express');

const router = express.Router();
const User = require('../models/users.js');

//some sample users, may contain jokes such as failed microsoft products and ghosts
//of computing companies CEOs having accounts on here
router.get('/seed', (request, response) => {
	User.create(
		[
			{
				username: 'bill',
				password: 'microsoftbob',
				age: 64,
				gender: 'male',
				name: 'Bill Gates',
				email: 'bill@microsoft.com',
				contact: 'bill#1342 on discord'
			},
			{
				username: 'mrlinux',
				password: 'ihatebill',
				age: 50,
				gender: 'male',
				name: 'Linus Torvalds',
				email: 'linus@linux.org',
				contact: 'linus#9999 @ Discord'
			},
			{
				username: 'jobs',
				password: 'iPassword',
				age: 54,
				gender: 'male',
				name: 'Steve Jobs',
				email: 'jobs@apple.com',
				contact: 'jobs on iMessenger'
			},
			{
				name: 'gaben',
				password: 'moobyftw',
				age: 57,
				gender: 'male',
				name: 'Gabe Newell',
				email: 'gabe@valve.com',
				contact: 'thereisnohl3@gmail.com'
			},
			{
				name: 'ahennig',
				password: 'legacyofkain',
				age: 55,
				gender: 'female',
				name: 'Amy Hennig',
				email: 'amy@skydancemedia.com',
				contact: 'amy#3333 on discord'
			}
		]
	)
});

//this is for getting edits page
router.get('/:id/edit', (request, response) => {
	response.send('this is working!');
});

//for the new page
router.get('/new', (request, response) => {
	response.send('sign up now! also this works!');
});

//for viewing users
router.get('/:id', (request, response) => {
	response.send('id service working');
});

//the main user area of the site where one can view all accounts
router.get('/', (request, response) => {
	response.send('the area where registered users can be viewed');
});

module.exports = router;
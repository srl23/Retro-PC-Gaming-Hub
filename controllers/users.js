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

//this are the routes for getting edits page to users to edit their own info
//this does not include changing username due to actual probems it can cause on forums
router.put('/:id', (request, response) => {
	User.findByIdAndUpdate(request.params.id, request.body, {new:true}, (error, updatedModel) => {
		response.redirect('/index');
	});
});

router.get('/:id/edit', (request, response) => {
	User.findById(request.params.id, (error, userFound) => {
		response.render('users/edit.ejs',
			{
				user:userFound
			}
		)
	});
});

//for new sign ups
router.get('/new', (request, response) => {
	response.render('users/new.ejs');
});

//for viewing users
router.get('/:id', (request, response) => {
	User.findById(request.params.id, (error, userFound) => {
		response.render('users/show.ejs',
			{
				user:userFound
			}
		)
	});
});

//the main user area of the site where one can view all accounts
//the user must be signed in for data protection reasons
router.get('/', (request, response) => {
	if(request.session.user) {
		User.find({}, (error, everyUser) => {
			response.render('users/index.ejs',
				{
					users:everyUser,
					user:request.session.user
				}
			)
		})
	} else {
		response.redirect('/');
	}
});

router.post('/', (request, response) => {
	User.create(request.body, (error, userCreated) => {
		response.redirect('/index');
	});
});

module.exports = router;
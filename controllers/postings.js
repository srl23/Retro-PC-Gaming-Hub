const express = require('express');

const router = express.Router();
const Posting = require('../models/postings.js');

//seeds to test if posts are displaying correctly and to test 
//functionality as well as general populate it, none of these
//are meant to be taken seriously and trying to contact all
//accounts will likely go nowhere
router.get('/seed', (request, response) => {
	Posting.create(
		[
			{
				poster: "bill",
				topic: "aoe 2 anybody?",
				title: "Age of Empires 2",
				message: "anybody up for a few rounds of aoe2? conquerors not required but it would be fun if I could be the aztecs. hit me up!",
				contact: "bill@microsoft.com or bill#1342 on Discord"
			},
			{
				poster: "mrlinux",
				topic: "up for some Civ2, PBEM?",
				title: "Sid Meier's Civilization II: Play the World!",
				message: "I miss the good old days of Civ2 multiplayer. send me some mail or a discord PM",
				contact: "lunis@linux.org or linus#9999 on discord"
			},
			{
				poster: "jobs",
				topic: "Back from the dead for some RoN!",
				title: "Rise of Nations",
				message: "Finally back on the internet, and it's great! Only thing that would make coming back to life better would be some Rise of Nations with friends. I get to be Russia though, gotta love that attrition!",
				contact: "jobs on new iMessenger app" //sorry it does not exist :(
			},
			{
				poster: "gaben",
				topic: "HL2: DM would be great",
				title: "Half-Life 2: Death Match",
				message: "Let's play HL2: DM so I dont have to work on Half-Life 3. Please?",
				contact: "thereisnohl2@gmail.com" //I dont know if this really is somebody's email I came up with something for this
			},
			{
				poster: "ahennig",
				topic: "Dungeon Siege anyone?",
				title: "Dungeon Siege",
				messages: "anybody up for some Dungeon Siege? I haven't played in quite some time it would be awesome to play this again. Thanks for reading!",
				contact: "amy#3333 on Discord"
			}
		]
	)
});

router.put('/:id', (request, response) => {
	Posting.findByIdAndUpdate(request.params.id, request.body, {new:true}, (error, updatedModel) => {
		response.redirect('/postings');
	});
});

router.get('/:id/edit', (request, response) => {
	Posting.findById(request.params.id, (error, postingFound) =>{
		response.render('postings/edit.ejs',
			{
				posting:postingFound
			}
		)
	})
});

router.delete('/:id', (request, response) => {
	Posting.findByIdAndRemove(request.params.id, (error, data) => {
		response.redirect('/postings');
	});
});

router.get('/new', (request, response) => {
	response.render('postings/new.ejs');
});

router.get('/:id', (request, response) => {
	Posting.findById(request.params.id, (error, postingFound) => {
		response.render('postings/show.ejs',
			{
				posting:postingFound
			}
		)
	});
});

router.get('/', (request, response) => {
	response.render('postings/index.ejs');
});

router.post('/', (request, response) => {
	Posting.create(request.body, (error, postingMade) => {
		response.redirect('/index');
	});
});

module.exports = router;
//all of the requires and whatnot
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
app.use(express.urlencoded({extended:true}));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

//for partials and skeleton css
app.use(express.static('public'));

// mongoose!
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);

//posting controller, called "posting" instead of "post" to not confuse it with POST
const postingsController = require('./controllers/postings.js');
app.use('/postings', postingsController);

//there were supposed to be controllers for users and sessions but
//I could not figure out how to get them working how I wanted to 
//before the deadline so instead we get a classic style bulletin board

//home route
app.get('/', (request, response) => {
	response.render('home.ejs');
});

// error and success stuff
db.on('error', (err) => console.log(err.message + ' is Mongo not running?'));
db.on('connected', () => console.log('Mongo has been connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('Mongo has been disconnected.'));
db.on('open', () => {
    console.log('Connection made!');
});

//listener
app.listen(process.env.PORT, () => {
	console.log(`Connected to Retro PC Gaming Hub servers! (listening on port ${process.env.PORT})`);
});
//all of the requires and whatnot
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

// mongoose!
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);

//posting controller, called "posting" instead of "post" to not confuse it with POST
const postingsController = require('./controllers.postings.js');
app.use('/postings', postingsController);



// error and success stuff
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});
//will add in more routes tomorrow

//home route
app.get('/', (request, response) => {
	response.send('oh my god it works!');
});

//listener
app.listen(process.env.PORT, () => {
	console.log(`I like french fried potaters. Mhm. (listening on port ${process.env.PORT})`);
});
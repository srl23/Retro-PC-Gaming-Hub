const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true }, //one absolutely needs a username to post
	password: { type: String, required: true }, //this one is straightforward
	age: Number, //age is optional to list
	gender: String, //this too is optional
	name: String, //real name which is also optional
	email: { type: String, required: true }, //to verify the user's registration and for things like password resets
	contact: { type: String, required: true } //where the user prefers contact	
});

const User = mongoose.model('User', userSchema);

module.exports = User;
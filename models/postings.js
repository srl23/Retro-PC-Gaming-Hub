const mongoose = require('mongoose');

const postingSchema = new mongoose.Schema({ //named posting to not confuse it with POST
	poster: { type: String, required: true }, //the poster's name, required to post
	topic: { type: String, required: true }, //this is your thread topic
	title: { type: String, required: true }, //game title, required so people know what game your are interested in for your listing
	message: { type: String, required: true }, //this is to filter out potential spambots and unhelpful topics
	contact: { type: String, required: true }, //to set up games with others one must leave their contact info. it will not be displayed by a search engine or be accessible to unregisterd users
	screenshot: String //users may optionally upload screenshots of the game or their character so people can determine if their play is compatable or if the game looks interesting enough to play
});

const Posting = mongoose.model('Posting', postingSchema);

module.exports = Posting;
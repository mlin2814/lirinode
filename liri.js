var client = require('./keys.js');
client.more = {'extra' : 'more'}

client.get('search/tweets', {q: 'keys.js'}, function(error, tweets, response) {
   console.log(tweets);
});

console.log("Twitter")
console.log(client.client);

var client = process.argv[2];

var client = keys.client;

// ====================================

var spotify = require('spotify');

spotify.search({ type: 'track', query: process.argv[2]}, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
});



// // ==================================

var request = require('request');
var movie = process.argv[3];
request('http://www.omdbapi.com/?' + movie + "t=&y=&plot=short&r=json&tomatoes=", function (error, response, body) {

	if (!error && response.statusCode == 200) {

		console.log("The movie's information is: " + JSON.parse(body)["imdbInfo"])
	}
});
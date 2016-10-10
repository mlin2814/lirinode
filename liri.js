var keys = require('./keys.js');
keys.more = {'extra' : 'more'}

var Twitter = require('twitter');

var client = new Twitter(keys.twitterKeys);

var params = {
	screen_name: 'RC2814',
	count: 3,

};

var twitterInput = process.argv[2];

if (twitterInput == "my-tweets"){
	client.get('statuses/user_timeline', params, function(error, tweets, response){
   		console.log(tweets);
	});
};


// ====================================

var spotify = require('spotify');

var spotifyCommand = process.argv[2];
var spotifySong = process.argv[3];

if (spotifyCommand == "spotify-this-song"){
	spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
    	if (err) {
        	console.log('Error occurred: ' + err);
        	return;
        }
    })
};



// // // ==================================

// var request = require('request');
// var movie = process.argv[3];
// request('http://www.omdbapi.com/?' + movie + "t=&y=&plot=short&r=json&tomatoes=", function (error, response, body) {

// 	if (!error && response.statusCode == 200) {

// 		console.log("The movie's information is: " + JSON.parse(body)["imdbInfo"])
// 	}
// });
var keys = require('./keys.js');
keys.more = {'extra' : 'more'}

// var client = process.argv[2];

keys.client

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});

console.log("Twitter")
console.log(keys.twitterKeys);

// ====================================

// var spotify = require('spotify');

// spotify.get({ type: 'track', query: process.argv[2]}, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });



// // ==================================

// var request = require('request');
// var movie = process.argv[3];
// request('http://www.omdbapi.com/?' + movie + "t=&y=&plot=short&r=json&tomatoes=", function (error, response, body) {

// 	if (!error && response.statusCode == 200) {

// 		console.log("The movie's information is: " + JSON.parse(body)["imdbInfo"])
// 	}
// });
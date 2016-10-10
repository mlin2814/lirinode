var keys = require('./keys.js');
keys.more = {'extra' : 'more'}

// var Twitter = require('twitter');

// var client = new Twitter(keys.twitterKeys);

// var params = {
// 	screen_name: 'RC2814',
// 	count: 3,

// };

// var twitterInput = process.argv[2];

// if (twitterInput == "my-tweets"){
// 	client.get('statuses/user_timeline', params, function(error, tweets, response){
//    		console.log(tweets);
// 	});
// };

// // // ==================================

// var request = require('request');
// var movie = process.argv[3];
// request('http://www.omdbapi.com/?' + movie + "t=&y=&plot=short&r=json&tomatoes=", function (error, response, body) {

// 	if (!error && response.statusCode == 200) {

// 		console.log("The movie's information is: " + JSON.parse(body)["imdbInfo"])
// 	}
// });


var action = process.argv[2];
var value = process.argv[3];

switch(action){
    case 'twitter':
        twitter();
    break;

    case 'spotify-this-song':
        spotify();
    break;

    case 'ombd':
        omdb();
    break;
}

function twitter(){
    var Twitter = require('twitter');
    var client = new Twitter(keys.twitterKeys);
    var params = {
        screen_name: 'RC2814',
        count: 3,
    };
    var twitterInput = process.argv[3];

    if (twitterInput == "my-tweets"){
        client.get('statuses/user_timeline', params, function(error, tweets, response){
            console.log(tweets);
        })
    };
}

// =======================
function spotify(){
var spotify = require('spotify');
var spotifySong = process.argv[3];

spotify.search({ type: 'track', query: process.argv[3]}, function(err, data){
    if (err) {
        console.log('Error occurred: ' + err);
        return;
        }
    });
}
//========================

function omdb(){
var request = require('request');
var movie = process.argv[3];
// // Store all of the arguments in an array 
// var nodeArgs = process.argv;
// // Create an empty variable for holding the movie name
// var movieName = "";
// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i=2; i<nodeArgs.length; i++){
//     if (i>2 && i< nodeArgs.length){
//         movieName = movieName + "+" + nodeArgs[i];
//     }

//     else {
//         movieName = movieName + nodeArgs[i];
//     }
// }
// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movie +'&y=&plot=short&r=json&tomatoes=';
  
request(queryUrl, function (error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode == 200) {
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
        console.log("Release Year: " + JSON.parse(body)["Year"])
    }
});

}



var request = require('request');
var movie = process.argv[3];

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

    case 'omdb':
        omdb(value);
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
// var spotifySong = process.argv[3];

spotify.search({ type: 'track', query: process.argv[3]}, function(err, data){
    if (err) {
        console.log('Error occurred: ' + err);
        return;
        }
    else {
        // console.log(spotify.search);
            // console.log(data);
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Album Title: " + data.tracks.items[0].album.name);
            console.log("Spotify URL: " + data.tracks.items[0].preview_url);

    }
    // spotifySong = "Title" + JSON.parse(data).Name + "\n" + 
    //                 "Artist" + JSON.parse(data).artists.name + "\n" +
    //                 "Preview" + JSON.parse(data).preview_url + "\n" +
    //             "Album" + JSON.parse(data).Albums.Title.Name + "\n" + 
    // console.log(JSON.stringify(data, null, 2));
    });
}
//========================

function omdb(value){

// console.log("Does anything work...", value);
var queryUrl = 'http://www.omdbapi.com/?t=' + value +'&y=&plot=short&r=json&tomatoes=true';
  // console.log(queryUrl);
request(queryUrl, function (error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode == 200) {
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
        console.log("Title: " + JSON.parse(body)["Title"]);
        console.log("Rating: " + JSON.parse(body)["Rated"]);
        console.log("Release Year: " + JSON.parse(body)["Year"]);
        console.log("Country: " + JSON.parse(body)["Country"]);
        console.log("Language: " + JSON.parse(body)["Language"]);
        console.log("Plot: " + JSON.parse(body)["Plot"]);
        console.log("Actors: " + JSON.parse(body)["Actors"]);
        console.log("RT Rating: " + JSON.parse(body)["tomatoMeter"]);
        console.log("RT Site: " + JSON.parse(body)["tomatoURL"]);
        // console.log(JSON.parse(body));
    }else{
        console.log(error);
    }
});


}



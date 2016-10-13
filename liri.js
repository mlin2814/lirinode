var request = require('request');
var movie = process.argv[3];

var keys = require('./keys.js');
keys.more = {'extra' : 'more'}

var fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

switch(action){
    case 'my-tweets':
        twitter();
    break;

    case 'spotify-this-song':
        spotify();
    break;

    case 'movie-this':
        omdb(value);
    break;

    case 'do-what-it-says':
        doThis();
    break;
};

function twitter(){
    var Twitter = require('twitter');
    var client = new Twitter(keys.twitterKeys);
    var params = {
        screen_name: 'RC2814',
        count: 20,
    };
    var twitterInput = process.argv[2];

        client.get('statuses/user_timeline', params, function(error, tweets, response){
            for (var i = 0; i < tweets.length; i++){
                console.log("On " + tweets[i].created_at + ", " + tweets[i].user.screen_name + " said: " + tweets[i].text);         
                console.log("-----------------------------------");
            }
        })
    };

// =======================
function spotify(){
var spotify = require('spotify');

spotify.search({ type: 'track', query: process.argv[3]}, function(err, data){
    if (process.argv[3]) {
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Title: " + data.tracks.items[0].name);
        console.log("Album Title: " + data.tracks.items[0].album.name);
        console.log("Spotify URL: " + data.tracks.items[0].preview_url);
        }
    else {
        console.log("The Sign by Ace of Base");
            

    }
    
    });
}
//========================
function omdb(value){

var queryUrl = 'http://www.omdbapi.com/?t=' + value +'&y=&plot=short&r=json&tomatoes=true';

request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode == 200 && process.argv[3] != null) {
        console.log("Title: " + JSON.parse(body)["Title"]);
        console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
        console.log("Release Year: " + JSON.parse(body)["Year"]);
        console.log("Country: " + JSON.parse(body)["Country"]);
        console.log("Language: " + JSON.parse(body)["Language"]);
        console.log("Plot: " + JSON.parse(body)["Plot"]);
        console.log("Actors: " + JSON.parse(body)["Actors"]);
        console.log("RT Rating: " + JSON.parse(body)["tomatoMeter"]);
        console.log("RT Site: " + JSON.parse(body)["tomatoURL"]);
    } 
    else {
        console.log("Title: Mr. Nobody");
        console.log("IMDB Rating: 7.9");
        console.log("Release Year: 2009");
        console.log("Country: Belgium, Germany, Canada, France");
        console.log("Language: English, Mohawk");
        console.log("Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.");
        console.log("Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham");
        console.log("RT Rating: 64");
        console.log("RT Site: http://www.rottentomatoes.com/m/mr-nobody");
    }
});

}
// =======================================
function doThis() {
     fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);
        dataArray = data.split(',');
        songTitle = dataArray[1];
        spotify(songTitle);
     });
};



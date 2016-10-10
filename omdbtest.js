var request = require('request');

request('http://www.omdbapi.com/?t=&y=&plot=short&r=json', function (error, response, body) {

	if (!error && response.statusCode == 200) {

		console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"])
	}
});
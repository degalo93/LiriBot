require("dotenv").config();
//concert-this 
//spotyfy this song
//movie this
//do what it says


//spotify id 09ce1018a52d458bba7ab98144ae2596 and sec 13f64a9857394596b56a3c7588420a02

//spotify 
var Spotify = require('spotify');

var keys = require("./keys.js");
var moment = require('moment');
var fs = require("fs");

var userChoice = process.argv[2];
var userSearch = process.argv[3];

function userOptions(userChoice, userSearch) {
    switch (userChoice) {
        case "spotify-this-song":
            spotifyThisSong();

        case "concert-this":
            concertThis();
        case "movie-this":
            movieThis();
        case "do-this":
            doThis();


    }
}

function spotyfyThisSong() {};


var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});
require("dotenv").config();
//concert-this 
//spotyfy this song
//movie this
//do what it says

var axios = require('axios');
var keys = require("./keys.js");
var moment = require('moment');
var fs = require("fs");
//spotify id 09ce1018a52d458bba7ab98144ae2596 and sec 13f64a9857394596b56a3c7588420a02

//spotify 
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//({
//id: '09ce1018a52d458bba7ab98144ae2596',
//  secret: '13f64a9857394596b56a3c7588420a02'
//})



var userChoice = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

switch (userChoice) {
    case "spotify-this-song":
        spotifyThisSong(userSearch);
        break;
    case "concert-this":
        concertThis(userSearch);
        break;
    case "movie-this":
        movieThis(userSearch);
        break;
    case "do-this":
        doThis(userSearch);
        break
    default:
        console.log("Type in spotify-this-song to search for music, \n Or concert-this to look for nearby concerts, \n Or movie-this to search for movies \n Or do-this to see an example");

}




function concertThis() {
    var bandURL = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp";

    axios.get(bandURL).then(
        function(response) {
            var bandData = response.data;
            console.log("\nArtist: " + userSearch + "\nVenue: " + bandData[0].venue.name + "\nLocation: " + bandData[0].venue.country + "\nDate: " + bandData[0].datatime);
        });
}

function movieThis() {

    var URL = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(
        function(response) {
            var movieData = response.data;

            console.log("\n_Movie Info_" + "\nName: " + movieData.Title + "\nRelease Year: " + movieData.Year + "\nRating: " + movieData.Rated + "\nRelease Country: " + movieData.Country + "\nLanguage: " + movieData.Language + "\nPlot: " + movieData.Plot + "\nActors: " + movieData.Actors + "\n");


        }
    );
}

function spotifyThisSong() {


    spotify.search({ type: 'track', query: userSearch }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n_Track Info_" + "\nArtist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + "\nLink: " + data.tracks.items[0].external_urls.spotify + "\nAlbum: " + data.tracks.items[0].album.name)

    });
};

function doThis() {
    fs.readFile('random.txt', "utf8", function(error, data) {
        var data = data.split(",");

        if (error) {
            return console.log(error);
        }
        spotifyThisSong();

    });

};
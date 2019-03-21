require("dotenv").config();
//concert-this 
//spotyfy this song
//movie this
//do what it says


//spotify id 09ce1018a52d458bba7ab98144ae2596 and sec 13f64a9857394596b56a3c7588420a02

//spotify 
var Spotify = require('spotify');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');
var keys = require("./keys.js");
var moment = require('moment');
var fs = require("fs");

var userChoice = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function userOptions(userChoice, userSearch) {
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
            console.log("Type in spotify-this-song to search for music, conert-this to look for nearby concerts, or movie-this to search for movies");

    }
}
userOptions(userChoice, userSearch);

function spotifyThisSong() {

    console.log("searching for your song");

    spotify.search({ type: 'track', query: userSearch }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n_Track Info_" + "\nArtist: " + data.tracks.items[0].artists[0].name + "\nSong: " + data.tracks.items[0].name + "\nLink: " + data.tracks.items[0].external_urls.spotify + "\nAlbum: " + data.tracks.items[0].album.name + "\n" + "\nGreat song! Search another :)")

    });
};

function concertThis(artist) {
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandURL).then(
            function(response) {

            }

            function movieThis(movieName) {
                if (!movieName) {
                    movieName = "Mr. Nobody";
                }
                var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

                axios.get(URL).then(
                    function(response) {
                        var movieData = response.data;

                        console.log("\n_Movie Info_" + "\nName: " + movieData.Title + "\nRelease Year: " + movieData.Year + "\nRating: " + movieData.Rated + "\nRelease Country: " + movieData.Country + "\nLanguage: " + movieData.Language + "\nPlot: " + movieData.Plot + "\nActors: " + movieData.Actors + "\n");


                    }
                );
            }
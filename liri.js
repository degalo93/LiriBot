require("dotenv").config();
//concert-this 
//spotyfy this song
//movie this
//do what it says

//spotify id 09ce1018a52d458bba7ab98144ae2596 and sec 13f64a9857394596b56a3c7588420a02
var Spotify = require('spotify');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
// var omdb = new Omdb(keys.omdb);

var searchEndPoint = process.argv[2];
var search = process.argv[3]


switch (searchEndPoint) {
    case "spotify-this-song":
        {
            searchSpotify();
        }
        break;

    case "concert-this":
        {
            searchBands()
        }
        break;

    case "movie-this":
        {
            searchOMDB()
        }
        break;

    case "do-what-it-says":
        {
            sayWhat();
        }
        break;

    default:
        {
            console.log("no action found")
        }
}

function searchSpotify() {
    console.log(search);
}

function searchBands() {
    console.log(search);
}

function searchOMDB() {
    console.log(search);
}

function sayWhat() {
    console.log("say what?")
}
require("dotenv").config();
var axios = require("Axios");
var moment = require("moment");
var keys = require("./keys.js");

var omdb = keys.omdb.key;
var bitKey = keys.bit.key;
var Spotify = require('node-spotify-api');


var spotify = new Spotify(keys.spotify);

var searchEndPoint = process.argv[2];
var search = process.argv[3];


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

    spotify.search({
        type: 'track',
        query: search
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var results = data.tracks.items[0];
        console.log(results.name)
        console.log(results.href)
        console.log(results.album.name)
    });
}

function searchBands() {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=" + bitKey)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });



}

function searchOMDB() {
    axios.get('http://www.omdbapi.com/?apikey=' + omdb + '&t=' + search)
        .then(function (response) {
            if (search = "") {
                search = "Mr. Nobody"
            }
            resp = response.data
            console.log(resp.Title);
            console.log(resp.Year);
            console.log(resp.Ratings[1].Value);
            console.log(resp.Country);
            console.log(resp.Language);
            console.log(resp.Plot);
            console.log(resp.Actors);


        })
        .catch(function (error) {
            console.log(error);
        });
}

function sayWhat() {

    console.log("say what?")
}
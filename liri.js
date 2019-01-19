//setup my node server require modules and set global varables

require("dotenv").config();
var axios = require("Axios");
var moment = require("moment");
var keys = require("./keys.js");
var fs = require("fs");

//grab the keys in the .env file
var omdb = keys.omdb.key;
var bitKey = keys.bit.key;
var Spotify = require('node-spotify-api');

// spotify uses OAuth so we need to create a new spotify varable using the secrets from the .env
// this will pass the secrets to spotify api and return an api key we can use to search spotify
// after we get a valid api key it switches to the search url.
var spotify = new Spotify(keys.spotify);

// capture the arguments from comandline line and store it in a var
function firstRun() {
    var searchEndPoint = process.argv[2];
    var search = process.argv[3];
    searchDatabase(searchEndPoint, search)
}



// create our switch function taking the comandline argv or the random.text argv

function searchDatabase(searchEndPoint, search) {

    switch (searchEndPoint) {
        case "spotify-this-song":
            {
                searchSpotify(search);
            }
            break;

        case "concert-this":
            {
                searchBands(search)
            }
            break;

        case "movie-this":
            {
                searchOMDB(search)
            }
            break;

        case "do-what-it-says":
            {
                sayWhat(search);
            }
            break;

        default:
            {
                console.log("no action found")
            }
    }
}

// create our functions for each switch item.

//sptoify search function
function searchSpotify(search) {

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
//bands in town search function
function searchBands(search) {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=" + bitKey)
        .then(function (response) {
            resp = response.data
            for (i = 0; i < resp.length; i++) {
                console.log("Venue: " + resp[i].venue.name);
                console.log("Location: " + resp[i].venue.city);
                var convertedDate = moment(resp[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY")
                console.log("Date: " + convertedDate);
                console.log("______________________");
            }
        })
        .catch(function (error) {
            console.log(error);
        });



}
//omdb search function
function searchOMDB(search) {
    axios.get('http://www.omdbapi.com/?apikey=' + omdb + '&t=' + search)
        .then(function (response) {
            if (search = "") {
                search = "Mr. Nobody"
            }
            resp = response.data
            console.log("Title: " + resp.Title);
            console.log("Release Year: " + resp.Year);
            console.log("IMDB Rating: " + resp.Ratings[0].Value);
            console.log("Rotten Tomates Rating: " + resp.Ratings[1].Value);
            console.log("Filmed in Country: " + resp.Country);
            console.log("Film Language: " + resp.Language);
            console.log("Plot: " + resp.Plot);
            console.log("Actors: " + resp.Actors);


        })
        .catch(function (error) {
            console.log(error);
        });
}
//FS read file random.txt function
function sayWhat() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        var searchEndPoint = dataArr[0];
        var search = dataArr[1];
        searchDatabase(searchEndPoint, search)
    })

}
// run program
firstRun()
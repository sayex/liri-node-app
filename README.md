# liri-node-app

## Project Goals

* Create a node applicatiopn that takes in arguments and does something with them.
* Use the following API's
    1. Spotify API (spotify-this-song)
    2. OMDB API (movie-this)
    3. Bands In Town API (concert-this)
* Search the listed API's and return the data to the console.

* Be as dry as possable with your code.

* Be as clean as possable with your code.

### Command Line Usage

    node liri.js
        spotify-this-song "Song Name"
![](/gifs/spotifythis.gif)

        concert-this "Band Name"
![](/gifs/concertthis.gif)

        movie-this "Movie Name"
![](/gifs/moviethis.gif)

        do-what-it-says (no search required as it will run the random.txt file)
![](/gifs/dowhatitsays.gif)

#### Setup your .env file like this

SPOTIFY_ID=SPOTIFY-Id-Goes-Here

SPOTIFY_SECRET=SPOTIFY-Secret-Goes-Here

OMDB_Key=OMDB-Key

BIT_Key=BIT-Key
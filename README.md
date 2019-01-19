# liri-node-app

## Project Goals

    * Create a node applicatiopn that takes in arguments and does something with them.
    * Use the following API's
        1. Spotify API
        2. OMDB API
        3. Bands In Town API
    * Search the listed API's and return the data to the console.

### Command Line

    node liri.js
        spotify-this-song "Song Name"
        concert-this "Band Name"
        movie-this "Movie Name"
        do-what-it-says (no search required as it will run the random.txt file)

#### Setup your .env file like this

SPOTIFY_ID=SPOTIFY-Id-Goes-Here
SPOTIFY_SECRET=SPOTIFY-Secret-Goes-Here

OMDB_Key=OMDB-Key

BIT_Key=BIT-Key
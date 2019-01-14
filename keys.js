console.log('this is loaded');

exports.spotify = {
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
}

exports.omdb = {
        key: process.env.OMDB_Key
}

exports.bit = {
        key: process.env.BIT_Key
}
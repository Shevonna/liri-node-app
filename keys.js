console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var Spotify = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findSong takes in the name of a tv song and searches the tvmaze API
  this.findSong = function(song) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
        console.log(jsonData);
      // songData ends up being the string containing the song data we will print to the console
//       Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
      var songData = [
        "song: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
      ].join("\n\n");

      // Append songData and the divider to log.txt, print songData to the console
      fs.appendFile("log.txt", songData + divider, function(err) {
        if (err) throw err;
        console.log(songData);
      });
    });
  };
}
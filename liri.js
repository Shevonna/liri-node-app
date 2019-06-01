require("dotenv").config();
// var Spotify = require("./keys")
var spotify = new Spotify();

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "concert-this";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Usher";
}

// Print whether searching for a show or actor, print the term as well
if (search === "concert-this") {
  console.log("Searching for Artist");
  spotify.findSong(term);
}
else if (search === "spotify-this-song") {
    console.log("Searching for TV Show");
    spotify.findSong(term);
  }
else if (search === "movie-this") {
  console.log("Searching for TV Show");
  spotify.findSong(term);
}
else {
  console.log("Searching for TV Actor");
  spotify.findActor(term);
}
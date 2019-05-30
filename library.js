var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var libraryPlaylist = library.playlists;

  for (listItem in libraryPlaylist) {
    let nameTrack = libraryPlaylist[listItem];
    let result = nameTrack.id + ": " + nameTrack.name + " - "
     + nameTrack.tracks.length + " tracks";
    console.log(result);
  }

}

printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (array) {
  var libraryTracks = library.tracks;

    /* If statement to evaluate whether a string has been passed from the
       printPlaylist() function */
    if (arguments.length === 1 && Array.isArray(arguments[0]) === true) {
      array.forEach(function(element) {
          let trackObject = libraryTracks[element];
          let result = trackObject.id + ": " + trackObject.name + " by " +
            trackObject.artist + " (" + trackObject.album + ")";
          console.log(result);
      });
    } else {
      for (let trackItem in libraryTracks) {
        let trackObject = libraryTracks[trackItem];
        let result = trackObject.id + ": " + trackObject.name + " by " +
          trackObject.artist + " (" + trackObject.album + ")";
         console.log(result);
      }
    }
  }

// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var libraryPlaylist = library.playlists;
  let playlistObject = libraryPlaylist[playlistId];
  console.log(playlistObject.id + ": " + playlistObject.name + " - "
    + playlistObject.tracks.length + " tracks");


  printTracks(playlistObject.tracks);

}

printPlaylist("p01");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  let libraryTracks = library.tracks;
  let libraryPlaylists = library.playlists;

if ((libraryTracks).hasOwnProperty(trackId)) {
  libraryPlaylists[playlistId].tracks.push(trackId);
  console.log(libraryPlaylists[playlistId]);
  } else if (!(libraryTracks.hasOwnProperty(trackId))) {
  console.log("Track ID does not exist");
  }

}

addTrackToPlaylist("t03", "p01")
addTrackToPlaylist("t04", "p01")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  let libraryTrackList = library.tracks;
  let currentTotalTracks = Object.keys(libraryTrackList).length;
  let newTotalTracks = currentTotalTracks + 1;
  let newId = "";

  if (newTotalTracks < 10) {
    newId = "t0" + newTotalTracks.toString(10);
  } else {
    newId = "t" + currentTotalTracks.toString(10);
  }
  console.log(newId);
  libraryTrackList[newId] = {id: newId, name: name, artist: artist, album: album};
};

addTrack('test', 'test_artist', 'test album');
addTrack('Posh', 'Beautiful', 'Pair Programming!');
console.log(library.tracks);


// adds a playlist to the library

var addPlaylist = function (name) {
  let libraryPlaylist = library.playlists;
  let newId = uid();
  libraryPlaylist[newId] = {id: newId, name: name, tracks: []};
 };

addPlaylist('running');
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
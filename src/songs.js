//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
  const result = array.map((item) => item.artist);
  //   console.log("Exercise 1 ->", result);
  return result;
}

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
  const result = array.filter((item) => artist === item.artist);
  return result;
}

//Exercise 3: Alphabetic order by title
function orderAlphabetically(songsArray) {
  const result = songsArray
    .map((item) => item.title)
    .sort()
    .slice(0, 10);
  return result;
}

//Exercise 4: Order by year, ascending. Order songs with the same year by their title, alphabetically
function orderByYear(array) {
  // //SOLUCION 1
  // const result = array
  //   .map((object) => ({ title: object.title, year: object.year }))
  //   .sort((a, b) => a.title - b.title)
  //   .sort((a, b) => a.year - b.year);

  // return result;

  // SOLUCION 2
  // [...array] pone cada objeto como un elemento aparte y cuando hace el bucle lo pone como un objeto separado.
  const result = [...array].sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return result;
}

//Exercise 5: Filter songs by genre (should return a new array with the songs with the genre asked)
function songsByGenre(songsArray, genre) {
  // const findGenre = songsArray.filter(
  //   (item) => genre === item.genre.filter((item) => item.genre)
  // );

  const result = [...songsArray].filter(
    (item) => genre === item.genre.filter((item) => item.genre)
  );
  console.log(result);
  return result;
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songsArray) {
  // const cloneSongsArray = songsArray.parseInt(songsArray.duration);
  /* 1st -> Deep cloning original array so that "duration" sub values are disconnected from original array. First, I
    stringify [] and parse it right after.This method allows deep cloning w/out knowing its structure */
  const cloneSongsArray = JSON.parse(JSON.stringify(songsArray));
  return cloneSongsArray.map((song) => {
    // Regex exp to remove letters from value
    song.duration = song.duration.replace(/\D+/gi, "");
    // \d is a digit (a character in the range [0-9]), and + means one or more times. Thus, \d+ means match one or more digits.
    song.duration =
      // string.charAt to target the min value & slice(1) to select the seconds value
      song.duration.charAt(0) * 60 + Number(song.duration.slice(1));

    return song;
  });
}

//Exercise 7: Get the longest song
function getLongestSong(songsArray) {
  const cloneSongsArray = JSON.parse(JSON.stringify(songsArray));
  return cloneSongsArray.map((song) => {
    song.duration = song.duration.replace(/\D+/gi, "");
    song.duration =
      song.duration.charAt(0) * 60 + Number(song.duration.slice(1));

    return song;
  });
}

//Exercise 8: Get the shortest song
// function getShortestSong() {
// }

if (typeof module !== "undefined") {
  module.exports = {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong,
  };
}

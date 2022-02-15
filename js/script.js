// Complete Day 1 goals here
let songs = [1, 2];
let artists = [1, 2];
let images = [1, 2];
let links = [1, 2];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songs.forEach(function (name) {
    $(".songs").append(`<p>${name}</p>`);
  });
  
  artists.forEach(function (name) {
    $(".artists").append(`<p>${name}</p>`);
  });
  
  images.forEach(function (name) {
    $(".images").append(`<p>${name}</p>`);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();

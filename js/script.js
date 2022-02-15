// Complete Day 1 goals here
let songs = ["Karma", "21", "Time Passing Through"];
let artists = ["AJR", "Gracie Abrams", "Kaden MacKay"];
let images = [
  "https://cdn.glitch.global/76ace845-1a13-4b4a-bc59-cf97f163dd46/ajr.png?v=1644908895663",
  "https://cdn.glitch.global/76ace845-1a13-4b4a-bc59-cf97f163dd46/gracieabrams.png?v=1644908719849", 
  "https://cdn.glitch.global/76ace845-1a13-4b4a-bc59-cf97f163dd46/kadenmackay.png?v=1644908623317",
];
let links = ["https://www.youtube.com/watch?v=Vy1JwiXHwI4"];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songs.forEach(function (name) {
    $(".songs").append(`<p>${name}</p>`);
  });

  artists.forEach(function (name) {
    $(".artists").append(`<p>${name}</p>`);
  });

  images.forEach(function (image) {
    $(".images").append("<img src='" + image + "'>");
  });

  links.forEach(function (link) {
    $(".links").append("<a href='" + link + "'>" + "Listen" + "</a>"); 
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

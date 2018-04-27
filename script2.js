
let clear= document.querySelector('.cBtn')
//creating the fech call
fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  var result_track = data;
  console.log('data is comimng back',data);
// selecting the html track_list tag in the html
  var track_list = document.querySelector(".trackList");
// creating the loop to loop through the html page
  for(var i = 0; i < result_track.results.length; i++) {

//creating the title div for the title
var title = document.createElement('div');
title.setAttribute('src',`${result_track.results[i].title}`);

// creating the image tag for the images
var cover = document.createElement('img');
cover.setAttribute('src',`${result_track.results[i].cover_art}`);
// setting the title off the api
cover.setAttribute('title',`${result_track.results[i].title}`);
// setting the artist name off the api
cover.setAttribute('artist',`${result_track.results[i].artist}`);
// selecting the input tage to output the results
var input = document.querySelector(".input");

// adding the title to the class
title.classList.add('title');
// storing the title in a varabile
let individual_name = result_track.results[i].title;

//click event for the images to be selected from and displaying //the artist and the name of the song
    cover.addEventListener("click", function(e) {
      //creating the p tag to display the artist and song
     let p = document.createElement('p');
     p.innerHTML= `${event.target.attributes.artist.value
   }: ${event.target.attributes.title.value}`
   // appenging the input div to output the info
     input.appendChild(p);

     // p.innerHTML ="";
})
  clear.addEventListener("click", function(e) {
input.innerHTML="";
})
      //adding the the classes togeather from the js file to //the html file
     track_list.appendChild(cover);
     track_list.appendChild(title);
  }

})

var clear_tracks = document.querySelector(".clear_tracks");
var playlist = document.querySelector(".song_playlist");
var submit = document.querySelector(".submit");

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var albumResults = myJson.results;
    console.log(albumResults)
    for (var i = 0; i < albumResults.length; i++) {
      var albumCrate = document.querySelector(".album_crate");
      var cover_img = document.createElement("img");
      cover_img.setAttribute("src", "images/"+ albumResults[i].cover_art);
      cover_img.setAttribute("id", albumResults[i].id);
      cover_img.setAttribute("artist", albumResults[i].artist);
      cover_img.setAttribute("title", albumResults[i].title);
      cover_img.setAttribute("height", "75px");
      cover_img.setAttribute("width", "75px");
      albumCrate.appendChild(cover_img);

      console.log(albumCrate);
      console.log(albumResults[i].cover_art);

      cover_img.addEventListener("click", function(){
        var artist = event.target.attributes.artist.value;
        var album_name = event.target.attributes.title.value;
        var p = document.createElement("p");
        p.innerHTML = artist+": " +album_name;
        playlist.appendChild(p);

      })
      clear_tracks.addEventListener("click", function(){
        playlist.innerHTML = "";
      })
      submit.addEventListener("click", function(){
      fetch('https://lit-fortress-6467.herokuapp.com/post', {
          method: "POST",
          body: JSON.stringify("playlist")
        }) .then(res => res.json())
           .then(err => console.error())
           .then((repsonse) =>  console.log(response))
      })
    }
  })

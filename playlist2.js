const detailsTracker=[];
const pickTracker=[];
fetch('https://api-album-ltnm7z46skpx.runkit.sh/albums')
  .then(function(response) {
    return response.json();
  })
  .then(function(stuff) {
    const albums_results = stuff.results;
    for (let i = 0; i < albums_results.length; i++) {
    const album=albums_results[i];
    const albumElement =document.createElement("img")
    albumElement.setAttribute("src", album.cover_art.startsWith("http:") ? album.cover_art : `./images/${album.cover_art}`)
    albumElement.setAttribute("style", " display:inline-block;  height:130px; width:100px; margin-left:85px; margin-top:10px;")
    var imagebox=document.getElementsByClassName("display");
    imagebox[0].appendChild(albumElement)
    albumElement.addEventListener("click", function(){
      var detailsbox=document.getElementsByClassName("track1")
          detailsbox[0].innerHTML=""
                const titleElement=document.createElement("span");
                const artistElement=document.createElement("span")
                const trackElement=document.createElement("img")
                titleElement.innerHTML=album.title + "<br>"
                artistElement.innerHTML= "<pre>" + " Add tracks from :"+ "</pre>" + album.artist + " : ";
                trackElement.setAttribute("src", album.cover_art.startsWith("http:") ? album.cover_art : `./images/${album.cover_art}`)
                trackElement.setAttribute("style", " display:inline-block;  height:100px; width:120px; margin-left:85px; margin-top:10px")
                artistElement.setAttribute("style", "font-size:20px;")
                titleElement.setAttribute("style", "font-size:20px;")
                detailsbox[0].appendChild(artistElement)
                detailsbox[0].appendChild(titleElement)
                detailsbox[0].appendChild(trackElement)
              })
            }
          });
document.querySelector('input.button1').addEventListener("click", function(){
      document.getElementsByClassName("track1")[0].innerHTML="";
      detailsTracker.length=0;
    });
document.querySelector('input.button2').addEventListener("click", function(){
          fetch('https://api-album-ltnm7z46skpx.runkit.sh/tracks', {
              method: 'POST',
              body: JSON.detailsTracker
            })
            .then(function (response) {
               return response.text();
            })
            .then(function(stuff) {
            console.log(stuff)
          });
        })

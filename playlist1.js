
const detailsTracker=[];
fetch(' https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(stuff) {
    const albums_results = stuff.results;
    for (let i = 0; i < albums_results.length; i++) {
    const album=albums_results[i];
    const albumElement =document.createElement("img")
    albumElement.setAttribute("src", `./images/${album.cover_art}`)
    albumElement.setAttribute("style", " display:inline-block;  height:130px; width:180px; margin-left:85px;")
    albumElement.addEventListener("click", function(){
    if(detailsTracker.indexOf(album)<0){
        detailsTracker.push(album)
      }
      var detailsbox=document.getElementsByClassName("details")
      detailsbox[0].innerHTML=""
      for(let i=0; i<detailsTracker.length;i++){
      const titleElement=document.createElement("span");
      const artistElement=document.createElement("span")
      titleElement.innerHTML=detailsTracker[i].title +"<br>";
      artistElement.innerHTML=detailsTracker[i].artist + " : ";
      detailsbox[0].appendChild(artistElement)
      detailsbox[0].appendChild(titleElement)
    }
  })
var imagebox=document.getElementsByClassName("display");
imagebox[0].appendChild(albumElement)
    }
});
    document.querySelector('input.button1').addEventListener("click", function(){
    document.getElementsByClassName("details")[0].innerHTML="";
    detailsTracker.length=0;
})
    document.querySelector('input.button2').addEventListener("click", function(){
          fetch('https://lit-fortress-6467.herokuapp.com/post', {
              method: 'POST',
              body: JSON.detailsTracker
            })
            .then(function (response) {
               return response.text();
            })
            .then(function(stuff) {
            console.log(stuff)
              })
          })

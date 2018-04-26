fetch(' https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(stuff) {
    var randomArr = []
      while(randomArr.length < 3){
          var randomnumber = Math.floor(Math.random()*stuff.results.length);
          if(randomArr.indexOf(randomnumber) > -1) continue;
          randomArr[randomArr.length] = randomnumber;
        }
    const albums_results = stuff.results.filter(function(currValue, index){
        if(randomArr.indexOf(index)>-1){
          return true;
         }
      });
    for (let i = 0; i < albums_results.length; i++) {
    const album=albums_results[i];
    const albumElement =document.createElement("img")
    albumElement.setAttribute("src", `./images/${album.cover_art}`)
    albumElement.setAttribute("style", " display:block;  margin: 0 auto;  width:170px; ,margin-left:160px; padding-top:30px;")
    var imagebox=document.getElementsByClassName("image")
    imagebox[0].appendChild(albumElement)
       }
  });

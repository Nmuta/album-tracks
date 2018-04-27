var button = document.querySelector("#button");
  var arr=[];
fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var albumResults = myJson.results;
    console.log(albumResults)
    console.log(albumResults.length)

    // generate random number w/o dupe for pulling albums
    while(arr.length < 4){
    let random = Math.floor(Math.random() * albumResults.length);
    if (!arr.includes(random)) {
      arr.push(random);
      console.log(arr)
      }
    }
    // run for loop to pull data
    for (var i = 0; i < 3; i++) {
      var albumCover = document.querySelector(".album_cover")
      var img = document.createElement("img")
      console.log("this is", albumResults);
      img.setAttribute("src", "images/"+ albumResults[arr[i]].cover_art)
      img.setAttribute("height", "215px")
      img.setAttribute("width", "215px")
      albumCover.appendChild(img)

      // console.log(albumCover)
      // console.log(albumResults[i].cover_art)
    }
    // set onclick for choose tracks button
    document.getElementById("button").onclick = function () {
        location.href = "page2.html";
    }

})

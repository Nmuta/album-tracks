$(document).on('click', '#button', function() {
  window.location.href='playlist.html';
});


fetch('http://plastic-pump.surge.sh/albums.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {

    //picks 3 random numbers without repeating and displays inside of div

    var numCovers = data.results.length
    var coversArr = [];

      while(coversArr.length < 3) {
        let randomNum = Math.floor(Math.random()*(numCovers))
        if (!coversArr.includes(randomNum)) {
        coversArr.push(randomNum);
        }
      }

      for (let i = 0; i <=2; i++) {
          $(".albumList").append(`
            <div class="albumCover">
               <img src="images/${data.results[coversArr[i]].cover_art}">
            </div>
            `)
          }
    });

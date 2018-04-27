let albumArr = [];
let apiArr = [];

fetch('http://plastic-pump.surge.sh/albums.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    apiArr = data.results;
    for (let i = 0; i < apiArr.length; i++) {
      $('.albumSlider').append(`
        <div class="albumCover" index="${i}" id="${apiArr[i].id}">
           <img src="images/${apiArr[i].cover_art}">
        </div>
        `)
    }
    });

$(document).on('click', '.albumCover', function(){
  $('.selectedAlbum').html('');
  $('.albumTracks').html('');
  $('.selectedAlbum').append(`
    <div class="currSelectedAlbum">
      <p>Add tracks from:</p>
      <p><strong>${apiArr[$(this).attr('index')].artist}: ${apiArr[$(this).attr('index')].title}<strong></p>
      <img src="images/${apiArr[$(this).attr('index')].cover_art}">
    `)
  for (let i = 0; i < apiArr[$(this).attr('index')].track_list.length; i++) {
    $('.albumTracks').append(`
      <p class="track" index="${$(this).attr('index')}">${i+1}: ${apiArr[$(this).attr('index')].track_list[i]}</p>
      `)
  }
});

$(document).on('click', '.track', function(){
  $('.trackSelection').append(`
    <p class="tracks"><span class="glyphicon glyphicon-trash"></span> ${$(this).text()}</p>
    `);
    albumArr.push($(this).text())
});

$(document).on('click', '#clear', function(){
  $('.trackSelection').html('');
  albumArr = [];
});

$(document).on('click', '.glyphicon-trash', function(){
  $(this).parent().remove();
});

$(document).on('click', '#post', function(){
  $.post('https://lit-fortress-6467.herokuapp.com/post',
    {
      albumID: albumArr
    },
    function(f, status) {
    console.log('post status: ' + status )
  });
});

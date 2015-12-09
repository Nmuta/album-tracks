$(document).ready(function(){

  var randomalbum = $.ajax({
     url: "https://lit-fortress-6467.herokuapp.com/object",
     method: "GET",
     dataType: "JSON"
  })



  var x = ( Math.floor(Math.random() * 4) + 0)
  var y = ( Math.floor(Math.random() * 3) + 0)
  var z = ( Math.floor(Math.random() * 5) + 0)

  randomalbum.done(function(response){
     var getalbums = response["results"]
     var arr = []
     var artists = [];
     for (var i = 0; i < getalbums.length; i++) {
         arr.push(getalbums[i]["cover_art"])
         var id = getalbums[i]["id"]
         var art = getalbums[i]["artist"];
         artists.push(art);

         var title = getalbums[i]["title"]
         $("#albumsplaylist").append("<img id='"+id+"'class='playlistpics'src='images/"+arr[i]+"'/>")
         $("#"+id).on("click", function () {
            console.log(artists);
         });

     }
        $("#uno").append("<img id='alb'src='images/"+arr[x]+"'/>")
        $("#uno").append("<img  id='alb'src='images/"+arr[y]+"'/>")
        $("#uno").append("<img  id='alb'src='images/"+arr[z]+"'/>")





  })
})

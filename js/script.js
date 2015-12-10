$(document).ready(function(){

  var randomalbum = $.ajax({
     url: "https://lit-fortress-6467.herokuapp.com/object",
     method: "GET",
     dataType: "JSON"
  })

//OBJECT ITERATION vvvv
  randomalbum.done(function(response){
         var getalbums = response["results"]
         var arr = []
         for (var i = 0; i < getalbums.length; i++) {
         arr.push(getalbums[i]["cover_art"])
         var art = getalbums[i]["artist"];
         var title = getalbums[i]["title"]
         $("#albumsplaylist").append("<img id='"+i+"' value='"+art+"'class='playlistpics'src='images/"+arr[i]+"'/>")
         $("#"+i).click( function () {
            $("#box").append(getalbums[event.target.id]["artist"]+": "+getalbums[event.target.id]["title"]+"<br>")
         });
       }


//BUTTONSvvvv

      $("#clear").click(function(){
        $("#box").html("")
      })

      $("#sub").click(function(){
        var post = $.ajax({
          url:"https://lit-fortress-6467.herokuapp.com/post",
          method: "POST"
        })
        post.done(function(response){
          $("#box").html("POST request successful! woop woop. shimmy shimmy. bang bang.")
        })
      })


//SHUFFLEvvvv

       $(document).ready(function(){
        var x = ( Math.floor(Math.random() * 3) + 0)
        var y = ( Math.floor(Math.random() * 4) + 0)
        var z = ( Math.floor(Math.random() * 5) + 0)
        $("#uno").append("<img id='alb'src='images/"+arr[x]+"'/>")
        $("#uno").append("<img  id='alb'src='images/"+arr[y]+"'/>")
        $("#uno").append("<img  id='alb'src='images/"+arr[z]+"'/>")
      })
  })
})

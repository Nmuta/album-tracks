$(document).ready(function(){
  var call = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "Json"
})

call.done(function(response){
  var j = response["results"]

for(var i = 0; i < j.length; i++) {
  $("#pictures").append("<img class='pic' id='"+j[i]["artist"]+"'"+" src='../images/"+j[i]["cover_art"]+"'>")

}

$(document).on("click", ".pic", function(){
var h = response["results"]
for (var i = 0; i < h.length; i++) {
  if(h[i]["artist"] == this.id){
    $('#box').append("<p class='pPad'>"+ h[i]["artist"]+": "+h[i]["title"]+"</p>")
  }
}
});
});

var call = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/post",
    method: "POST",
})

call.done(function(response){
  console.log(response)
})

$("#clear").click(function(){
  $(".pPad").html(" ")
});

});

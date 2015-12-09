var call = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "Json"
})

call.done(function(response){
  var j = response["results"]

for(var i = 0; i < j.length; i++) {
  $("#pictures").append("<img class='pic' src='../images/"+j[i]["cover_art"]+"'>")
}
});

var call = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "Json"
})

call.done(function(response){
  var j = response["results"]

for(var i = 0; i < 3; i++) {

  var rando = Math.random() * 10
  var random = rando.toFixed(2)

  if(random < 2) {
    $("#pictures").append("<img class='pics' src='images/"+j[0]["cover_art"]+"'>")
    console.log(j[0]["cover_art"]);
  }
  else if(random < 4) {
    $("#pictures").append("<img class='pics' src='images/"+j[1]["cover_art"]+"'>")
    console.log(j[1]["cover_art"]);
  }
  else if(random < 6) {
    $("#pictures").append("<img class='pics' src='images/"+j[2]["cover_art"]+"'>")
    console.log(j[2]["cover_art"]);
  }
  else if(random < 8) {
    $("#pictures").append("<img class='pics' src='images/"+j[3]["cover_art"]+"'>")
    console.log(j[3]["cover_art"]);
  }
  else{
    $("#pictures").append("<img class='pics' src='images/"+j[4]["cover_art"]+"'>")
    console.log(j[4]["cover_art"]);
  }

}


  // $("#pictures").append("<img class='pics' src='images/"+j+"'>")

})

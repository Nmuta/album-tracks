
// select the element on the html to put the images in
  var splashPage1 = document.querySelector('.splashPage');

//created a array of images i want to cycle through
  var description =
    ['21.jpg',
    'ghost_in_the_machine.jpg',
    'red.jpg',
    'the_division_bell.jpg',
    'thriller.jpg']
// want to get the length of the array
  var size = description.length
// getting the image tag to incert the the images and cycle through each image
  document.getElementById('image').setAttribute("src", description[Math.round(Math.random()*4)])
  document.getElementById('image1').setAttribute("src", description[Math.round(Math.random()*4)])
  document.getElementById('image2').setAttribute("src", description[Math.round(Math.random()*4)])

function mostrarMensaje() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

$(".flash").click(function () {
  $(".head").toggleClass("laser");
});

// When color button is clicked...
$(".color").click(function () {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  //Display the three values in an alert window
  alert(red + "," + green + "," + blue);
});

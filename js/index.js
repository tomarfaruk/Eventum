
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2020 10:37:15").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = "00" + Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = "0" + Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days.substr(-3);
  document.getElementById("hour").innerHTML = hours.substr(-2);
  document.getElementById("minute").innerHTML = minutes.substr(-2);
  document.getElementById("second").innerHTML = seconds.substr(-2);

}, 1000);


function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "nav-collaps") {
    x.className = "nav-list";
  } else {
    x.className = "nav-collaps";
  }
}

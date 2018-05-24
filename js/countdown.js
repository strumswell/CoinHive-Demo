/*
Adaptiert von: https://www.w3schools.com/howto/howto_js_countdown.asp
*/
var countDownDate = new Date().getTime() + (60 * 60 * 1000);
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "GEWONNEN!";
  }
}, 1000);

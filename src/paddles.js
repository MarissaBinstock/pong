(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

//event listener
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 38: //d
      upArrow = true;
      break;
    case 40: //s
      downArrow = true;
      break;
    case 16: //a
      shift = true;
      break;
    case 17: //w
      ctrl = true;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

//neccessary variables
var tickX = 10;
var tickY = 10;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

//main animation function
function drawStuff() {
  window.requestAnimationFrame(drawStuff);
  var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d");

  c.clearRect(0, 0, 800, 800);
  c.fillStyle = "blue";
  c.fillRect(tickX, tickY, 100, 100);

  if (keyD == true) {
    tickX += 1;
  }
  if (keyS == true) {
    tickY += 1;
  }
  if (keyA == true) {
    tickX--;
  }
  if (keyW == true) {
    tickY--;
  }
}
window.requestAnimationFrame(drawStuff);
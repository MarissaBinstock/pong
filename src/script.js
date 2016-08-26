var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
return setInterval(draw, 10);
// need to write draw function

context.setLineDash([10, 25]);

context.beginPath();
context.moveTo(150,0);
context.lineTo(150, 200);
context.lineWidth = 5;
context.strokeStyle = "white";
context.stroke();



context.fillStyle = 'yellow';
// fillRect(x1, y1, x2, y2)
context.fillRect(10, 10, 10, 50);
context.fillRect(275, 10, 10, 50);


functionion ball(){
context.fillStyle = 'white';
context.beginPath();
// arc(x, y, radius, 0, Pi* 2, true)
context.arc(150, 75, 7, 0, Math.PI*2, true);
context.fill();
}

var paddle = {
	speed: 256, // movement in pixels per second
};

var points = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// or this?

document.addEventListen(onkeypress, movePaddle(e){
	movePaddle(){}
	// up arrow
	if(e.which == 38) {
		y+= 10
	}
	// down arrow
	if (e.which == 40){
		y-= 10
}
// shift key
	if(e.which == 16) {
		y+= 10
	}
	// control key
	if (e.which == 17 ){
		y-= 10
	}
})
// html5.litten.com/moving-shapes-on-the-html5-canvas-with-the-keyboard
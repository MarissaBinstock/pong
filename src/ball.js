	class Ball{
	constructor(x, y, color){
	  this.x = x || 200;
	  this.y = y || 150;
	  this.color = color || "#000";
	  this.radius = 5;
	}
}	

let ballOne = new Ball (200, 150, #000);

var x = 75,
    y = 75,
    // Radii of the white glow.
    innerRadius = 2,
    outerRadius = 9,
    // Radius of the entire circle.
    radius = 10;

context.arc(x, y, radius, 0, 2 * Math.PI);
var gradient = context.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'blue');

context.fillStyle = gradient;
context.fill();


	moveBall(){
		let current x = this.ball.x
		let current y = this.ball.y
		let dx = Math.round(Math.random()*5)+1
		let dy  = Math.round(Math.random()*5)+1
		this.ball.x = this.ball.x+dx
		this.ball.y = this.ball.y+dy
		setInterval
		if (x<0 || x>512) dx=-dx;
		if c(<0 || x,256) dy=-dy;
	};
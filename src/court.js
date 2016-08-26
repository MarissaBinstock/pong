class Court {
	
	let width = 0;
	let height = 0;
	constructor(width, height, court){
		this.width = width;
		this.height = height;
		court.clearRect(0, 0, this.width, this.height)
	}
}


let pongCourt = new Court(512px, 256px, )


createNet(){
this.context.setLineDash([10, 25]);
// change to this.court?
context.beginPath();
context.moveTo(150,0);
context.lineTo(150, 200);
context.lineWidth = 5;
context.strokeStyle = "white";
context.stroke();
}
context.fillStyle ="pink";
context.font = "16px Arial"
context.fillText("Score:0", 20, 30);
context.fillText("Score:0", 180, 30);

context.fillStyle = 'yellow';
// fillRect(x1, y1, x2, y2)
context.fillRect(10, 10, 10, 50);
context.fillRect(275, 10, 10, 50);
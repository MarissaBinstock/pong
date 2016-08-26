class pongGame {
	const court = newCourt(); 
	// and so one to the following objects eventually
	let paddles,
	let ball,
	let score;
	constructor(field, equip, target){
		this.court = new Court (width, height, field);
		this.paddles = equip;
		this.ball = target;
		this.score = 0;
		this.court.context = field.getContext('2d');
		init();
	}
};


init(){
	showBoard(this.court); 
	createNet(call createNet function here)
	showAndPositionBall(this.ball);
	showAndPositionPaddle(this.paddles);
	displayScore(this.score)
	$(document).ready(function(){
		playGame();
	});
};

showBoard(court){


};

positionBall(ball){

};

positionPaddle(paddles){
	// paddles are an array?

};

displayScore(score){

};

playGame(){

}
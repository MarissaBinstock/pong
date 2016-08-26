
    /*
    * requestAnimFrame is a property of window.
    * It actually is a function.
    * It takes a function as its argument
    * The function will be called every time the window/browser 'refreshes'
    * (think like an old school TV screen a particular frame of a movie)
    * each frame is shown at frame rate relevant for that browser
    * but instead of a new "frame" argument that is the function
    * "renders" a new frame, i.e. drawing a new rectangle or whatever.
    * */
    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var myPongBall = {
        centreX: (canvas.width / 2),
        centreY: (canvas.height  / 2),
        ballRadius:15,
        borderWidth: 2
    };


    function drawPongBall(myPongBall, context) {
        context.beginPath();
        context.arc(myPongBall.centreX, myPongBall.centreY,
                myPongBall.ballRadius, 0, 2 * Math.PI, false);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = myPongBall.borderWidth;
        context.strokeStyle = 'black';
        context.stroke();
    }

    drawPongBall(myPongBall, context);

    var directionX = 1; // 1 is positive (to the right), -1 is to the left
    var directionY = 1;
    var speedX = 5; // set the ball's initial speed
    var speedY = 6;
    var pongBallX = myPongBall.centreX; // set the ball's initial x position;
    var pongBallY = myPongBall.centreY; // set the ball's initial y position;

    
    var scores = {playerOneScore:0, playerTwoScore:0};

    function drawScore(context){
        context.fillStyle ="pink";
        context.font = "20px Arial"
        context.fillText("Score: "+scores.playerTwoScore, 20, 30);
        context.fillText("Score: "+scores.playerOneScore, 380, 30);
   }

     

    function checkIfBallHitsLeftOrRightEdge(currentX,currentY){
        // console.log("checking for left/right edge collision.")
        // how do we check for collision?
        // TODO: with a paddle
        // with a border
        var rightEdge = canvas.width;
        var leftEdge = 0;
        // console.log("the currentX of target is " + currentX);
        // console.log("the currentY of target is " + currentY);

        // add compensation for pong ball's radius
        if (directionX==1){
            currentX = currentX + myPongBall.ballRadius;
        }else{
            currentX = currentX - myPongBall.ballRadius;
        }

        var ballHitsRightEdge = (currentX>=rightEdge)?true:false;
        var ballHitsLeftEdge = (currentX<=leftEdge)?true:false;

        if(ballHitsLeftEdge || ballHitsRightEdge){
            console.log("collision detected");
            directionX = -directionX;
        }
        if (ballHitsLeftEdge){
            console.log("left");
            scores.playerTwoScore++;
        }
        if (ballHitsRightEdge){
            console.log("right");
            scores.playerOneScore++;
        }

    }

    function checkIfBallHitsTopOrBottomEdge (currentX, currentY) {
        console.log("checking for top/bottom edge collision.")
        var topEdge = 0;
        var bottomEdge = canvas.height;
         if (directionY==1){
            currentY = currentY + myPongBall.ballRadius;
        }else{
            currentY = currentY - myPongBall.ballRadius;
        }
        var ballHitsTopEdge = (currentY<=topEdge)?true:false;
        var ballHitsBottomEdge = (currentY>=bottomEdge)?true:false;

        if(ballHitsTopEdge || ballHitsBottomEdge){
            console.log("collision detected");
            directionY = -directionY;
        }

    }
    
    
   


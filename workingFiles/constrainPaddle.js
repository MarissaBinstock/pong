 function onKeyDown(event){
        // event can be called e if you like
        console.log("onKeyDown event handler is fired");
        switch (event.keyCode){
            case 65:
                console.log("a");
                movePaddle(myRectangle,canvas,context,-10);
                break;
            case 90:
                console.log("z");
                movePaddle(myRectangle,canvas,context,10);
                break;
            case 38:
                
                break;
            case 40:
                console.log("down");
                movePaddle(myRectangle02,canvas,context,10);
                break;
            default:
                console.log("you pressed " + event.keyCode);
                break;
        }
    }

    function onKeyDown(event) { 
         if(myRectangle.height < canvas.height && event.keycode ==38){ console.log("up");
        movePaddle(myRectangle02,canvas,context,-10);};
    }
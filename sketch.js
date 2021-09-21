var ball; 

function setup() {
  createCanvas(400,400);
 ball = createSprite(200,200,20,20);

}

function draw() 
{ 
  background("yellow");
  if (keyIsDown(RIGHT_ARROW))  }
    background("red");
    ball.x = ball.x + 5;
    
  }
  if (keyIsDown(LEFT_ARROW)) {
    background("blue");
    ball.x = ball.x -5;
  }
  if (keyIsDown(UP_ARROW)) {
    background("green");
    ball.y = ball.y  -5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    background("purple");
    ball.y = ball.y + 5;
  }
  drawSprites();
}





var cole;
var backg;
var gameState=0;
var candyGroup;
var score=0;



function preload(){

}


function setup() {
  createCanvas(800,400);
  cole=createSprite(400, 200, 50, 50);
  candyGroup=createGroup();
}


function draw() {
  background(0);
  switch(gameState){
    case 0:text("Welcome Player please read the instructions carefully and remember to have fun!",350,200);
    text("Press space to start",400,300)
    if (keyIsDown(32)){
      gameState=1;
    }
    break;
    case 1:
    text("Score"+score,650,100)
    if (keyIsDown(UP_ARROW)){
      cole.y=cole.y-2

    }

    if (keyIsDown(DOWN_ARROW)){
      cole.y=cole.y+2
      
    }
     
    if (keyIsDown(RIGHT_ARROW)){
      cole.x=cole.x+2
    }
    if (candyGroup.isTouching(cole)){
      candyGroup.destroyEach();
      score+=10;
    }
      
    drawSprites();
    spawnCandy();
  }  
  
}

function spawnCandy(){
if(frameCount%50===0){
  var candy=createSprite(random(200,700),300,20,20);
  candyGroup.add(candy);
  candy.lifeTime=50
  
  
}

}
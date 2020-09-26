var PLAY=1;
var END=0;
var gameState=PLAY;
var bird,birdimg;
var gameover;
var arrowimg;
var gameoverimg;
var netimg;
//var restart;
var backgroundImg;

var score =0;

function preload(){
birdimg=loadAnimation("sprites/bird1.png","sprites/bird2.png","sprites/bird3.png","sprites/bird4.png")
arrowimg=loadImage("sprites/arrow1.png")
netimg=loadImage("sprites/net1.png")
 backgroundImg=loadImage("sprites/bg2.jpg")
 gameoverimg=loadImage("sprites/gameover.png")
}

function setup() {
 var canvas = createCanvas(1200,400)
  bird=createSprite(400,200,50,50)
  bird.addAnimation("birdfly",birdimg)
  gameover=createSprite(600,200,100,100)
  gameover.addImage(gameoverimg)
  groupArrows=new Group()
  groupNets=new Group()
  //restart = createSprite(200,340,20,20);
  //restart.visible = false;
  gameover.visible = false;
}

function draw() {
  background(0);
 background(backgroundImg)


 text("Score: "+ score, 600, 100);

  if(gameState===PLAY){

    
    score = score+1;

    gameover.visible=false
    
      
    

   

    if(keyDown(UP_ARROW)){
      bird.y = bird.y-30
    } 
    if(keyDown(DOWN_ARROW)){
      bird.y=bird.y+30
    }
    background.velocityX=-2
    if(background.x<0){
      background.x = background.width/2;
    }
    bird.scale=0.2
    spawnarrows()
    spawnnets()
    if(groupArrows.isTouching(bird)|| groupNets.isTouching(bird)){
     gameState=END
    }
   // restart.visible = false;
  }
  else if(gameState===END){
    
 ground.velocityX=0
 groupArrows.setVelocityEach(0)
 groupNets.setVelocityEach(0)
 groupArrows.setLifetimeEach(-1)
 groupNets.setLifetimeEach(-1)
 
// restart.visible = true;

 }
 /*restart()
 if(mousePressedOver(restart)) {
  restart();
}*/

  
  drawSprites();
}
function spawnarrows(){
  if (frameCount % 60 === 0) {
    var arrow = createSprite(0,200,40,10);
    groupArrows.add(arrow)
    arrow.addImage(arrowimg)
    arrow.y = Math.round(random(200,360));
    //arrow.setAnimation("cloud");
    arrow.scale = 0.2;
    arrow.velocityX = 10;
     arrow.lifetime = 267;
}
}
function spawnnets(){
  if (frameCount % 80 === 0) {
    var nets = createSprite(0,200,40,10);
    groupNets.add(nets)
    nets.addImage(netimg)
    nets.y = Math.round(random(0,200));
    //arrow.setAnimation("cloud");
    nets.scale = 0.5;
    nets.velocityX = 10;
    nets.lifetime = 267;
}
}
 /*function restart(){
   var reset = createSprite(200,340,20,20);
  gameState = PLAY;
  restart.visible = false;
  groupArrows.destroyEach();
  groupNets.destroyEach();
  
 
  //count = 0;
  
}*/
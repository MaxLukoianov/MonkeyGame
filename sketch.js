var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var ground, groundImage;
var FoodGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup(){
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground =  createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  var survivalTime = 0
  
}


function draw(){
  createCanvas(600, 600);
  background("lightblue")
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(keyDown("space")) {
      monkey.velocityY = -12;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score " + score, 400, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate)
  text("Survival Time: " + survivalTime, 100, 50);
  
  spawnObstacles();
  spawnFood();
  
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale = 0.5;
   obstacle.scale = 1;
   obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
 }
}

function spawnFood(){
  if (frameCount % 80 === 0){
   var banana = createSprite(400,165,10,40);
   banana.addImage(bananaImage);
   banana.y = Math.round(random(120,200));
   banana.velocityX = -6;
   banana.scale = 1;
   banana.lifetime = 300;
   FoodGroup.add(banana);
 }
}



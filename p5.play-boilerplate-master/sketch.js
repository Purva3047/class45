var pole,birdImage;
var gameOverImage;
var gameStartImage;

function setup() {
  createCanvas(800,400);
  pole=createSprite(400, 200, 50, 50);
  pole.addImage(poleImage)
  pole.scale=0.1;
}

function preload(){
  birdImage=loadAnimation("image/BIRD.png","image/BIRD 2.png","image/BIRD 3.png","image/BIRD 4.png")
  poleImage=loadImage("image/POLE.png")
  gameOverImage=loadImage("image/gameOver.jpg")
  gameStartImage=loadImage("image/startGame.png")
}

function draw() {
  background('yellow'); 
  drawSprites();
}
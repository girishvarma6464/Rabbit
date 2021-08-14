var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  applen = createSprite(ramdom(50,350),40,10,10);
  //Add image to apple sprite
  //Scale the sprite if requried
  //Gice the velocity so that the apple move downloads
  //give lifetime to the apple  sprite
}

var select_sprites = Math.round(ramdom(1,2));

if (frameCount % 80 == 0){
  if (select-sprite == 1){
    //call createApples function
  }
  eles
//call creteLeaves function
  }


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
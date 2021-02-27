var sea, seaImg, ship, ship_moving, ship_moving1;

function preload(){ 
  seaImg=loadImage("sea.png");
  ship_moving=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");  
  ship_moving1=loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
}
  
  
function setup (){  
  createCanvas(400,400);  
  
  sea=createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.scale=0.3;
  
  
  ship=createSprite(130,300,50,50);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.25;
  }


function draw (){
  background("blue");
  sea.velocityX=-5;
  
  if(sea.x<0){
    sea.x=300;
  }
  
  if(keyDown("space")){    
    ship.addAnimation("moving",ship_moving1);
  }
  
  drawSprites();
}
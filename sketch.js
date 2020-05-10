var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,800);
  
bullet=createSprite(50,200,60,10,); 
bullet.shapeColor="white"; 
wall=createSprite(1200,200,thickness,height/2);
speed=random(223,321)
thickness=random(22,83)
weight=random(30,52)
bullet.velocityX = speed;
}

function draw() {
  background("pink");  
  if(wall.x - bullet.x <  wall.width/2 +  bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  
  if(damage>10){
    bullet.shapeColor ="green";
  }
 
  if(damage<10)
  bullet.shapeColor = "red";
  }
   
  drawSprites();
}
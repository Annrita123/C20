
 var fixedrect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 100, 50);
  fixedrect.debug=true;
fixedrect.shapeColor='red';
  movingRect=createSprite(400,200,50,100);
  movingRect.shapeColor="red";
  movingRect.debug=true;
}

function draw() {
  background('cyan');  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if( fixedrect.width/2+movingRect.width/2 > movingRect.x-fixedrect.x &&
    fixedrect.width/2+movingRect.width/2 > fixedrect.x -movingRect.x &&
    fixedrect.height/2+movingRect.height/2 > movingRect.y-fixedrect.y &&
    fixedrect.height/2+movingRect.height/2 > fixedrect.y -movingRect.y){

  fixedrect.shapeColor='green';
  movingRect.shapeColor="green";
} else{

  fixedrect.shapeColor='red';
  movingRect.shapeColor="red";
}




  drawSprites();
}


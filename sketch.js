var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1 = createSprite(200, 500, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect1.velocityX = 2;
  movingRect1 = createSprite(400,500,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;
  movingRect1.velocityX = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }

  bounceOff(movingRect1,fixedRect1);

  drawSprites();
}


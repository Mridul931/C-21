var fixedRec,movingRec;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 fixedRec = createSprite (600,800,50,80);
 movingRec = createSprite(200,50,80,50);
 fixedRec.shapeColor = "pink";
 movingRec.shapeColor = "pink";
 fixedRec.debug = true;
 movingRec.debug = true;
  
gameObject1 = createSprite(100,100,80,80);
gameObject2 = createSprite(200,100,80,80);
gameObject3 = createSprite(300,100,80,80);
gameObject4 = createSprite(600,80,80,80);

gameObject1.shapeColor = "pink";
gameObject2.shapeColor = "pink";
gameObject3.shapeColor = "pink";
gameObject4.shapeColor = "pink";

gameObject1.debug = true;
gameObject2.debug = true;
gameObject3.debug = true;
gameObject4.debug = true;

gameObject4.velocityY = 5;
fixedRec.velocityY = -5;

}

function draw() {
  background(0,0,0);  

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  isTouching(movingRec,gameObject3);
  isTouching(movingRec,gameObject1);

  bounceOff(gameObject4,fixedRec);

  drawSprites();
}


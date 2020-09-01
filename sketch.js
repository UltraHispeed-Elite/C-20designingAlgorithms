var frect,mrect,edges;
var go1, go2, go3,go4;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(400,400,50,80);
  frect.shapeColor= "blue";
  mrect = createSprite(600,600,80,30);
  mrect.shapeColor= "blue";
  edges = createEdgeSprites();

  go1 = createSprite(200,100,50,50);
  go1.shapeColor="white";
  go2 = createSprite(400,100,50,50);
  go2.shapeColor="blue";
  go3 = createSprite(600,100,50,50);
  go3.shapeColor="yellow";
  go4 = createSprite(800,100,50,50);
  go4.shapeColor="black";

  //mrect.velocityX=-5;
  //frect.velocityX=5;
}

function draw() {
  background("red");  

  
  frect.bounceOff(edges[0]);
  frect.bounceOff(edges[1]);
  frect.bounceOff(edges[2]);
  frect.bounceOff(edges[3]);
  mrect.bounceOff(edges[0]);
  mrect.bounceOff(edges[1]);
  mrect.bounceOff(edges[2]);
  mrect.bounceOff(edges[3]);

  
 mrect.x = World.mouseX;
 mrect.y = World.mouseY;


/*if(isTouching(mrect,go3)){
  mrect.shapeColor = "yellow";
  //go1.shapeColor = "black";
  go3.shapeColor = "green";
  }
  else{
    mrect.shapeColor = "blue";
    //go1.shapeColor = "white";
    go3.shapeColor= "yellow";
  }*/
isTouching(mrect,go3);
bounceOff(mrect, frect);
  drawSprites();
}


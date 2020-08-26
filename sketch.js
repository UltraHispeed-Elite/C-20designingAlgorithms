var frect,mrect,edges;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(400,400,50,80);
  frect.shapeColor= "blue";
  mrect = createSprite(600,600,80,30);
  mrect.shapeColor= "blue";
  edges = createEdgeSprites();

  mrect.velocityX=-5;
  frect.velocityX=5;
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

  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    ){
   mrect.velocityX=mrect.velocityX*(-5);
   frect.velocityX=frect.velocityX*(-5);
    }
    if(mrect.y-frect.y<frect.height/2+mrect.height/2
      && frect.y-mrect.y<frect.height/2+mrect.height/2
    ){
      mrect.velocityY=mrect.velocityY*(-5);
      frect.velocityY=frect.velocityY*(-5);
    }
 // mrect.x = World.mouseX;
 // mrect.y = World.mouseY;


  /*if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    && mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2
    ){
  mrect.shapeColor = "yellow";
  frect.shapeColor = "yellow";
  }
  else{
    mrect.shapeColor = "blue";
    frect.shapeColor = "blue";
  }*/


  drawSprites();
}
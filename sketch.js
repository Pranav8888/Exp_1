const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var boxes = [];
var ground;
var boundary1, boundary2;
function setup(){
    createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, height, width, 10);
    
    Engine.run(engine);
}

  
function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40))) 
}

function draw(){
    background(51);
    Engine.update(engine);
 
    for(var i = 0; i < boxes.length; i++) {
      boxes[i].show();
    }

    ground.display();
    
    drawSprites();
}


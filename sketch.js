const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);
  
 // createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world =  engine.world;
  
  var ground_options = {
    isStatic : true
  }

  var ball_options = {
    restitution : 1
  }

  ground = Bodies.rectangle(400,400,100,10, ground_options);
  ball = Bodies.circle(200,200,10, ball_options); 

  World.add(world,ground);
  World.add(world,ball);


}

function draw() {
  background("Black");  
  drawSprites();
  Engine.update(engine);
  fill("Red");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 900, 60);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 29,29);
  

}
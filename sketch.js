const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var left;
var right;
var top_wall;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  

}

function draw() 
{
  background(51);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  


  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

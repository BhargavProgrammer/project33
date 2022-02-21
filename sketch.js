const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bgImg

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  snow = new Snow(200,0)
  }

function draw() {
  background(bgImg);
  Engine.update(engine);
  if(frameCount%50===0){
  snow = new Snow(random(100,700),200)
  }
  snow.display();
  }
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var block1,block2, block3,block4,block5,block6,block7,block8, block9,block10, block11,block12,block13,block14,block15

function setup(){
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,580,900,30);
  block1=new Block(700,300,70,70);
  block2=new Block(700,300,70,70);
  block3=new Block(700,300,70,70);
  block4=new Block(700,300,70,70);
  block5=new Block(700,300,70,70);
  block6=new Block(600,300,70,70);
  block7=new Block(600,300,70,70);
  block8=new Block(600,300,70,70);
  block9=new Block(600,300,70,70);
  block10=new Block(600,300,70,70);
  block11=new Block(800,300,70,70);
  block12=new Block(800,300,70,70);
  block13=new Block(800,300,70,70);
  block14=new Block(800,300,70,70);
  block15=new Block(800,300,70,70);
  ball=new Ball(100,100,50);
  rope=new Slingshot(ball.body,{x:350,y:100});
}

function draw() {
  background(56,44,44); 
  ground.display();
  block1.display();
  block2.display(); 
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

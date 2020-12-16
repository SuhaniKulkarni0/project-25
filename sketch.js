
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, bin, ground;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,400,70)

	bin1 = new Bin(1200, 650, 200,20)
	bin2 = new Bin(1300, 610, 20,100)
	bin3 = new Bin(1100, 610, 20,100)

	ground = new Ground(700, 670, 2000,20)

	Engine.run(engine);

	

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  ball.display()
  ground.display()

  bin1.display()
  bin2.display()
  bin3.display()

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:270, y:-270})
	}
}
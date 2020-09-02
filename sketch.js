
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 675, 800, 50);

	tree = new Tree(600, 430, 400, 500);
	mango1 = new Mango(600, 300, 50);
	mango2 = new Mango(640, 340, 40);
	mango3 = new Mango(680, 280, 60);
	mango4 = new Mango(700, 350, 60);
	mango5 = new Mango(755, 370, 40);
	mango6 = new Mango(620, 240, 50);
	mango7 = new Mango(555, 260, 60);
	mango8 = new Mango(440, 370, 40);
	mango9 = new Mango(490, 340, 50);
	mango10 = new Mango(545, 330, 70);
	mango11 = new Mango(590, 365, 50);
	mango12 = new Mango(520, 395, 50);

	stone = new Stone(85, 520, 50, 50);
	boy = new Boy(150, 600, 200, 280);
	sling = new Sling(stone.stone, {x:90, y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(193, 247, 255);

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  boy.display();

  stone.display();

  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);

  drawSprites();
 
}

function mouseDragged(){
    Body.setPosition(stone.stone, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.mango.position;
	stoneBodyPosition = lstone.stone.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.radius+lstone.width) {
		Body.setStatic(lmango.mango, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Body.setPosition(stone.stone, {x:235, y:420});
		sling.attach(stone.stone);
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var kid,tree,mango,chain,stone;
function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	kid = new Kid(200,300,150,150);
	tree = new Tree(500,100,400,400);
	mango=new Mango(500,300,100,100);
	stone = new Stone(150,330,50,50);

	chain= new Chain(stone.body,{x:200,y:300});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('green');
  
  Engine.update(engine);
  
  chain.display();
  kid.display();
  tree.display();
  mango.display();
  stone.display();
  
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.release();
}
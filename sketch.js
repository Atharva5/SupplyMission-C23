const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,550,800,20);

	box1 = new Box(330,480,20,110);
	box2 = new Box(400,520,110,20);
	box3 = new Box(470,480,20,110);
	
var package_options = {
	restitution:0.3,
	isStatic : true
}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_options);
	World.add(world, packageBody);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	   
	 }
   }






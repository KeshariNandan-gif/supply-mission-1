var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var object;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas=createSprite(400,400);
	engine=Engine.create();
	world=engine.world;

    var object_options={
		isStatic:true
	}
	
	ground=Bodies.rectangle(200,390,200,20,ground_options);
	World.add(world.ground);

	var ball_options={
		restituition:0.8
	}

	object=Bodies.rectangle(200,100,50,50,object_options);
	World.add(world,object);

	console.log(object);
    console.log(object.position.x);
    console.log(object.pposition.y);
	console.log(object,type);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  rect(200,200,50,50);
  Engine.update(engine);

  rect(object.position.x,object.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}






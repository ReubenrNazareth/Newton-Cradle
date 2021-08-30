const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5 ;
var rope1, rope2, rope3, rope4, rope5;

var radius = 40;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
   isStatic:false
 
	}
 
	roof = Bodies.rectangle(350,100,200,10,roof_options);
    
	bob1 = Bodies.circle(250,400,25,bob_options);
	bob2 = Bodies.circle(300,400,25,bob_options); 
	bob3 = Bodies.circle(350,400,25,bob_options); 
	bob4 = Bodies.circle(400,400,25,bob_options); 
	bob5 = Bodies.circle(450,400,25,bob_options); 

	rope1 = Matter.Constraint.create({
     pointA:{x:250,y:100},
	 bodyB:bob1,
	 pointB:{x:0,y:0},
	 length:300,
	 stiffness:0
	})

	

	rope2 = Matter.Constraint.create({
	 pointA:{x:300,y:100},
	 bodyB:bob2,
	 pointB:{x:0,y:0},
	 length:300,
	 stiffness:0
	})

	rope3 = Matter.Constraint.create({
	 pointA:{x:350,y:100},
	 bodyB:bob3,
	 pointB:{x:0,y:0},
	 length:300,
	 stiffness:0
    })
   
	rope4 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0
	})
   
    rope5 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0
    })
   

	World.add(world,roof);
	World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);

	World.add(world,rope1);
    World.add(world,rope2);
	World.add(world,rope3);
	World.add(world,rope4);
	World.add(world,rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  strokeWeight(2);
  stroke(0);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  strokeWeight(2);
  stroke(0);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  rect(roof.position.x,roof.position.y,230,20);
  strokeWeight(2);
  stroke(0);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  strokeWeight(2);
  stroke(0);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  strokeWeight(2);
  stroke(0);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,50);
  ellipse(bob2.position.x,bob2.position.y,50);
  ellipse(bob3.position.x,bob3.position.y,50);
  ellipse(bob4.position.x,bob4.position.y,50);
  ellipse(bob5.position.x,bob5.position.y,50);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode ===  DOWN_ARROW) {
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.19,y:0});
	 }
}
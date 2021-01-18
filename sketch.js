
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1536, 700);


	engine = Engine.create();
	world = engine.world;

	
	roofOptions={
	isStatic:true
  }

  
  

	roof=new Roof (670,100,300,30,roofOptions)
	

  bob1=new Bob(550,335)
  bob2=new Bob(612,335)
  bob3=new Bob(673,335)
  bob4=new Bob(734,335)
  bob5=new Bob(795,335)
 
  


rope1 = new Chain(bob1.body,{x:570 , y:100})
rope2 = new Chain(bob2.body,{x:620 , y:100})
rope3 = new Chain(bob3.body,{x:670 , y:100})
rope4 = new Chain(bob4.body,{x:720 , y:100})
rope5 = new Chain(bob5.body,{x:770 , y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background("lime")
  rectMode(CENTER)
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  bob1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  

}

  function keyPressed(){
    if(keyCode===UP_ARROW){
      console.log(bob1.body)
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70, y:0})
    }
 
}




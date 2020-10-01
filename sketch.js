const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 
var backgroundImg,platform;
var stone, slingShot;
var tree, boy;
var mango1,mango2,mango3,mango4,mango5,mango6;

function preload() {
    boy = loadImage("sprites/boy.png");
    BGI = loadImage("sprites/bg.png");
 }

function setup(){
    var canvas = createCanvas(1200,587);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,580,1200,10);
    stone = new Stone(80,380,40,70);
    slingshot = new SlingShot(stone.body,{x:190, y:430});
    tree = new Tree(950,600);
    mango1 = new Mango(850,250,50);
    mango2 = new Mango(950,250,40);
    mango3 = new Mango(1050,250,40);
    mango4 = new Mango(950,150,50);
    mango5 = new Mango(1050,150,40);
    mango6 = new Mango(950,80,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    strokeWeight(4);
    imageMode(CENTER);
    image(boy, 250, 500, 200, 300);

    tree.display();
    mango1.display();  
    mango2.display();  
    mango3.display();  
    mango4.display();  
    mango5.display();  
    mango6 .display();  
    stone.display();
    ground.display();
    slingshot.display();  
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        slingshot.attach(stone.body);
   }
}

function detectCollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
  
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //   if(distance <-lmango.r+lstone+r){
    //       Mtter.Body.setStatic(lmango,false);
    //   }
  }
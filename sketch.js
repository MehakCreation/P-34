var Engine=Matter.Engine;
var World=Matter.World;
var Bodies=Matter.Bodies;
var Constraint=Matter.Constraint;
var hero,monster;

function preload() {
  bg=loadImage("background.png");

}

function setup() {
  createCanvas(3000, 700);
 engine=Engine.create()
 world=engine.world
ground=new Ground(600,600,1200,20);
hero=new Hero(400,800,250);
rope=new Rope(hero.body,{x:500,y:50}) 
moster=new Monster(1100,500,300)
box1 = new Box(600,100,70,70);
box2 = new Box(900,100,70,70);
box3 = new Box(600,100,70,70);
box4 = new Box(900,100,70,70);
box5 = new Box(600,100,70,70);
box6 = new Box(900,100,70,70);
box7 = new Box(600,100,70,70);
box8 = new Box(900,100,70,70);
box9 = new Box(600,100,70,70);
box10 = new Box(900,100,70,70);

}

function draw() {
  background(bg);
Engine.update(engine);
ground.display();
hero.display();
rope.display();
moster.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

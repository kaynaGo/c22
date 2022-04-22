const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerImg, playerArcher,playerBase;
var baseImg;
var arco

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImg = loadImage("./assets/base.png");
  playerImg = loadImage("./assets/player.png");
  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

 
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  playerArcher.rotation = 5
  

  var options = {
  isStatic:true
  };
 
  playerBase = Bodies.rectangle(200,350,180,150,options)
  World.add(world,playerBase)
  //criar corpo do jogador
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options)
  World.add(world,player)

 


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  
  //exibir a imagem da base do jogador usando a função image()
 

  Engine.update(engine);
  image(baseImg,playerBase.position.x,playerBase.position.y,180,150)
  image(playerImg,player.position.x,player.position.y,50,180)
 

 
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

}

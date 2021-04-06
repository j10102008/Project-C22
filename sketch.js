var starImg,bgImg;
var star, starBody;
var fairyImg,fairyImg2,;
var fairy,fairyVoice;
//created variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//loaded animation for fairy 
    fairyImg = loadAnimation("images/fairyImg1.png,images/fairyImg2.png");
}

function setup() {
	createCanvas(800, 750);

	//written code to play fairyVoice sound
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	//created fairy sprite 
    fairy = createSprite(570,10);
	fairy.addImage(fairyImage1);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //written code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//written code to move fairy left and right
	fairy.x = World.mouseX;

	fairy.display ()
	star.displaay ()
}

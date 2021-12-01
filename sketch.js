var starImg,bgImg;
var star, starBody;
var fada, fadaImg;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
    bgImg = loadImage("starNight.png");
    //carregar animação de fada 
     fadaImg = loadAnimation('fairyImage1.png','fairyImage2.png')
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
    star.addImage(starImg);
	star.scale = 0.2;

    

    fada = createSprite(200,550,100,100);
    fada.addAnimation('voar',fadaImg);
    fada.scale = 0.2
    //fada.debug = true;
    fada.setCollider ('rectangle',500,0,200,200)
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


}

function draw(){
    background(bgImg)
    star.position.y = starBody.position.y;
    if (keyCode === 97){
        fada.x = fada.x - 10;


    }
    if (keyCode === 100){
        fada.x = fada.x + 10;


    }
    if (keyCode === 32){
        Matter.Body.setStatic(starBody,false);


    }
    if (star.isTouching(fada)){
        Matter.Body.setStatic(starBody,true);


    }
    drawSprites();
}
var gameState = "level1";
var background, backgroundImg;
var level1bg, level1bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var m1, m2, m3, m4;
var bg = "images/background.png";
var monster1 ,monster2,monster3,monster4;
function preload(){
    backgroundImg = loadImage("images/background.png");
backgroundImg1 = loadImage("images/background.png");
 level1bgImg = loadImage("images/level1_bg.jpg");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level1.png");
m1 = loadImage("images/skeleton_right.png");
m2 = loadImage("images/slappy_front.png");
m3 = loadImage("images/witch_left.png");
m4 = loadImage("images/zombie_right.png");
sound1 = loadSound("sounds/halloween_sound1.mp3");
sound2 = loadSound("sounds/level1_sound2.mp3");

}

function setup() {
createCanvas(1000,600);
sound1.play();

startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;

storyButton = createSprite(100,250);
storyButton.addImage(storyImg);
storyButton.scale = 0.5;

// playButton = createSprite(750,150);
// playButton.addImage(playImg);
// playButton.scale = 0.4;
// playButton.visible = false;

 monster1 = createSprite(100,250,50,50);
monster1.addImage(m1);
    
 monster2 = createSprite(200,350,50,50);
monster2.addImage(m2);
    
 monster3 = createSprite(300,450,50,50);
monster3.addImage(m3);
    
monster4 = createSprite(300,550,50,50);
monster4.addImage(m4);
monster1.visible=false;
monster2.visible=false;
monster3.visible=false;
monster4.visible=false;

}

function draw() {
    if(backgroundImg)
background(backgroundImg);  

if(mousePressedOver(startButton)){
    clear()
    background(level1Img );  
    monster1.visible=false;
    monster2.visible=false;
    monster3.visible=false;
    monster4.visible=false;
startButton.visible = false;
storyButton.visible = false;
console.log(bg)
playButton=createImg("images/play.png");
playButton.position(750,90)
playButton.mousePressed(()=>{
play();
})
playButton.size(50,50);
homeButton=createImg("images/home.png");
homeButton.position(750,60);
homeButton.size(50,50);
homeButton.mouseClicked(home)
backgroundImg=null;
}

if(mousePressedOver(storyButton)){
    clear()
    background(infoSlideImg );  
    monster1.visible=false;
monster2.visible=false;
monster3.visible=false;
monster4.visible=false;
startButton.visible = false;
storyButton.visible = false;
homeButton=createImg("images/home.png");
homeButton.position(750,60);
homeButton.size(50,50);
homeButton.mouseClicked(home)
backgroundImg=null;
}





    
drawSprites();
}
function home(){
  clear()
background(backgroundImg1)
    homeButton.hide()
      startButton.visible = true;
 storyButton.visible = true;

}

function play(){
    clear();
    monster1.visible=true;
monster2.visible=true;
monster3.visible=true;
monster4.visible=true;
monster1.velocityX=8
monster2.velocityX=-8
monster3.velocityY=8
monster4.velocityX=-8

background(level1bgImg)
console.log(background);
startButton.visible = false;
storyButton.visible = false;

}


// const accessCode1 = "VARIABLE";
// const accessCode2 = "FUNCTION";
// const accessCode3 = "DATABASE";

// function clues() {
    
//     fill("white")
//     textSize(15)
//     text("R E V B A I L A", 100,50)
//     fill("lightblue")
//     text("Hint: Always changing, not constant !!", 100,70)

//     fill("white")
//     textSize(15)
//     text("C U T N I F O N", 700,150)
//     fill("lightblue")
//     text("Hint: Performs a particular task !!", 700,170)

//     fill("white")
//     textSize(15)
//     text("A T E D A S B A", 100,250)
//     fill("lightblue")
//     text("Hint: Stores all information !!", 100,270)

// }

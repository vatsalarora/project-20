var garden,gardenImage,cat,catImage1,catImage2,catImage3,mouse,mouseImage1,mouseImage2,mouseImage3;


function preload() {
    //load the images here
    gardenImage=loadImage("/images/garden.png")
    catImage1=loadAnimation("/images/cat1.png")
    catImage2=loadAnimation("/images/cat2.png","/images/cat3.png")
    catImage3=loadAnimation("images/cat4.png")
    mouseImage1=loadAnimation("/images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3=loadImage("images/mouse4.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,600,20,20)
    cat.addAnimation("catStanding",catImage1);
    cat.scale=0.2

    mouse=createSprite(200,600,20,20)
    mouse.addAnimation("mouseStanding",mouseImage1);
    mouse.scale=0.2
    mouse.addAnimation("mouseTeasing",mouseImage2);
    cat.addAnimation("catRunning",catImage2);
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catLastImage",catImage3)
     cat.x=300;
     cat.scale=0.2
     cat.changeAnimation("catLastImage")
     mouse.addAnimation("mouseLastImage",mouseImage3);
     mouse.scale=0.15;
     mouse.changeAnimation("mouseLastImage");
     }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImage2)
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay= 25;
    cat.addAnimation("catRunning",catImage2)
    cat.changeAnimation("catRunning");
    cat.velocityX=-3;
 }

}

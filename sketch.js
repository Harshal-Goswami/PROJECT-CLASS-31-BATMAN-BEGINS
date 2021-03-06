var ThunderBolt1 , ThunderBolt1Image;
var ThunderBolt2 , ThunderBolt2Image;
var ThunderBolt3 , ThunderBolt3Image;
var ThunderBolt4 , ThunderBolt4Image;

var WalkingMan1 , WalkingMan1Image;
var WalkingMan2 , WalkingMan2Image;
var WalkingMan3 , WalkingMan3Image;
var WalkingMan4 , WalkingMan4Image;
var WalkingMan;

function preload(){
    ThunderBolt1Image = loadImage ("thunderbolt/1.png");
    ThunderBolt2Image = loadImage ("thunderbolt/2.png");
    ThunderBolt3Image = loadImage ("thunderbolt/3.png");
    ThunderBolt4Image = loadImage ("thunderbolt/4.png");

    WalkingMan1Image = loaadImage ("Walking Frame/walking-1.png");
    WalkingMan2Image = loaadImage ("Walking Frame/walking-2.png");
    WalkingMan3Image = loaadImage ("Walking Frame/walking-3.png");
    WalkingMan4Image = loaadImage ("Walking Frame/walking-4.png");
    WalkingMan5Image = loaadImage ("Walking Frame/walking-5.png");
    WalkingMan6Image = loaadImage ("Walking Frame/walking-6.png");
    WalkingMan7Image = loaadImage ("Walking Frame/walking-7.png");
    WalkingMan8Image = loaadImage ("Walking Frame/walking-8.png");
}

function setup(){
   createCanvas(300,400);
  var WalkingMan = createSprite (80,315,20,20);
  WalkingMan.addAnimation ("moving, WalkingMan_running"); 
  WalkingMan.scale = 0.1;
}

function draw(){
    drawSprites();
}   


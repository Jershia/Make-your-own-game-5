var canvas, backgroundImage;
var gameState = 0;
//var distance = 0;
var database;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block21,block22,block23,block24;
var player1,player2,player3,player4;
var tank1,tank2,tank3,tank4;
var tank1Left,tank2Left,tank3Left,tank4Left;
var tank1Right,tank2Right,tank3Right,tank4Right;
var tank1Down,tank2Down,tank3Down,tank4Down;
var players;
var allPlayers;
var game,form,player;
var playerCount;
var xD,yD

function preload(){
 tank1 = loadImage("images/tank1_up.png");
 tank2 = loadImage("images/tank2_up.png");
 tank3 = loadImage("images/tank3_up.png");
 tank4 = loadImage("images/tank4_up.jpg");

 tank1Left = loadImage("images/tank1_left.png");
 tank2Left = loadImage("images/tank2_left.png");
 tank3Left = loadImage("images/tank3_left.png");
 tank4Left = loadImage("images/tank4_left.jpg");
 
 tank1Right = loadImage("images/tank1_right.png");
 tank2Right = loadImage("images/tank2_right.png");
 tank3Right = loadImage("images/tank3_right.png");
 tank4Right = loadImage("images/tank4_right.jpg");
 
 tank1Down = loadImage("images/tank1_down.png");
 tank2Down = loadImage("images/tank2_down.png");
 tank3Down = loadImage("images/tank3_down.png");
 tank4Down = loadImage("images/tank4_down.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-25);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //text(mouseX + "," + mouseY,mouseX,mouseY);
  drawSprites();
}

function detectCollision(){
  if(player1.collide(block1)||player1.collide(block2)||player1.collide(block3)||player1.collide(block4)||player1.collide(block5)||player1.collide(block6)||player1.collide(block7)||player1.collide(block8)||player1.collide(block9)||player1.collide(block10)||player1.collide(block11)||player1.collide(block12)||player1.collide(block13)||player1.collide(block14)||player1.collide(block15)||player1.collide(block16)||player1.collide(block17)||player1.collide(block18)||player1.collide(block19)||player1.collide(block20)||player1.collide(block21)){    
     player1.velocityX = 0;
     player1.velocityY = 0;
  }

  if(player2.collide(block1)||player2.collide(block2)||player2.collide(block3)||player2.collide(block4)||player2.collide(block5)||player2.collide(block6)||player2.collide(block7)||player2.collide(block8)||player2.collide(block9)||player2.collide(block10)||player2.collide(block11)||player2.collide(block12)||player2.collide(block13)||player2.collide(block14)||player2.collide(block15)||player2.collide(block16)||player2.collide(block17)||player2.collide(block18)||player2.collide(block19)||player2.collide(block20)||player2.collide(block21)){
    player2.velocityX = 0;
    player2.velocityY = 0;
    console.log("collision detected")
  }

  /*if(player3.collide(block1)||player3.collide(block2)||player3.collide(block3)||player3.collide(block4)||player3.collide(block5)||player3.collide(block6)||player3.collide(block7)||player3.collide(block8)||player3.collide(block9)||player3.collide(block10)||player3.collide(block11)||player3.collide(block12)||player3.collide(block13)||player3.collide(block14)||player3.collide(block15)||player3.collide(block16)||player3.collide(block17)||player3.collide(block18)||player3.collide(block19)||player3.collide(block20)||player3.collide(block21)){
    player3.velocityX = 0;
    player3.velocityY = 0;
  }*/

  if(player4.collide(block1)||player4.collide(block2)||player4.collide(block3)||player4.collide(block4)||player4.collide(block5)||player4.collide(block6)||player4.collide(block7)||player4.collide(block8)||player4.collide(block9)||player4.collide(block10)||player4.collide(block11)||player4.collide(block12)||player4.collide(block13)||player4.collide(block14)||player4.collide(block15)||player4.collide(block16)||player4.collide(block17)||player4.collide(block18)||player4.collide(block19)||player4.collide(block20)||player4.collide(block21)){
    player4.velocityX = 0;
    player4.velocityY = 0;
  }

  /*if(player1.collide(player2)||player1.collide(player3)||player1.collide(player4)){
    player1.velocityX = 0;
    player1.velocityY = 0;
  }

  if(player2.collide(player3)||player2.collide(player4)){
    player2.velocityX = 0;
    player2.velocityY = 0;
  }

  if(player3.collide(player4)){
    player3.velocityX = 0;
    player3.velocityY = 0;
  }*/
}
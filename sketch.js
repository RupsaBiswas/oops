var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var backg;
var player, form,game;
var player1,player2;
var players;
var fruit1,fruit2,fruit3,fruit4,fruit5
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
// create the variables for the score and displaying scores. and intialize with zero
var score=0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  
  player.addImage(player_img);
  fruit1.addImage(fruit1_img);
  fruit2.addImage(fruit2_img);
  fruit3.addImage(fruit3_img);
  fruit4.addImage(fruit4_img);
  fruit5.addImage(fruit5_img);
 
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
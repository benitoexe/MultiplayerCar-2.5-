var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var cars, car1, car2, car3, car4;
var database;
var position;
var car1Image, car2Image, car3Image, car4Image
var trackImage;
var backDrop;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");

    trackImage = loadImage("images/track.jpg");

    backDrop = loadImage("images/carRace.jpg");

}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);

    database = firebase.database();
    console.log(database);
    game = new Game();
    game.getState();
    game.start();
    background(backDrop);
}

function draw(){
    if(playerCount == 4){
        game.update(1);
        }
    if(gameState == 1){
        clear();
        game.play();
    }
    if(gameState == 2){
        game.end();
    }
}


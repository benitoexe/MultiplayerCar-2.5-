class Game{
 constructor(){

 }

 getState(){
     var gameStateref = database.ref("gameState");
     gameStateref.on("value", function(data){
        gameState = data.val();
    }) 
 }

 update(state){
     database.ref("/").update({
         gameState: state
     })
 }


 async start(){
     if(gameState === 0){
         player = new Player();
         var playerCountref = await database.ref("playerCount").once("value");
         if(playerCountref.exists()){
             playerCount = playerCountref.val();
             player.getCount();
         }
         form = new Form();
         form.display();
     }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

    car1.addImage(car1Image);
    car2.addImage(car2Image);
    car3.addImage(car3Image);
    car4.addImage(car4Image);
    
    cars = [car1, car2, car3, car4];
 }

 play(){
     form.hide();
     //textSize(30);
     //text("Game Start", 120, 100);
     Player.getPlayerInfo();
     //console.log(allPlayers);

     if(allPlayers !== undefined){
        background(rgb(198, 135, 103))
        image(trackImage, 0,-displayHeight*4, displayWidth, displayHeight*5)
        var x = 375;
        var y;
        var index = 0;

        for(var plr in allPlayers){
            index = index+1;
            x = x+250;
            y = displayHeight-allPlayers[plr].distance;
            console.log(y);
            cars[index-1].x = x;
            cars[index-1].y = y;
            console.log(player.index)
            if(index === player.index){
                stroke(10);
                fill("RED");
                ellipse(x,y,60,60);
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
            }
            //display_position += 20;
            //textSize(15); 
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position);
        }
    }
 if(keyIsDown(UP_ARROW) && player.index !== null){
     player.distance += 50;
     player.update();
 }
 if(player.distance >5250){
     gameState = 2;
 }

 drawSprites();

 }

 end(){
    console.log("GAME ENDS");

 }
}
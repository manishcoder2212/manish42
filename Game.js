class Game{

constructor(){
}

getGameState (){
    var  databaseAgent  = database.ref('gameState');
    databaseAgent .on("value",function(data){
     proGameState = data.val();
    })
   
  }
                          
  
   updateGameState (m){

    database.ref('/').update({

     gameState : m
    });

  }
 

  async start(){
    if(proGameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        proplayerCount = playerCountRef.val();
        player.getplayerCount ();
      }
      form = new Form()
      form.show();
    }
car1=createSprite(350,600);
car1.addImage(car1i);

car2=createSprite(550,600);
car2.addImage(car2i);

car3=createSprite(700,600);
car3.addImage(car3i);

car4=createSprite(850,600);
car4.addImage(car4i);

cars=[car1,car2,car3,car4];
  





  }


  play(){

    player.getPlayer();
    if (allPlayer!==undefined){
      background("brown")
      image(track,100,-2400,1000,3000)
      
      var distx =150 
      var disty
      var a=0 
      


         for(var p in allPlayer){
          a=a+1
          distx=distx+200
          disty=600-allPlayer[p].distance  
            cars[a-1].x=distx
            cars[a-1].y=disty
        

           /*if (a==player.index){
              camera.position.x=0
              camera.position.y=cars[a-1].y
            }*/
         }

        }

      if(keyIsDown (UP_ARROW)){
        player.distance+=10
       player.updatePlayer();
  
        }


    

    drawSprites()


  }
    
}
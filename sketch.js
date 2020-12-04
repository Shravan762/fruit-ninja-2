var knife
var knife1
var PLAY=1
var END=0
var gameState=1
var  fruitGroup,enemyGroup
var fruit
var monster
var score=0


function preload(){
  knife=loadImage("sword.png")
  
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  
  monsterImage=loadAnimation("alien1.png","alien2.png")
  gameOverImage = loadImage("gameover.png")
  
  knifesound=loadSound("knifeSwooshSound.mp3")

  gameover=loadSound("gameover.mp3")
                       
  
}

function setup(){
  createCanvas(700,600)
  
  
  knife1=createSprite(300,300)
  knife1.addImage(knife);
  knife1.scale=0.6
  
  fruitGroup=new Group()
  enemyGroup=new Group()
}
function draw(){
   background("pink")
  knife1.x=World.mouseX
  knife1.y=World.mouseY
  

  
if(gameState===PLAY){
      fruits();
  enemy();
  if(fruitGroup.isTouching(knife1)){
    fruitGroup.destroyEach();
    score=score+2;
    knifesound.play()
  
  }
  else 
    {
   if(enemyGroup.isTouching(knife1)){
     
        gameState=END;
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
       fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
    knife1.addImage(gameOverImage);
        knife1.x=200;
        knife1.y=200;
     gameover.play()
   
   }
  

    }
  
}
drawSprites();
                             
}

function fruits(){
  if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20)
 fruit.scale=0.2
    r=Math.round(random(1,4))
      if(r==1){
        fruit.addImage(fruit1)
      }else if (r==2){
        fruit.addImage(fruit2)
      }else if(r==3){
        fruit.addImage(fruit3)
      }else if(r==4){
        fruit.addImage(fruit4)
      }
    fruit.y=Math.round(random(50,340))
    fruit.velocityX=-10
    fruit.setLifetime=100
    fruitGroup.add(fruit)
    position=Math.round(random(1,2))
    if (position==1){
      fruit.x=400
       if(score>4){
      fruit.velocityX=-(10+2)
    }
    }
     if (position==2){
       if(score>10){
      monster.velocityX=-15
      console.log(monster.velocityX)
    }
     }
    
   }
}

function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8
    monster.setLifetime=50
    
    enemyGroup.add(monster)
  }
}


var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","1164b93a-ce5c-42f7-8bd0-afede9f6b665","5c8f68ad-8417-42ce-948f-3c0ccab78eac","d8e43cfc-0448-43c9-90e1-d0e594bd7e71","c35278f7-0bb6-4445-8fc3-2385039f748f"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"OsaMTk_KTHeLAkSsyabTg21Wrk40oyCd","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z0Ojv3zOgHY209aYJf8MWUNZKT5RmWth","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"wQ5bbEZWaeyaG2FUP_g33rFvML0bDNa3","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"1164b93a-ce5c-42f7-8bd0-afede9f6b665":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"},"5c8f68ad-8417-42ce-948f-3c0ccab78eac":{"name":"continuous_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33k01iEf_qdIHwV2rQ3lCAQ4NtEvQopS/category_backgrounds/continuous_grass.png"},"d8e43cfc-0448-43c9-90e1-d0e594bd7e71":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"c35278f7-0bb6-4445-8fc3-2385039f748f":{"name":"park_view_1","sourceUrl":"assets/api/v1/animation-library/gamelab/84NrqToYiIzJG2xPvFfZnE.LnXJ.iUWx/category_backgrounds/park_view.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"84NrqToYiIzJG2xPvFfZnE.LnXJ.iUWx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/84NrqToYiIzJG2xPvFfZnE.LnXJ.iUWx/category_backgrounds/park_view.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create a trex sprite


//create a ground sprite
var ground = createSprite(350,200,400,20);
ground.setAnimation("park_view_1");
ground.scale = 2;
console.log(ground.width);
//invisible Ground to support Trex
var invisibleGround = createSprite(200,315,400,5);

invisibleGround.visible = false;

var monkey = createSprite(200,250,20,50);
monkey.setAnimation("monkey");
var monkeyg = createGroup();
monkeyg.add(monkey);

//set collision radius for the trex
monkey.setCollider("circle",0,0,30);

//scale and position the monkey 
monkey.scale = 0.25;
monkey.x = 50;
//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var BananaGroup = createGroup();

monkey.depth = ground.depth;
monkey.depth = monkey.depth+1;

//score
var count = 0;

function draw() {
  //set background to white
  background("white");
  //display score
  var score = text("Score: "+ count, 250, 100);
  console.log(gameState);
  
monkey.collide(invisibleGround);

  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count = count+Math.round(World.frameRate/60);
    
    if (count>0 && count%100 === 0){
      playSound("checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = 300;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && monkey.y >= 300){
      monkey.velocityY = -17 ;
    }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    //to make the game end if the monkey hits an obstacle
    if(ObstaclesGroup.isTouching(monkeyg)) {
      gameState = END;
    }
    
    if(monkeyg.isTouching(BananaGroup)) {
      BananaGroup.destroyEach();
      monkey.scale = monkey.scale + 0.01;
    }
    
    //spawn the clouds
    spawnBanana();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when monkey is touching the obstacle
    
  }
  
  else if(gameState === END) {
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    BananaGroup.setLifetimeEach(-1);
    
    
  }

  
  //console.log(trex.y);
  
  //stop trex from falling down
 
  
  drawSprites();
}


function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.8;
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.25;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(130,180);
    banana.setAnimation("Banana");
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale = 0.08;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    
    //add each cloud to the group
    BananaGroup.add(banana);
  }
  
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

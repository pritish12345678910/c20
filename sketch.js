var fixedrect,movingrect;




function setup() {
  createCanvas(800,400);
 fixedrect =createSprite(400, 200, 50, 50);
 fixedrect . shapeColor="orange"
 movingrect= createSprite(600,200,80,50);
 movingrect.shapeColor = "black";
}
function draw() {


  background(255,255,255);  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 
  &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow"
}
else{
  fixedrect . shapeColor="orange"
  movingrect.shapeColor = "black";
}



  drawSprites();
}
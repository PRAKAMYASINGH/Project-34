//The variables of my App...
var dog,happyDog,database,foodS,foodStock;

//loading the  images of my app here...
function preload(){
  dog=loadImage("Dog.png")
  happydogIMG2=loadImage("happydog.png")
}

// Creating the sprites and canvas in the setup...
function setup() {
  createCanvas(500, 500);
  
  Dog=createSprite(120,200,20,20);
  Dog.addImage(dog)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}

// The draw function for the controls...
function draw() {
  background(46,139,87)  

// the controls of the app...
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happydog)
}

  drawSprites();
  
}

//Function to read the values from database...
function  readStock() {
  foodS=data.val();
}

//Function to write the values in  database...
function  writeStock(x) {
if(x<=0) {
  x=0
}else{
  x=x-1;
}
  database.ref('/').update({
  Food:x
})
}






var bouncer = 250;
var speed1 = 2;
var speed2 = 3;
var petalMoves = [];
var buzz = [];

var flwr = {
  y: 100,
  z: 200,
  x: 250,
  q: 225
}

//Create square canvas to start with
//iterate through petalMoves array once
function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 1; i++) {
    petalMoves[i] = new Petal();
  }
  for (var j = 0; j < 1; j++) {
    buzz[i] = new BumbleBee();
  }
}

//changes color of middle circle on mouse press
function mousePressed() {
  var colors = ["yellow", "red", "brown"];
  var colorChange = random(colors);
  fill(colorChange);
  middle();

}

function draw() {
  background('#BBDEF0') //draws the background
  //moves petals around from -1 through 1
  for (var i = 0; i < petalMoves.length; i++) { //iterates through petal moves array at index of i
    petalMoves[i].move(); //calls .move function at correct index
    petalMoves[i].display(); //calls .display function at correct index
  }
  
  for (var j = 0; j < buzz.length; j++) {
    buzz[i].create();
    buzz[i].beeMoves();
  }

  //moves circle from middle to bottom and back continuously 
  if ( bouncer <= 249 || bouncer >= 489) {
    speed1 *= -1;
  }
  bouncer = bouncer + speed1;

  middle();
}

function Petal() {
  this.moveOne = 300;
  this.moveTwo = 200;
  
  this.display = function() {
    //sets petal parameters
    fill('#F3A712');
    strokeWeight(2);
    stroke('#FABC3C'); 
    //creates petals
    ellipse(this.moveTwo, this.moveTwo, flwr.y, flwr.y); //left-top circle
    ellipse(this.moveOne, this.moveTwo, flwr.y, flwr.y); //right-top circle
    ellipse(this.moveTwo, this.moveOne, flwr.y, flwr.y); //left-bottom circle
    ellipse(this.moveOne, this.moveOne, flwr.y, flwr.y); //right-bottom circle

    //sets stem parameters
    stroke('#85AD8A');
    fill('#BEEDAA');
    //creates stem
    rect(245, 300, 10, 150); //stem
    //creates bouncing leaf
    ellipse(bouncer - 50, bouncer, 50, 20); //leaf
  }
  
  //moves the x and y coordinates anywhere it is placed to move randomly from -1 to 1
  this.move = function() {
    this.moveOne = this.moveOne + random(-1, 1);
    this.moveTwo = this.moveTwo + random(-1, 1);
  }
}

//creates moving bumble bee
function BumbleBee() {
  this.beeX = 0;
  this.beeY = 90;
  
  this.create = function() {
    //sets bee parameters
    noStroke();
    fill('white'); 
    ellipse(this.beeX, this.beeY, 20, 60); //bee wing
    fill('yellow');
    ellipse(this.beeX, this.beeY, 50, 30); //bee body
    stroke('black');
    strokeWeight(15);
    line(this.beeX, this.beeY - 8, this.beeX, this.beeY + 8); //bee stripe
  }
  
  //makes bee move on mouse hover
  this.beeMoves = function() {
    if (mouseX >= this.beeX && mouseY >= this.beeY) {
      this.beeX += random(-2, 2);
      this.beeY += random(-5, 5);
    } else if (this.beeX > width || this.beeX < 0) {
      speed2 = -speed2;
    }
    this.beeX = this.beeX + speed2
  }
}

//increases size of middle circle
function middle() {
  var midCircW = 100;
  var midCircH = 50;
  var w = 10;
  
  for (var i = 0; i < 10; i++) {
    midCircW += i;
    midCircH += i;
  }
  //sets middle circle parameters
  stroke('#FF5f3F');
  fill('#F55536');
  strokeWeight(3);
  //creates middle circle
  ellipse(flwr.x, flwr.x, midCircW, midCircH); //middle circle
  //sets seed parameters
  noStroke(1);
  fill('brown');
  //draws seeds
  ellipse(250, 250, w, w); //seed1
  ellipse(200, 240, w, w); //seed2
  ellipse(250, 215, w, w); //seed3
  ellipse(300, 255, w, w); //seed4
  ellipse(225, 250, w, w); //seed5
  ellipse(275, 250, w, w); //seed6
  ellipse(250, 280, w, w); //seed7
  ellipse(215, 225, w, w); //seed8
  ellipse(215, 270, w, w); //seed9
  ellipse(280, 275, w, w); //seed10
  ellipse(280, 220, w, w); //seed11
  ellipse(270, 230, w, w); //seed12
}


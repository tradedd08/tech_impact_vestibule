//extra practice for fun, make a beautiful design :)

function setup() {
  createCanvas(500, 500); //set up canvas
  background('#004d4d');
}

var value = 0;

function draw() {
  fill('#ffccff');
  stroke('#00ffff');

  triangle(150, 100, 250, 10, 350, 100); //top triangle
  triangle(150, 400, 250, 490, 350, 400); //bottom triangle
  triangle(350, 100, 490, 250, 350, 400); //right triangle
  triangle(150, 100, 150, 400, 10, 250); //left triangle
  
  stroke('#b300b3');
  strokeWeight(1);
  fill('#73e600');
  ellipse(100, 250, 50, 50); //left circle
  ellipse(400, 250, 50, 50); //right circle
  ellipse(250, 70, 25, 25); //top circle
  ellipse(250, 450, 25, 25); //bottom circle
  
  stroke('#00ffff');
  strokeWeight(3);
  strokeJoin(round);
  line(150, 100, 350, 400); //first line
  line(350, 100, 150, 400); //second line
  
  stroke('#b300b3');
  strokeWeight(4);
  fill('#99ffcc')
  ellipse(250, 250, 100, 100); //middle circle
  
  stroke('#b300b3');
  fill('#99ffcc');
  //triangle(190, 60, 80, 70, 60, 190); //top-left triangle
  //triangle(450, 200, 430, 60, 310, 60); //top-right triangle

  //new additon today
  noStroke();
  fill('value');
  //rect(0, 0, 500, 500);
}

function mousePressed() {
  if (value == '0') {
    value = clear();
  } else {
    value = 0;
  }
}

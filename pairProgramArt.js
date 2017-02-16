//night sky, color and shape practice

function setup() {
  createCanvas(500, 500);
  background('black');
}

function draw(){
  //moon
  noStroke();
  fill('FFFFF0');
  ellipse(275, 200, 100, 100);
  fill('black');
  ellipse(250,200, 100,100);
  
  //stars 1-12
  fill('#F5F5DC'); //first batch - stars 1-3 
  ellipse(200, 100, 15, 15);
  ellipse(10, 80, 15, 15);
  ellipse(50, 100, 15, 15);  


  fill('#ffff99'); //second batch - stars 4-6 
  ellipse(25, 50, 15, 15);
  ellipse(50, 200, 10, 10);  
  ellipse(75, 150, 15, 15);  

  fill('#ffff99'); //third batch - stars 7-9
  ellipse(90, 70, 15, 15);
  ellipse(450, 350, 7, 9);
  ellipse(480, 380, 9, 13);
  
  fill('#FFFF00'); //fourth batch - stars 10-12
  ellipse(450, 300, 11, 12);
  ellipse(400, 350, 15, 15);
  ellipse(250, 100, 15, 15);
  
  //clouds 1-4
  fill('gray');
  noStroke();
  ellipse(50, 350, 100, 50); //cloud1
  ellipse(100, 375, 125, 75); //cloud2
  ellipse(200, 375, 103, 90); //cloud3
  ellipse(275, 350, 111, 50); //cloud4

  //plane
  fill('#d9d9d9');
  ellipse(260, 450, 40, 30);
  rect(270, 440, 50, 20);
  triangle(280, 460, 350, 420, 350, 460);
  stroke('black');
  line(200, 450, 460, 450);
  
  //rain lines 1-3
  stroke('blue');
  strokeWeight(1);
  line(20, 370, 10, 400);
  line(65, 410, 50, 440);
  line(120, 410, 150, 460);
  
  //planet
  stroke('#00ff00');
  strokeWeight(4);
  fill('#cc00cc');
  ellipse(450, 45, 50, 50);
  arc(450, 45, 80, 80,  PI + QUARTER_PI, OPEN);
}

var triangl = {
  x: 250, 
  y: 200,
  z: 100,
  creation: function() { //key (or name) value pairs can be functions!
    stroke('yellow');
    strokeWeight(4);
    //fill('green');
    triangle(this.x, this.y, 150, this.y, this.z, this.x); //can't say x, y here
  },
  move: function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-1, 2);
  }
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  triangl.move();
  triangl.creation(); //goes to display function on line 4-5
  
  if (mouseX > 150 && mouseY < 250) {
    fill('blue');
  }
  
}
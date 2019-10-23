let times = [];
let i = 0;

function setup() {
  createCanvas(400, 400);
  times[0] = new Time('#FFC0CB', 215);
  times[1] = new Time('#EE82EE', 210);
  times[2] = new Time('#800080', 205);
}

function draw() {
  
  background('#66CDAA');
  strokeWeight(4);
  fill(225);
  circle(325, 75, 100);
  fill('#F4A460');
  strokeWeight(2);
  ellipse(125, 400, 200, 225);
  fill(225);
  ellipse(125, 375, 40, 60);
  ellipse(175, 375, 40, 60);
  
  
  // origin as pivot point (pupils)
  push();
  translate(177, 361);
  // rotate around pivot point
  rotate(radians(frameCount));
  fill(0);
  circle(2, 9, 10);
  pop();
  
  // origin as pivot point (pupils)
  push();
  translate(127, 361);
  // rotate around pivot point
  rotate(radians(frameCount));
  fill(0);
  circle(2, 9, 10);
  pop();
  
  push();
  // move the origin to the pivot point (clock)
  translate(325, 75); 

  // then rotate the grid around the pivot point by a
  // number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount));

  // and draw the rectangle at the origin
  fill(0);
  rect(0, 0, 7, 40);
  pop();

  
  // increment i only every so often
  if (frameCount % 40 === 0){
    i++;
  }
  // reset i at end of array
  if (i === times.length){
    i = -1;
  }
  
  if (i == 0) {
    times[i].show(); 
  }
  if (i == 1) {
    times[0].show();
    times[i].show();
  } 
  if (i == 2) {
    times[0].show();
    times[1].show();
    times[2].show();
  }
  
}

class Time {
  constructor(c, y) {
    this.c = c;
    this.y = y;
  }
  
  show() {
    textSize(30);
    fill(this.c);
    text('TIME IS RUNNING OUT', 10, this.y);
  }
}
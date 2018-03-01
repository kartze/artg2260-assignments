let krabbypatty;
let krabbypatties = [];

function preload() {
  krabbypatty = loadImage('krabbypatty.png');
}

function setup() {
  var canvas = createCanvas(1100, 600);
  canvas.parent('sketch-box');
  for (let i = 0; i < 5; i++) {
    let scale = random(0.05, 0.3);
    let spinRate = random(-0.1, 0.1);
    let p = new Patty(random(width), random(height), scale, spinRate);
    krabbypatties.push(p);
  }
}

function draw() {
  background(0);
  for (p of krabbypatties) {
    p.update();
    p.display();
  }
}

class Plane {
  constructor(_x, _y, _scale, _rate) {
    this.x = _x;
    this.y = _y;
    this.scale = _scale;
    this.rate = _rate;
    this.angle = 0;
  }

  update() {
    this.angle += this.rate;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.scale);
    image(krabbypatty, 0, 0, width, height);
    pop();
  }
}
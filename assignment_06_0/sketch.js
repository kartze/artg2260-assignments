let krabbypatty;
let krabbypatties = [];

function preload() {
  sound = loadSound('song0.mp3');
  krabbypatty = loadImage('krabbypatty.png');
}

function setup() {
  var canvas = createCanvas(300, 300);
  canvas.parent('sketch-box');
  for (let i = 0; i < 5; i++) {
    let scale = random(0.05, 0.3);
    let spinRate = random(-0.1, 0.1);
    let p = new Patty(random(width), random(height), scale, spinRate);
    krabbypatties.push(p);
  }
  amplitude = new p5.Amplitude();
  sound.play();
}

function draw() {
  background(0);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200)
  for (p of krabbypatties) {
    p.sizing(size);
    p.update();
    p.display();
  }
}

class Patty {
  constructor(_x, _y, _scale, _rate) {
    this.x = _x;
    this.y = _y;
    this.scale = _scale;
    this.rate = _rate;
    this.angle = 0;
  }

  sizing(size) {
    this.scale = this.scale * size;
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

function mouseClicked() {
  sound.stop();
}
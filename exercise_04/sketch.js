let b;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-box');
  b = new Box();
}

function draw() {
  background(0);
  b.display();
  b.move();
  b.teleport();
}

class Box {
  constructor() {
    this.x = 175;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y--;
  }

  teleport() {
    if (this.y == 0) {
      this.y = 350;
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      fill(this.r, this.g, this.b);
    }
  }
}
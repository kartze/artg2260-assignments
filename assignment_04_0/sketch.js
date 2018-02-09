let num = 10;
let xPos;
let yPos = [];
let xSpeed = [];
let spots = [];

let img;
let imgWidth = 50;
let imgHeight = 50;

let gameState = 0;
let time = 1000;

function preload() {
  img = loadImage('mario.png');
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch-box');
  xPos = width / 2;
  for (let i = 0; i < num; i++) {
    yPos[i] = 25 + 50 * i;
    if (i % 2 == 0) {
      xSpeed[i] = random(1, 10);
    } else {
      xSpeed[i] = random(-10, -1);
    }
  }
}

function draw() {
  if (gameState == 0) {
    startScreen();
  } else if (gameState == 1) {
    update();
  } else if (gameState == 2) {
    gameOver(1);
  } else if (gameState == 3) {
    gameOver(2);
  }
}

function startScreen() {
  background(255);
  text("FROGGER", 100, 225);
  text("Click to Begin", 100, 245);
  for (let i = 0; i < num; i++) {
    spots[i] = new Spot(xPos, yPos[i], xSpeed[i]);
  }
}

function update() {
  background(255);
  for (let i = 0; i < spots.length; i++) { // Make a for() loop to loop through each Spot
    spots[i].move(); // Move each object
    spots[i].display(); // Display each object
    spots[i].check(); // Check for mouse overlap
  }

  checkTime();
  time--;

  fill(0);
  text("Playing", 10, 30);
  text("Time: " + time, 10, 90);
}

function gameOver(type) {
  background(255);
  fill(0);
  if (type == 1) {
    text("Frogger Got Hit!", 100, 225);
  } else if (type == 2) {
    text("Times Up!", 100, 225);
  }
  text("Game Over", 100, 245);
}

function mouseClicked() {
  if (gameState == 0) {
    gameState = 1;
  } else if (gameState == 2) {
    gameState = 0;
  } else if (gameState == 3) {
    gameState = 0;
  }
}

class Spot {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.img = img;
    this.width = 50;
    this.height = 50;
  }

  move() {
    this.x += this.speed;
    if (this.x - this.width >= width || this.x + this.width <= 0) {
      if (this.speed > 0) {
        this.x = 0;
      } else {
        this.x = width;
      }
    }
  }

  display() {
    fill(255);
    image(img, this.x, this.y, this.width, this.height);
  }

  check() {
    if (abs(this.x - mouseX) < this.width && abs(this.y - mouseY) < this.height) {
      gameState = 2;
    }
  }
}

function checkTime() {
  if (time <= 0) gameState = 3;
}
let num = 5;
let xPos = [];
let yPos = [];
let xSpeed = [];
let img;
let imgWidth = 30;
let imgHeight = 30;

let gameState = 0;
let score = 0;

function preload() {
  img = loadImage('mario.png');
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch-box');
  for (var i = 0; i < num; i++) {
    xPos[i] = width / 2;
    yPos[i] = 10 + 60 * i;
    xSpeed[i] = random(1, 10);
  }

  framerate = 20;
}

function draw() {
  if (gameState == 0) {
    startScreen();
  } else if (gameState == 1) {
    update();
  } else if (gameState == 2) {
    gameOver();
  }
}

function startScreen() {
  background(255);
  text("Click to Begin", 100, 300);
  spots = [];
  for (let i = 0; i < num; i++) { // Make a for() loop to create the desired number of Spots
    // Add an index [i] to create multiple Spots
    spots[i] = new Spot(xPos[i], yPos[i], xSpeed[i]);
  }
}

function update() {
  background(255);
  for (let i = 0; i < spots.length; i++) { // Make a for() loop to loop through each Spot
    spots[i].move(); // Move each object
    spots[i].display(); // Display each object
    spots[i].check(); // Check for mouse overlap
  }
  score++;
  text("Playing", 10, 30);
  text("Score: " + score, 10, 90);
}

function gameOver() {
  background(255);
  text("Game Over", 10, 30);
  text("Score: " + score, 10, 90);
}

function mouseClicked() {
  if (gameState == 0) {
    gameState = 1;
  } else if (gameState == 2) {
    gameState = 0;
  }
}

class Spot {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
  }

  move() {
    //    this.y += this.speed;
    //    if ((this.y > (height - this.diameter / 2)) || (this.y < this.diameter / 2)) {
    //      this.speed *= -1;
    //    }
    this.x += this.Speed;

    if (this.x + imgWidth >= width || this.x <= 0) {
      this.speed *= -1;
    }
  }

  display() {
    image(img, this.x, this.y, imgWidth, imgHeight);
  }

  check() {
    if (abs(this.x - mouseX) < imgWidth && abs(this.y - mouseY < imgHeight)) {
      gameState = 2;
    }
  }
}
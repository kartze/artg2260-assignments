let numCars = 10;
let xPos = [];
let yPos = [];
let xSpeed = [];
let maxSpeed = 7;
let cars = [];
let carWidth = 50;

let player1;
let playerWidth = 50;
let startXPos;
let startYPos;
let lives = 3;

let gamePieceHeight = 50; // same height for player and car gamepieces to maintain horizontal lines

let gameState = 0;
let time;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-box');

  startXPos = width / 2;
  startYPos = height - gamePieceHeight / 2;
}

function draw() {
  if (gameState == 0) {
    startScreen();
  } else if (gameState == 1) {
    update();
  } else if (gameState == 2) { // when player is dead
    gameOver(1);
  } else if (gameState == 3) { // when time is up
    gameOver(2);
  } else if (gameState == 4) {
    win();
  }
}

function startScreen() {
  background(255);
  text("CROSS THE ROAD", 100, 225);
  text("Click to Begin", 100, 245);

  for (let i = 0; i < numCars; i++) {
    // initializes properties of each car
    xPos[i] = random(0, width);
    yPos[i] = gamePieceHeight * (1.5 + i);
    if (i % 2 == 0) { // alternates car direction
      xSpeed[i] = random(1, maxSpeed);
    } else {
      xSpeed[i] = random(-maxSpeed, -1);
    }

    // creates each car
    cars[i] = new Car(xPos[i], yPos[i], xSpeed[i]);
  }

  player1 = new Player(startXPos, startYPos);

  time = 1000; // initializes countdown
}

function update() {
  background(255);

  for (let i = 0; i < numCars; i++) {
    cars[i].move();
    cars[i].display();
    cars[i].checkHit();
  }

  player1.display();
  player1.checkDead();
  player1.checkWin();

  checkTime();
  time--;

  fill(0);
  text("Time: " + time, 25, 20);
  text("Lives: " + player1.lives, 25, 35);
}

function checkTime() {
  if (time <= 0) gameState = 3; // time is up so game over
}

function gameOver(type) {
  background(255);
  fill(0);
  if (type == 1) {
    text("You're Dead!", 100, 225);
  } else if (type == 2) {
    text("Times Up!", 100, 225);
  }
  text("Game Over", 100, 245);
}

function win() {
  background(255);
  fill(0);
  text("You Win!", 100, 225);
  text("Play Again?", 100, 245);
}

function mouseClicked() {
  if (gameState == 0) {
    gameState = 1; // start to game
  } else if (gameState == 2 || gameState == 3 || gameState == 4) {
    gameState = 0; // game over to restart
  }
}

class Car {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.width = carWidth;
    this.height = gamePieceHeight;
  }

  move() {
    this.x += this.speed;
    if (this.x - this.width >= width || this.x + this.width <= 0) { // if car reaches wall
      if (this.speed > 0) { // right-direction car reaches right wall, restart at left wall
        this.x = 0;
      } else { // left-direction car reaches left wall, restart at right wall
        this.x = width;
      }
    }
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.width, this.height);
  }

  checkHit() {
    if (abs(player1.x - this.x) <= this.width / 2 + player1.width / 2 && this.y == player1.y) {
      player1.loseLife(); // player touches car so loses a life
      player1.reset();
    }
  }
}

class Player {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.width = playerWidth;
    this.height = gamePieceHeight;
    this.lives = lives;
  }

  move(direction) {
    if (direction == 1 && this.x < (width - this.width / 2)) {
      this.x += this.width;
    } else if (direction == 2 && this.x > this.width / 2) {
      this.x -= this.width;
    } else if (direction == 3 && this.y > this.height / 2) {
      this.y -= this.height;
    } else if (direction == 4 && this.y < (height - this.height / 2)) {
      this.y += this.height;
    }
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.width, this.height);
  }

  loseLife() {
    this.lives--;
  }

  reset() {
    this.x = startXPos;
    this.y = startYPos;
  }

  checkWin() {
    if (this.y == gamePieceHeight / 2) gameState = 4; // player reaches top wall so win
  }

  checkDead() {
    if (this.lives == 0) gameState = 2; // player is dead so game over
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player1.move(1);
  } else if (keyCode == LEFT_ARROW) {
    player1.move(2);
  } else if (keyCode == UP_ARROW) {
    player1.move(3);
  } else if (keyCode == DOWN_ARROW) {
    player1.move(4);
  }
}
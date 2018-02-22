let numCars = 10;
let minSpeed = 1;

let xPos1 = [];
let yPos1 = [];
let xSpeed1 = [];
let maxSpeed1 = 3;
let cars1 = [];

let xPos2 = [];
let yPos2 = [];
let xSpeed2 = [];
let maxSpeed2 = 3;
let cars2 = [];

let levelSpeedIncrease = 2; // how much speed increases each level

let player1;
let startXPos1;
let startYPos1;
let lives1 = 3;

let player2;
let startXPos2;
let startYPos2;
let lives2 = 3;

let playerWidth = 50;
let carWidth = 50;
let gamePieceHeight = 50; // same height for player and car gamepieces to maintain horizontal lines

let gameState = 0;
// let time;
let level;
let level2;

function setup() {
  var canvas = createCanvas(1200, 600);
  canvas.parent('sketch-box');

  startXPos1 = width / 4;
  startYPos1 = height - gamePieceHeight / 4;

  startXPos2 = 3 * width / 4;
  startYPos2 = 3 * (height - gamePieceHeight) / 4;
}

function draw() {
  if (gameState == 0) {
    startScreen();
  } else if (gameState == 1) {
    update();
  } else if (gameState == 2) { // when player is dead
    gameOver(1);
  } else if (gameState == 4) { // when player2 is dead
    gameOver(3);
  }
  // else if (gameState == 3) { // when time is up
  //  gameOver(2);
  // }
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) { // if player clicks inside game canvas
    // add listener to disable scroll
    window.addEventListener('scroll', noscroll);

    if (gameState == 0) {
      gameState = 1; // start to game
    } else if (gameState == 2 || gameState == 3 || gameState == 4) {
      maxSpeed1 = 3; // reset speed
      maxSpeed2 = 3; // reset speed
      gameState = 0; // game over to restart
    }
  } else {
    // Remove listener to disable scroll
    window.removeEventListener('scroll', noscroll);
  }
}

function noscroll() {
  canvas.scrollIntoView();
}

function startScreen() {
  background(255);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width / 2, 0, width / 2, height);
  line(width - 1, height, width - 1, 0);
  line(width, height - 1, 0, height - 1);
  text("CROSS THE ROAD", 100, 225);
  text("Click to Begin", 100, 245);

  player1 = new Player(startXPos1, startYPos1, lives1, startXPos1);
  player2 = new Player(startXPos2, startYPos2, lives2, startYPos2);
  createCars1();
  createCars2();

  //  time = 1000; // initializes countdown
  level1 = 1;
  level2 = 1;
}

function createCars1() {
  for (let i = 0; i < numCars; i++) {
    // initializes properties of each car
    xPos11[i] = random(0, width / 2);
    yPos11[i] = gamePieceHeight * (1.5 + i);
    if (i % 2 == 0) { // alternates car direction
      xSpeed1[i] = random(minSpeed, maxSpeed1);
    } else {
      xSpeed1[i] = random(-maxSpeed1, -minSpeed);
    }
    // creates each car
    cars1[i] = new Car(xPos1[i], yPos1[i], xSpeed1[i]);
  }
}

function createCars2() {
  for (let i = 0; i < numCars; i++) {
    // initializes properties of each car
    xPos2[i] = random(0, width / 2) + width / 2;
    yPos2[i] = gamePieceHeight * (1.5 + i);
    if (i % 2 == 0) { // alternates car direction
      xSpeed2[i] = random(minSpeed, maxSpeed2);
    } else {
      xSpeed2[i] = random(-maxSpeed2, -minSpeed);
    }
    // creates each car
    cars2[i] = new Car(xPos2[i], yPos2[i], xSpeed2[i]);
  }
}

function update() {
  background(255, 280 - level * 25, 280 - level * 25);
  fill(0);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width / 2, 0, width / 2, height);
  line(width - 1, height, width - 1, 0);
  line(width, height - 1, 0, height - 1);
  text("Level: " + level1, 525, 20);
  // text("Time: " + time, 25, 20);
  text("Lives: " + player1.lives, 25, 20);
  text("Level: " + level2, 525 + width / 2, 20);
  // text("Time: " + time, 25, 20);
  text("Lives: " + player2.lives, 25 + width / 2, 20);

  player1.display();
  player1.checkDead();
  player1.checkWin();

  player2.display();
  player2.checkDead();
  player2.checkWin();

  for (let i = 0; i < numCars; i++) {
    cars1[i].move();
    cars1[i].display();
    cars1[i].checkHit();
  }

  for (let i = 0; i < numCars; i++) {
    cars2[i].move();
    cars2[i].display();
    cars2[i].checkHit();
  }

  //  checkTime();
  //  time--;
}

class Player {
  constructor(_x, _y, lives, startXPos, startYPos) {
    this.x = _x;
    this.y = _y;
    this.width = playerWidth;
    this.height = gamePieceHeight;
    this.lives = lives;
    this.startXPos = _startXPos, _startYPos;
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.width, this.height);
  }

  move(direction) {
    if (direction == 1 && this.x < (width - this.width / 2)) { // move right but if you're not already at the right wall
      this.x += this.width;
    } else if (direction == 2 && this.x > this.width / 2) { // move left but if you're not already at the left wall
      this.x -= this.width;
    } else if (direction == 3 && this.y > this.height / 2) { // move up but if you're not already at the top wall
      this.y -= this.height;
    } else if (direction == 4 && this.y < (height - this.height / 2)) { // move down but if you're not already at the bottom wall
      this.y += this.height;
    }
  }

  loseLife() {
    this.lives--;
  }

  reset() {
    this.x = this.startXPos;
    this.y = this.startYPos;
  }

  checkWin() {
    if (this.y == gamePieceHeight / 2) levelUp(); // player reaches top wall so next level
  }

  checkDead() {
    if (this.lives == 0) gameState = 2; // player is dead so game over
  }
}

function levelUp() {
  time = 1000; // re-initializes countdown
  level++;
  player1.lives = 3;
  player1.reset();
  //	minSpeed+= levelSpeedIncrease; // increase speed next level
  maxSpeed += levelSpeedIncrease; // increase speed next level
  createCars();
  gameState = 1;
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

class Car {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.width = carWidth;
    this.height = gamePieceHeight;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.width, this.height);
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

  checkHit() {
    if (abs(player1.x - this.x) <= this.width / 2 + player1.width / 2 && this.y == player1.y) {
      player1.loseLife(); // player touches car so loses a life
      player1.reset();
    }
  }
}

function checkTime() {
  if (time <= 0) gameState = 3; // time is up so game over
}

function gameOver(type) {
  background(255, 280 - level * 25, 280 - level * 25);
  line(0, 0, width, 0);
  line(0, 0, 0, height);
  line(width - 1, height, width - 1, 0);
  line(width, height - 1, 0, height - 1);
  fill(0);
  if (type == 1) {
    text("You're Dead!", 100, 225);
  } else if (type == 2) {
    text("Times Up!", 100, 225);
  }
  text("Game Over", 100, 245);
  text("Level: " + level, 100, 265);
}
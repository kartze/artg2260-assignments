// declare variables xPos and yPos
var xPos;
var yPos;

var xSpeed; // declare a var called xSpeed;
var ySpeed; // declare a var called ySpeed
var img; // declare a variable called img
var imageWidth = 40; // declare a var for image width, assign 40
var imageHeight = 30; // declare a var for image height, assign 30

// use the preload()function to load an image,
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there
function preload() {
  img = loadImage('mario.png');
}

function setup() {
  var canvas = createCanvas(500, 500); // create a canvas at least 400 x 400
  canvas.parent('sketch-box');
  xPos = width / 2; // set xPos to be half of the width
  yPos = height / 2; // set yPos to be half of the height

  // assign xSpeed and ySpeed
  // with random values between 1 and 10
  xSpeed = random(1, 10);
  ySpeed = random(1, 10);
}

function draw() {
  background(0); // set the background to black

  // draw the image at the (xPos, yPos) coordinate,
  // using the template image(img, xPos, yPos, width, height)
  image(img, xPos, yPos, imageWidth, imageHeight);

  xPos += xSpeed; // add the xSpeed to xPos
  yPos += ySpeed; // add the ySpeed to yPos

  // if we reach the edge of the canvas
  // turn around (toggle xSpeed negative to positive)
  if (xPos + imageWidth / 2 >= width || xPos - imageWidth / 2 <= 0) {
    xSpeed *= -1;
  }
  // same as above, toggle ySpeed if we hit the top or bottom
  if (yPos + imageHeight / 2 >= height || yPos - imageHeight / 2 <= 0) {
    ySpeed *= -1;
  }
}
// declare variables xPos and yPos
var xPos1;
var yPos1;

var xSpeed1; // declare a var called xSpeed;
var ySpeed1; // declare a var called ySpeed
var img1; // declare a variable called img

// declare variables xPos and yPos
var xPos2;
var yPos2;

var xSpeed2; // declare a var called xSpeed;
var ySpeed2; // declare a var called ySpeed
var img2; // declare a variable called img

var imageWidth = 100; // declare a var for image width, assign 40
var imageHeight = 100; // declare a var for image height, assign 30

// use the preload()function to load an image,
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there
function preload() {
  img1 = loadImage('mario.png');
  img2 = loadImage('luigi.png');
}

function setup() {
  var canvas = createCanvas(500, 500); // create a canvas at least 400 x 400
  canvas.parent('sketch-box');
  xPos1 = width / 2; // set xPos to be half of the width
  yPos1 = height / 2; // set yPos to be half of the height
  xPos2 = width / 2; // set xPos to be half of the width
  yPos2 = height / 2; // set yPos to be half of the height

  // assign xSpeed and ySpeed
  // with random values between 1 and 10
  xSpeed1 = random(11, 20);
  ySpeed1 = random(11, 20);

  // assign xSpeed and ySpeed
  // with random values between 1 and 10
  xSpeed2 = random(11, 20);
  ySpeed2 = random(11, 20);
}

function draw() {
  background(0); // set the background to black

  // draw the image at the (xPos, yPos) coordinate,
  // using the template image(img, xPos, yPos, width, height)
  tint(255, 191); // apply 75% transparency
  image(img1, xPos1, yPos1, imageWidth, imageHeight);

  xPos1 += xSpeed1; // add the xSpeed to xPos
  yPos1 += ySpeed1; // add the ySpeed to yPos

  // if we reach the edge of the canvas
  // turn around (toggle xSpeed negative to positive)
  if (xPos1 + imageWidth >= width || xPos1 <= 0) {
    xSpeed1 *= -1;
  }
  // same as above, toggle ySpeed if we hit the top or bottom
  if (yPos1 + imageHeight >= height || yPos1 <= 0) {
    ySpeed1 *= -1;
  }

  // draw the image at the (xPos, yPos) coordinate,
  // using the template image(img, xPos, yPos, width, height)
  tint(255, 191); // apply 75% transparency
  image(img2, xPos2, yPos2, imageWidth, imageHeight);

  xPos2 += xSpeed2; // add the xSpeed to xPos
  yPos2 += ySpeed2; // add the ySpeed to yPos

  // if we reach the edge of the canvas
  // turn around (toggle xSpeed negative to positive)
  if (xPos2 + imageWidth >= width || xPos2 <= 0) {
    xSpeed2 *= -1;
  }
  // same as above, toggle ySpeed if we hit the top or bottom
  if (yPos2 + imageHeight >= height || yPos2 <= 0) {
    ySpeed2 *= -1;
  }
}

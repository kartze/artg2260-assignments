var weight = 1;
var menuOpen = false;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-box');
  background(0);

  stroke(255);
}

function draw() {
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  if (key == 'w' || key == 'W') {
    stroke(255);
  } else if (key == 'a' || key == 'A') {
    stroke(255, 0, 0);
  } else if (key == 's' || key == 'S') {
    stroke(0, 255, 0);
  } else if (key == 'd' || key == 'D') {
    stroke(0, 0, 255);
  } else if (key == 'x') {
    saveCanvas();
  } else if (keyCode == UP_ARROW) {
    weight++;
    strokeWeight(weight);
  } else if (keyCode == DOWN_ARROW) {
    weight /= 2;
    strokeWeight(weight);
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    background(0);
  }
  // else if (key == ' ') {
  //  if (menuOpen == false) {
  //    menuOpen = true;
  //    openMenu();
  //  } else if (menuOpen == true) {
  //    menuOpen = false;
  //    openMenu();
  //  }
  //}
}

function openMenu() {
  if (menuOpen == false) {
    noStroke();
    fill("black");
    rect(50, 350, 301, 50);
    fill("white")
      .strokeWeight(0)
      .textSize(12);
    text('see keys - SPACEBAR', 270, 390);
  }
  if (menuOpen == true) {
    noStroke();
    fill("black");
    rect(50, 350, 400, 50);
    fill("white");
    rect(50, 350, 300, 50);
    fill("black")
      .strokeWeight(0)
      .textSize(12);
    text('b - blue', 60, 370);
    text('c - green', 60, 390);
    text('m - magenta', 120, 370);
  }
}
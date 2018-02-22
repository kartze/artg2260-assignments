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
  if (key == 'x' || key == "X") {
    saveCanvas("myMasterpiece", "jpg");
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
  } else if (keyCode == UP_ARROW) {
    weight++;
    strokeWeight(weight);
  } else if (keyCode == DOWN_ARROW) {
    weight /= 2;
    strokeWeight(weight);
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    background(0);
  } else if (key == ' ') {
    if (menuOpen == false) {
      menuOpen = true;
      openMenu();
    } else if (menuOpen == true) {
      menuOpen = false;
      openMenu();
    }
  }
}

function openMenu() {
  if (menuOpen == false) {
    noStroke();
    fill("black");
    rect(50, 330, 301, 70);
    fill("white")
      .strokeWeight(0)
      .textSize(12);
    text('see key controls - SPACEBAR', 230, 390);
  }
  if (menuOpen == true) {
    noStroke();
    fill("black");
    rect(50, 330, 400, 70);
    fill("white");
    rect(50, 330, 300, 70);
    fill("black")
      .strokeWeight(0)
      .textSize(12);
    text('w - white', 70, 350);
    text('↑ - thicker brush', 70, 370);
    text('↓ - thinner brush', 210, 370);
    text('⌫ / DELETE - reset', 70, 390);
    text('x - save as jpg', 210, 390);
    fill("red");
    text('a - red', 140, 350);
    fill("orange");
    text('s - yellow', 210, 350);
    fill("blue");
    text('d - blue', 280, 350);
  }
}
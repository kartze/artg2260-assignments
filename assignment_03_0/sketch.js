function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('sketch-box');
}

function draw() {
  fill(255, 5);
  rect(0, 0, width, height);

  transparency();
  lines();
}

function transparency() {
  var t = map(mouseX, 0, width, 0, height);
  stroke(0, 100, 200, t);
}

function lines() {
  for (var i = 0; i < 400; i++) {
    var r = random(10);
    strokeWeight(r);

    var x = (frameCount + random(-i, i)) % width;
    var y = i * 10;
    line(250, 250, x, y);
  }
}
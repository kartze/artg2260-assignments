function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-box');
  background(0);

  stroke(255);
  noFill();
  for (var x = 0; x < 500; x += 50) {
    for (var y = 0; y < 500; y += 50) {
      if (y % 100) {
        fill((x + y) * 30, (x + y) * 0.65, (x + y) * 0.45);
        noStroke();
        triangle(x - 25, y, x - 25, y + 50, x, y + 25);
        rect(x - 50, y + 12.5, 25, 25);
      } else {
        fill((x + y) * 0.45, (x + y) * 0.65, (x + y) * 30);
        noStroke();
        triangle(x - 25, y, x - 25, y + 50, x, y + 25);
        rect(x - 50, y + 12.5, 25, 25);
      }
    }
  }
}
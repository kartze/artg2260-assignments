function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-box');
  background(0);

  stroke(255);
  noFill();
  for (var x = -50; x < 400; x += 50) {
    for (var y = 0; y < 400; y += 50) {
      if (y % 100) {
        fill((x + y) * 30, (x + y) * 0.65, (x + y) * 0.45);
        triangle(x, y, x + 50, y, x + 25, y + 50);
      } else {
        fill((x + y) * 0.45, (x + y) * 0.65, (x + y) * 30);
        triangle(x + 25, y, x + 75, y, x + 50, y + 50);
      }
    }
  }
}
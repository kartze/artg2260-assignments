function setup() {
	createCanvas(300, 400);
	background(230, 230, 30);

  fill(200);
	triangle(50, 350, 150, 16, 45, 100);

	fill(30, 40, 250);
	rect(30, 40, 20, 30);

	fill(0, 255, 200, 127);
	ellipse(90, 140, 60, 60);

	fill(255, 0, 0);
	bezier(100, 100, 60, 60, 200, 100, 40, 30);
}

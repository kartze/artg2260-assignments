var c1, c2;

function setup() {
	var canvas = createCanvas(400, 400);
	canvas.parent('sketch-box');
	c1 = color(66, 134, 244);
	c2 = color(255, 195, 160);
}

function draw() {
	// sky background
		setGradient(0, 0, 400, 250, c1, c2);

		// sun
		fill(255, 250, 0);
		noStroke();
		ellipse(330, 100, 70, 70);

		// dune 1 background
		fill(107, 100, 66);
		noStroke();
		ellipse(350, 350, 700, 300);

		// dune 2 background
		fill(153, 141, 102);
		noStroke();
		beginShape();
			vertex(0, 200);
			bezierVertex(160, 260, 35, 270, 900, 350);
			vertex(500, 300);
			vertex(400, 400);
			vertex(0, 400);
		endShape();

		// cacti
		fill(57, 96, 21);
		noStroke();
		beginShape();
			vertex(100, 320);
			bezierVertex(20, 0, 80, 75, 130, 350);
		endShape();

		// cacti arms
		ellipse(100, 200, 50, 30);
		ellipse(70, 200, 50, 30);

		// sand foreground
		fill(237, 227, 144);
		noStroke();
		beginShape();
			vertex(0, 300);
			bezierVertex(160, 260, 35, 270, 900, 350);
			vertex(400, 300);
			vertex(400, 400);
			vertex(0, 400);
		endShape();
	}

	// how to create linear gradient
	// from https://p5js.org/examples/color-linear-gradient.html
	function setGradient(x, y, w, h, c1, c2) {
	    for (var i = y; i <= y+h; i++) { // move down the canvas
	      var inter = map(i, y, y+h, 0, 1);
	      var c = lerpColor(c1, c2, inter); // creates blended colour using lerpColor()
	      stroke(c); // set color to current blended colour
	      line(x, i, x+w, i); // draw a thin, horizontal line
	  }
	}

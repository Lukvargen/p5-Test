

function setup() {
	createCanvas(windowWidth, windowHeight);
	//cnv.mousePressed(pressed = true)
	for (var x = 0; x <= windowWidth; x += 32){
		for (var y = 0; y<= windowHeight; y += 32){
			fill(255, 0, 30)
			ellipse(x,y,32,32)
		}
	}


}

function draw() {
	
	fill(255, 255, 255);
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 50, 50);
	}


}
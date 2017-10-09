
var created = 0;
var increment = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	reset();


}

function draw() {

	if (mouseIsPressed) {
		fill(created, created, created);
		ellipse(mouseX, mouseY, 50, 50);
		created += increment;
		if (created == 255 || created == 0){
			increment *= -1;
		}
	}


}

function keyPressed(){
	reset()
}

function reset(){
	background(0,0,0);
	//cnv.mousePressed(pressed = true)
	for (var x = 0; x <= windowWidth; x += 16){
		for (var y = 0; y<= windowHeight; y += 16){
			fill(100, 100, 100)
			ellipse(x,y,32,32)
		}
	}
}
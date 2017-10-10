var heightProcent = 0.0

var created = 0;
var increment = 1;
var sideMargin = 200;


var buttonMargin = 10;
var buttonWidth = 180;
var buttonHeight = 50;


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	reset();
	// UI

}

function draw() {


	if (mouseIsPressed) {
		heightProcent = (mouseY / windowHeight)
		//noStroke();
		smooth();
		//fill(created, created, created);
		fill(255 * heightProcent)
		print (heightProcent + "asdasd" + 0/windowHeight * 1.0)
		ellipse(mouseX, mouseY, 50, 50);
		created += increment;
		if (created == 255 || created == 0){
			increment *= -1;
		}
	}

	fill(50,50,50);
	rect(0, 0, sideMargin, windowHeight);
	
	fill(10,123,123);
	rect(buttonMargin, buttonMargin, buttonWidth, buttonHeight);

}

function keyPressed(){
	reset()
}

function reset(){
	clear();
	background(10,10,10);
	fill(10,123,123);
	rect(sideMargin, 0, windowWidth - sideMargin, windowHeight);

	


	//cnv.mousePressed(pressed = true)
	/*
	for (var x = 0; x <= windowWidth; x += 16){
		for (var y = 0; y<= windowHeight; y += 16){
			fill(100, 100, 100)
			ellipse(x,y,32,32)
		}
	}
	*/
}

function mousePressed(){
	// top left button
	if (mouseX > buttonMargin && mouseX < buttonMargin + buttonWidth &&
		mouseY > buttonMargin && mouseY < buttonMargin + buttonHeight){
		print("Clicked")
	}
}


function createButton(x, y, w, h){

}
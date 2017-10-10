var myColor = (0);
var img;
var colorPickerArea;
var colorPickerDefaultSize = 200;
var colorPickerSize = 300;
var choosingColor = false;


var heightProcent = 0.0

var created = 0;
var increment = 1;
var sideMargin = 200;


var buttonMargin = 10;
var buttonWidth = 180;
var buttonHeight = 50;

var doStroke = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	img = loadImage("colorpicker.jpg");
	//img = createImage("https://cdn.tutsplus.com/active/uploads/legacy/tuts/008_colorPicker/Tutorial/8.jpg")
	
	reset();
	// UI

}

function draw() {
	strokeWeight(1);


	/*if (mouseIsPressed) {
		heightProcent = (mouseY / windowHeight)
		//noStroke();
		smooth();

		if (doStroke){
			stroke(0,0,0);
		} else{
			noStroke();
		}



		//fill(created, created, created);
		fill(255 * heightProcent)
		print (heightProcent + "asdasd" + 0/windowHeight * 1.0)
		ellipse(mouseX, mouseY, 50, 50);
		created += increment;
		if (created == 255 || created == 0){
			increment *= -1;
		}
	}*/

	fill(50,50,50);
	rect(0, 0, sideMargin, windowHeight);
	
	fill(10,123,123);
	rect(buttonMargin, buttonMargin, buttonWidth, buttonHeight);
	

	
	if (mouseX > 0 && mouseX < colorPickerArea &&
		mouseY > windowHeight - colorPickerArea && mouseY < windowHeight){

		image(img, 0, windowHeight - colorPickerSize, colorPickerSize, colorPickerSize);
		colorPickerArea = colorPickerSize;
		choosingColor = true;
	} else {
		image(img, 0, windowHeight - colorPickerDefaultSize, colorPickerDefaultSize, colorPickerDefaultSize);
		colorPickerArea = colorPickerDefaultSize;
		choosingColor = false;
	}

	


}

function keyPressed(){
	reset()
}

function reset(){
	clear();
	background(10,10,10);
	fill(10,123,123);
	rect(sideMargin, 0, windowWidth - sideMargin, windowHeight);
	colorPickerArea = colorPickerDefaultSize;

	


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
		print("Clicked");
		myColor = get(mouseX, mouseY)

		doStroke = !doStroke;
	}

	if (choosingColor){
		myColor = get(mouseX, mouseY)
	}



}

function touchMoved() {

	
	strokeWeight(20);
	stroke(myColor);
	line(mouseX, mouseY, pmouseX, pmouseY);

	return false;
}


function createButton(x, y, w, h){

}




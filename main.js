
// Create canvas variable
canvas= new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
ball_x = 50;
ball_y = 50;

hole_x= 950;
hole_y= 450;

block_image_width = 5;
block_image_height = 5;

ball_img = "";
hole_img = "";
function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_img = Img;
		
		hole_img.scaleToWidth(60);
		hole_img.scaleToHeight(60);
		hole_img.set({
		top:hole_y,
		left: hole_x
		});
		canvas.add(hole_img);
		});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img) {
ball_img = Img;

ball_img.scaleToWidth(60);
ball_img.scaleToHeight(60);
ball_img.set({
top:ball_y,
left: ball_x
});
canvas.add(ball_img);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if(ball_x==hole_x&&ball_y==hole_y) {
		document.getElementById("hd3").innerHTML = "YOU HAVE HIT THE GOAL!!!!!!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >= 5) {
			ball_y = ball_y - block_image_height;
console.log("block_image_height indeed happens to be quite the same as" + block_image_height);
console.log("When up is pressed upon, the x is " + ball_x + " and then the y is " + ball_y);
canvas.remove(ball_img);
new_image();
		}
	}

	function down()
	{
		if(ball_y<=1050) {
		 ball_y = ball_y + block_image_height;
console.log("block_image_height indeed happens to be quite the same as" + block_image_height);
console.log("When down is pressed upon, the x is " + ball_x + " and then the y is " + ball_y);
canvas.remove(ball_img);
new_image();
	}
	}
	function left()
	{
	
			// Write a code to move ball left side.
			if(ball_x>=5) {
				ball_x = ball_x - block_image_width;
	   console.log("block_image_width indeed happens to be quite the same as" + block_image_width);
	   console.log("When left is pressed upon, the x is " + ball_x + " and then the y is " + ball_y);
	   canvas.remove(ball_img);
	   new_image();
		   }
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + block_image_width;
			console.log("block_image_width indeed happens to be quite the same as" + block_image_width);
			console.log("When right is pressed upon, the x is " + ball_x + " and then the y is " + ball_y);
			canvas.remove(ball_img);
			new_image();
		}
	}
	


function tryAgain() {
	ball_y = 50;
	ball_x= 50;

	document.getElementById("hd3").innerHTML = "Hit The Goal";
	document.getElementById("myCanvas").style.borderColor = "white";
canvas.remove(ball_img);
	load_img();
}

// Control gameplay for single player snake


function newFood(points){
// Creates a new piece of food, returns food object
	return {points: points, x: Math.floor(Math.random() * map.width), y: Math.floor(Math.random() * map.height)};
}

function update(){
	// Update game logic

	player.move();
	if ((player.segs[0].x < 0)
		|| (player.segs[0].x === map.width)
		|| (player.segs[0].y < 0)
		|| (player.segs[0].y === map.height)) dead = true;
	else {
		// If the player isn't dead, update the game logic
		if ((player.segs[0].x === food.x) && (player.segs[0].y === food.y)){
			score += 1;
			food = newFood(1);
			player.addLen();
		}
	}
}

function draw(){
	// Draw the game
	map.drawThings(player.asThings());
	map.drawCell(food.x, food.y, "yellow");
}

function round(){
	// What to execute each round
	update();
	draw();
	if (dead) onDead();
}

function onDead(){
	// Do things when the player dies
	clearInterval(timeID);
	if (confirm("Congratumalations! You scored " + String(score) + " points! Want to try again?")) window.onload();
}

var timeID;
var score;
window.onload = function(){
	score = 0;
	dead = false;
	player = new Snake(Seg(5, 6), "blue");
	map = new Map(document.getElementById("game"), 50, 50, "black");
	food = newFood();
	timeID = setInterval("round()", 1000 / 30);
	// Handle key bindings
	$('body').keydown(udlr);
 }

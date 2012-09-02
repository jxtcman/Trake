// Control gameplay for single player snake


function newFood(points){
// Creates a new piece of food, returns food object
	return {points: points, x: Math.random() * map.width, y: Math.random() * map.height};
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
		if ((player.segs[0].x == food.x) && (player.segs[0].y == food.y)){
			score += food.points;
			food = newFood(1);
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
	if (dead) clearInterval(timeID);
}


var timeID;
window.onload = function(){
	dead = false;
	player = new Snake(Seg(5, 6), "blue");
	map = new Map(document.getElementById("game"), 100, 100, "black");
	food = newFood();
	timeID = setInterval("round()", 1000 / 30);
// Handle key bindings
$('body').keydown( function(e){
		switch (e.keyCode){
			case 39 || 68:
				player.dir = 0;
				e.preventDefault(); // Stop page from moving
				break;
			case 40, 83:
				player.dir = 1;
				e.preventDefault(); // Stop page from moving
				break;
			case 37, 64:
				player.dir = 2;
				e.preventDefault(); // Stop page from moving
				break;
			case 38, 87:
				player.dir = 3;
				e.preventDefault(); // Stop page from moving
				break;
			default:
				return;
		}
	});
}

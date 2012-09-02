
function Seg(posx, posy){
	this.x = posx, this.y = posy;
	return {x: this.x, y: this.y};
}

function Snake(startpos, colour){
// Object for the snakes
// Take start position and colour as arguments

	var self = this;
	this.dir = 0; // Right
	this.segs = [];
	this.segs.push(startpos);
	this.col = colour;

	this.move = function move(eating){
		// Moves the snake
		x = this.segs[0].x;
		y = this.segs[0].y;

		// Switch direction, do not allow going in reverse
		switch(this.dir){
			case 0:// Right
				(this.dir !== 2)? x++: pass;
				break;
			case 1:// Down
				(this.dir !== 3) ? y++ : pass;
				break;
			case 2:// Right
				(this.dir !== 0)? x-- : pass;
				break;
			case 3://Up
				(this.dir !== 1) ? y-- : pass;
				break;
			default:
				console.log("Something broke, derpderp, direction was", this.dir);
		}
		if (!eating) this.segs.pop();
		this.segs.unshift(Seg(x, y));
		
		return this.segs[0];
		
	}

	this.asThings = function asThings(){
		things = [];
		for (i = 0; i < this.segs.length; i++)
			things.push({x: this.segs[i].x, y: this.segs[i].y, colour: this.col});
		return things;
	}

	return self;

}

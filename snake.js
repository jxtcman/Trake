
function Seg(posx, posy){
	this.x = posx, this.y = posy;
	return {x: this.x, y: this.y};
}

function Snake(startpos, colour){
// Object for the snakes
// Take start position and colour as arguments

	var self = this;
	this.dir = 0; // Right
	this.cdir = 0;
	this.segs = [];
	this.segs.push(startpos);
	this.col = colour;

	this.addLen = function addLen(){
		this.segs.push( this.segs[ this.segs.length - 1] );
	}

	this.changeDir = function changeDir(ndir){
		if (typeof ndir === "string"){
			
		}
		switch 
	}

	this.move = function move(eating){
		// Moves the snake
		x = this.segs[0].x;
		y = this.segs[0].y;

		this.addLen();

		// Switch direction, do not allow going in reverse
		switch(this.cdir){
			case 0:// Right
				if (this.dir !== 2) x++;
				break;
			case 1:// Down
				if (this.dir !== 3)  y++;
				break;
			case 2:// Right
				if (this.dir !== 0) x--;
				break;
			case 3://Up
				if (this.dir !== 1) y--;
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

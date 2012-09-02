
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
			ndir = ndir.toLowerCase();
			if (ndir === "right") ndir = 0;
			else if (ndir === "down") ndir = 1;
			else if (ndir === "left") ndir = 2;
			else if (ndir === "up") ndir = 3;
			else console.log("Changed to a bad direction: ", ndir);
		}

		switch (ndir){
			case 0:
				if (this.dir !== 2) this.dir = ndir;
				break;
			case 1:
				if (this.dir !== 3) this.dir = ndir;
				break;
			case 2:
				if (this.dir !== 0) this.dir = ndir;
				break;
			case 3:
				if (this.dir !== 1) this.dir = ndir;
				break;
		}
	}

	this.move = function move(eating){
		// Moves the snake
		x = this.segs[0].x;
		y = this.segs[0].y;

		// Switch direction, do not allow going in reverse
		switch(this.dir){
			case 0:// Right
				x++;
				break;
			case 1:// Down
				y++;
				break;
			case 2:// Right
				x--;
				break;
			case 3://Up
				y--;
				break;
			default:
				console.log("Something broke, derpderp, direction was", this.dir);
		}
		this.segs.pop();
		this.segs.unshift(Seg(x, y));
		
		return this.segs[0]; // returns new head position
		
	}

	this.asThings = function asThings(){
		things = [];
		for (i = 0; i < this.segs.length; i++)
			things.push({x: this.segs[i].x, y: this.segs[i].y, colour: this.col});
		return things;
	}

	return self;

}

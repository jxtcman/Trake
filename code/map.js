function Pix(x, y, colour){
	this.x = x, this.y = y, this.colour = colour;
	return this;
}

function Map(canvas, sizex, sizey, bgcolour){
	// Draws the map given game data
	var self = this;
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
	this.height = sizey;
	this.width = sizex;
	this.bgcolour = (bgcolour !== undefined) ? bgcolour : "black";
	this.cellh = this.canvas.height / this.height;
	this.cellw = this.canvas.width / this.width;

	this.clear = function clear(){
		this.ctx.fillStyle = this.bgcolour;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	this.drawCell = function drawCell(x, y, col){
		// Draws a cell a colour with a white outline
		try{
		this.ctx.fillStyle = col; } catch(err){ console.log(col, err); }
		this.ctx.fillRect(x * this.cellw, y * this.cellh,
						this.cellw, this.cellh);
		this.ctx.fillStyle = this.bgcolour;
		this.ctx.strokeRect(x * this.cellw, y * this.cellh,
						this.cellw, this.cellh);
	}

	// Fill in colour map blank, clear screen
	this.blankMap = function blankMap(){
		blank = new Array(this.width);
		for (i = 0; i < blank.length; i++)
			blank[i] = new Array(sizey);
		return blank;
	}

	this.clear();
	this.colMap = this.blankMap();

	this.drawMap = function drawMap(){
		// Draws the colMap out
		for (i = 0; i < this.colMap.length; i++)
			for (j = 0; j < this.colMap[i].length; j++)
				this.drawCell(i, j, (this.colMap[i][j]) ? this.colMap[i][j] : this.bgcolour);
		return true;
		
	}

	this.drawPix = function drawPix(things){
		// Takes a list of things to draw, must be co-ordinates and a colour value
		for (i = 0; i < things.length; i++)
				this.drawCell(things[i].x, things[i].y, things[i].colour);
	}

	return self;

}

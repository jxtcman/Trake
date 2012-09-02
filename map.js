
function Map(canvas, sizex, sizey, bgcolor){
	// Draws the map given game data
	var self = this;
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
	this.height = sizey;
	this.width = sizex;
	this.bgcolor = (bgcolor !== undefined) ? bgcolor : "white";
	this.cellh = this.canvas.height / this.height;
	this.cellw = this.canvas.width / this.width;

	this.clear = function clear(){
		this.ctx.fillStyle = this.bgcolour;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	this.drawCell = function drawCell(x, y, col){
		// Draws a cell a colour with a white outline
		this.ctx.fillStyle = col;
		this.ctx.fillRect(x * this.cellw, y * this.cellh,
						this.cellw, this.cellh);
		this.ctx.fillStyle = bgcolor;
		this.ctx.strokeRect(x * this.cellw, y * this.cellh,
						this.cellw, this.cellh);
	}

	// Fill in colour map blank based on bgcolor
	this.colMap = new Array(sizex);
	for (i = 0; i < this.colMap.length; i++){
		this.colMap[i] = new Array(sizey);
		for (j = 0; j < this.colMap[i].length; j++){
			this.drawCell(i, j, this.bgcolor);	
			this.colMap[i][j] = this.bgcolor;
		}
	}

	this.drawMap = function drawMap(){
		// Draws the colMap out
		for (i = 0; i < this.colMap.length; i++)
			for (j = 0; j < this.colMap[i].length; j++)
				this.drawCell(i, j, this.colMap[i][j]);
		return true;
		
	}

	this.drawThings = function drawThings(things){
		// Takes a list of things to draw, must be co-ordinates and a colour value
		for (i = 0; i < things.length; i++)
				this.drawCell(things[i].x, things[i].y, things[i].colour);
	}

	return self;

}

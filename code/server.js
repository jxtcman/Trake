console.log("Started working");

require("./map.js");
require("./snake.js");
console.log("Home libs loaded");
var express;
try{
express = require('express');
} catch(e){
console.log(e.message);
}
console.log("express loaded");
var http = require('http');
console.log("http loaded");
var util = require('util');
console.log("util loaded");

console.log("Finished includes");

try{
var app = express.createServer();
} catch(e){
console.log(e.message);
}

app.get("/:file", function(req, res){
	res.sendfile( __dirname + "/:file");
});

app.use(express.static(__dirname));

util.debug("2");

var port = 8080;

console.log("Set port");

app.listen(port);

console.log("Server created");

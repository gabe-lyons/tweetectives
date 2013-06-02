
var fs = require("fs");
var querystring = require("querystring");

var http = require('http');

// called when the server requests "/" or ""
function index(response, request) {
	console.log("Request handler 'index' was called");
	// reads the index.html file and prints it out
	fs.readFile("./index.html", function(err, data){
		if(err) throw err;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(data);
		response.end();
	});
}


exports.index = index;
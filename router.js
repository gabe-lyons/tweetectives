var fs = require("fs");

function route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log(pathname.split(".")[pathname.split(".").length - 1]);
		if(pathname.split(".")[pathname.split(".").length - 1] == "css"){
			response.writeHead(200, {"Content-Type":"text/css"});
			var img = fs.readFileSync('.' + pathname);
		    response.end(img, 'binary');
		}
		if(pathname.split(".")[pathname.split(".").length - 1] == "png"){
			response.writeHead(200, {"Content-Type":"image/png"});
			var img = fs.readFileSync('.' + pathname);
		    response.end(img, 'binary');
		}
	}
}

exports.route = route;


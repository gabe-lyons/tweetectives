var server = require("./realServer");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle[""] = requestHandlers.index;
handle["/"] = requestHandlers.index;

server.start(router.route, handle);
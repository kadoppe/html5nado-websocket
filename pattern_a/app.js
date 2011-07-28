var express = require('express');
var app = express.createServer();
app.configure(function() {
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

//////////////////////////////////////////////
// サーバの処理
//////////////////////////////////////////////
var ws = require("websocket-server");

var server = ws.createServer({server: app});

server.addListener("connection", function(connection) {
	connection.addListener("message", function(msg) {
		server.broadcast(msg);
	});
});

server.listen(80)

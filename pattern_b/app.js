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

var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket) {
	socket.on('message', function(message) {
		io.sockets.send(message);
	});
});

app.listen(80);

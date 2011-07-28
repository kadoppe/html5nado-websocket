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

var Pusher = require('pusher');
var pusher = new Pusher({
	appId: 'YOUR_APP_ID',
	appKey: 'YOUR_APP_KEY',
	secret: 'YOUR_SECRET'
});
var channel = pusher.channel('chat');

app.post('/message', function(req, res) {
	var data = req.body;
	channel.trigger('message', data, function(err, request, response) {
		res.send(200);
	});
});

app.listen(80);

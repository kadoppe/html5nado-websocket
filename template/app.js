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








app.listen(80);

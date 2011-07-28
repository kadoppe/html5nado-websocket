$(function() {
	clear();

	//////////////////////////////////////////////
	// サーバとの接続処理
	//////////////////////////////////////////////

	var socket = io.connect("ws://localhost");

	
	//////////////////////////////////////////////
	// メッセージ受信時の処理
	//////////////////////////////////////////////
	
	socket.on('connect', function() {
		console.log("Connected");
	});

	socket.on('message', function(message) {
		$("<div>").text('> ' + message).prependTo("#logs");
	});


	//////////////////////////////////////////////
	// Send ボタンがクリックされたときの処理
	// (メッセージ送信時の処理)
	//////////////////////////////////////////////
	$("#send").submit(function() {

		if ($("#message").val()) {

			socket.send($("#message").val());

		}

		clear();
		return false;
	});


	function clear() {
		$("#message").val('').focus();
	}

});

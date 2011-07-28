$(function() {
	clear();

	//////////////////////////////////////////////
	// サーバとの接続処理
	//////////////////////////////////////////////

	var pusher = new Pusher('YOUR_APP_KEY');
	var channel = pusher.subscribe('chat');

	
	//////////////////////////////////////////////
	// メッセージ受信時の処理
	//////////////////////////////////////////////
	
	pusher.bind('pusher:connection_established', function() {
		console.log("Connected");
	});

	channel.bind('message', function(data) {
		$("<div>").text("> " + data.message).prependTo("#logs");
	});


	//////////////////////////////////////////////
	// Send ボタンがクリックされたときの処理
	// (メッセージ送信時の処理)
	//////////////////////////////////////////////
	$("#send").submit(function() {

		if ($("#message").val()) {

			$.post("/message", {message: $("#message").val()});

		}

		clear();
		return false;
	});


	function clear() {
		$("#message").val('').focus();
	}

});

$(function() {
	clear();

	//////////////////////////////////////////////
	// サーバとの接続処理
	//////////////////////////////////////////////

	var ws = new WebSocket("ws://localhost/");

	
	//////////////////////////////////////////////
	// メッセージ受信時の処理
	//////////////////////////////////////////////
	
	ws.onopen = function() {
		console.log("Connected");
	};

	ws.onmessage = function(event) {
		$("<div>").text("> " + event.data).prependTo("#logs");
	};

	//////////////////////////////////////////////
	// Send ボタンがクリックされたときの処理
	// (メッセージ送信時の処理)
	//////////////////////////////////////////////
	$("#send").submit(function() {

		if ($("#message").val()) {
			ws.send($("#message").val());
		}

		clear();
		return false;
	});


	function clear() {
		$("#message").val('').focus();
	}

});

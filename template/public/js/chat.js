$(function() {
	clear();

	//////////////////////////////////////////////
	// サーバとの接続処理
	//////////////////////////////////////////////



	
	//////////////////////////////////////////////
	// メッセージ受信時の処理
	//////////////////////////////////////////////




	//////////////////////////////////////////////
	// Send ボタンがクリックされたときの処理
	// (メッセージ送信時の処理)
	//////////////////////////////////////////////
	$("#send").submit(function() {

		if ($("#message").val()) {

			console.log('clicked');

		}

		clear();
		return false;
	});


	function clear() {
		$("#message").val('').focus();
	}

});

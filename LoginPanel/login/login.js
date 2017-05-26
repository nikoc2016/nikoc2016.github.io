var usrtxt = "在 此 輸 入 賬 號 名";
var pastxt = "在 此 輸 入 密 碼";
var btntxt = "登 入";

$(document).ready(function(){
	$("#user").val(usrtxt);
	$("#password").attr("type","text");
	$("#password").val(pastxt);
	$("#submitBtn").val(btntxt);

	$("#user").focusin(function(){
		if ($("#user").val() == usrtxt) {
			$("#user").val("");
		}
	});

	$("#user").focusout(function(){
		if ($("#user").val() == "") {
			$("#user").val(usrtxt);
		}
	});

	$("#password").focusin(function(){
		if ($("#password").val() == pastxt) {
			$("#password").val("");
			$("#password").attr("type","password");
		}
	});

	$("#password").focusout(function(){
		if ($("#password").val() == "") {
			$("#password").attr("type","text");
			$("#password").val(pastxt);
		}
	});
});
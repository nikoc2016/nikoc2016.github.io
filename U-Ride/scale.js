$(document).ready(function(){
	updateRelativeFontSize();
});

function updateRelativeFontSize(){
	$("html").css({"fontSize":$(window).height() / 32});
	$("html").append($(window).height() / 48);
}
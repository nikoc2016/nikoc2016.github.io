//Global Hook
$(document).ready(function(){

	//Dynamic Font Sizing
	updateRelativeFontSize();
	$(window).resize(function(){
		updateRelativeFontSize();
	});
});

//getFontSize
function updateRelativeFontSize(){
	$("html").css({"fontSize":$(window).height() / 32});
}

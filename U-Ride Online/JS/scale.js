//Global Hook
$(document).ready(function(){

	//DISPLAY HOOK
	updateRelativeFontSize();
	$(window).resize(function(){
		updateRelativeFontSize();
	});
});

//getFontSize
function updateRelativeFontSize(){
	$("html").css({"fontSize":$(window).height() / 32});
}

//Global Hook
$(document).ready(function(){

	//HOME ONPRESS HOOK
	$("#homeIcon").mousedown(function() {
		$(this).attr('src',"Graphics/png/button2.png");
	}).mouseup(function() {
		$(this).attr('src',"Graphics/png/button.png");
	});

	//HOME HOVER HOOK
	$("#homeIcon").mouseenter(function() {
		$(this).attr('src',"Graphics/png/button2.png");
	}).mouseleave(function() {
		$(this).attr('src',"Graphics/png/button.png");
	});

	//BUTTONS ONPRESS HOOK
	$(".options").mousedown(function() {
		$(this).css({'backgroundColor':"#AAAAAA"});
	}).mouseup(function() {
		$(this).css({'backgroundColor':"#FFFFFF"});
	});

	//BUTTONS HOVER HOOK
	$(".options").mouseenter(function() {
		$(this).css({'backgroundColor':"#AAAAAA"});
	}).mouseleave(function() {
		$(this).css({'backgroundColor':"#FFFFFF"});
	});

});
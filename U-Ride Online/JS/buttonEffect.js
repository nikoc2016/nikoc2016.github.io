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

	//BUTTONS ONPRESS HOOK
	$("#getSearch").mousedown(function() {
		$(this).css({'backgroundColor':"#AAffAA"});
	}).mouseup(function() {
		$(this).css({'backgroundColor':"#47fc23"});
	});

	//BUTTONS HOVER HOOK
	$("#getSearch").mouseenter(function() {
		$(this).css({'backgroundColor':"#AAffAA"});
	}).mouseleave(function() {
		$(this).css({'backgroundColor':"#47fc23"});
	});

	//BUTTONS HOVER HOOK
	$("#globalCancelButton").mouseenter(function() {
		$(this).css({'backgroundColor':"#9fe5ff"});
	}).mouseleave(function() {
		$(this).css({'backgroundColor':"#75d0ff"});
	});

	$("#globalCancelButton").mousedown(function() {
		$(this).css({'backgroundColor':"#9fe5ff"});
	}).mouseup(function() {
		$(this).css({'backgroundColor':"#75d0ff"});
	});

});

function pushInfo(isGood,srcstr){
	if (isGood)
		$("#successInfo").css({"backgroundColor":"#5df21c"});
	else
		$("#successInfo").css({"backgroundColor":"#edd041"});

	$("#successInfo").html(srcstr);
	$("#successInfo").slideDown("slow").delay(2500).slideUp("slow");
}
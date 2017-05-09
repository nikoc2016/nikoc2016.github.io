$(document).ready(function(){
	loadPage("HOME.html");
});

function loadPage(pageName){

	$("#mainDisplayPanel").slideUp();
	$("#mainDisplayCtx").slideUp();

	$("#mainDisplayCtx").load("PAGES/pageName", function(){
		$("#mainDisplayPanel").css({"height":$("#mainDisplayCtx").height()});
		$("#mainDisplayPanel").slideDown();
		$("#mainDisplayCtx").slideDown();
	});
}

$(window).resize(function(){
  myRain.resizeCanvas();
});
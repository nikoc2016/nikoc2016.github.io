$(document).ready(function(){
	loadPage("HOME.html");
});

function loadPage(pageName){

	$("#mainDisplayPanel").fadeOut("slow");
	$("#mainDisplayCtx").load("PAGES/" + pageName);
	$("#mainDisplayPanel").fadeIn("slow");
}

$(window).resize(function(){
  myRain.resizeCanvas();
});
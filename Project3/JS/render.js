$(document).ready(function(){
	loadPage("HOME.html");
});

function loadPage(pageName){

	$("#mainDisplayPanel").slideUp();
	$("#mainDisplayCtx").load("PAGES/" + pageName);
	$("#mainDisplayPanel").slideDown();
}

$(window).resize(function(){
  myRain.resizeCanvas();
});
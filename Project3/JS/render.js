$(document).ready(function(){
	$("#mainDisplayCtx").load("PAGES/HOME.html");
	$("#mainDisplayPanel").css({"height":$("#mainDisplayCtx").height()});
	$("#mainDisplayPanel").fadeIn();
	$("#mainDisplayCtx").fadeIn();
});

$(window).resize(function(){
  myRain.resizeCanvas();

});
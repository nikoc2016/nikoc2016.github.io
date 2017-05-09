$(document).ready(function(){
	$("#mainDisplayCtx").html("PAGES/HOME.html");
	$("#mainDisplayPanel").css({"height":$("#mainDisplayCtx").height()});
	$("#mainDisplayPanel").fadeIn();
	$("#mainDisplayCtx").fadeIn();
});

$(window).resize(function(){
  myRain.resizeCanvas();

});
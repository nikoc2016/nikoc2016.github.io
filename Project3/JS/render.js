$(document).ready(function(){
	loadPage("page0.html");

	$("#navHome").onclick(function(){
		loadPage("page0.html");
	});
	$("#navUnity").onclick(function(){
		loadPage("page1.html");
	});
	$("#navUnreal").onclick(function(){
		loadPage("page2.html");
	});
	$("#navSnake").onclick(function(){
		loadPage("page3.html");
	});
	$("#navJS").onclick(function(){
		loadPage("page4.html");
	});
	$("#navAPI").onclick(function(){
		loadPage("page5.html");
	});
});

function loadPage(pageName){
	$("#mainDisplayPanel").fadeOut("slow");
	$("#mainDisplayCtx").load("PAGES/" + pageName);
	$("#mainDisplayPanel").fadeIn("slow");
}

$(window).resize(function(){
  myRain.resizeCanvas();
});
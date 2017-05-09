$(document).ready(function(){
	loadPage("page0.html");

	$("#navHome").click(function(){
		loadPage("page0.html");
	});
	$("#navUnity").click(function(){
		loadPage("page1.html");
	});
	$("#navUnreal").click(function(){
		loadPage("page2.html");
	});
	$("#navSnake").click(function(){
		loadPage("page3.html");
	});
	$("#navJS").click(function(){
		loadPage("page4.html");
	});
	$("#navAPI").click(function(){
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
$(document).ready(function(){
	loadPage("page0.html");

	setInterval(resizeFooter, 10);

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
	$("#mainDisplayPanel").hide();
	if (pageName == "page3.html") {
		$("#mainDisplayCtx").load("PAGES/page3.html", null, loadSnake);
	} else if (pageName == "page5.html") {
		alert("huh");
		$("#mainDisplayCtx").load("../U-Ride%20Online/index.html");
	} else {
		$("#mainDisplayCtx").load("PAGES/" + pageName);
	}
	$("#mainDisplayPanel").fadeIn("slow");
}

$(window).resize(function(){
  myRain.resizeCanvas();
});

function resizeFooter() {
	if ($("#mainDisplayCtx").height() > 690 ) {
		$("#footerPanel").css({"top": $("#mainDisplayCtx").height() + 280});
		$("#footerCtx").css({"top": $("#mainDisplayCtx").height() + 270});
	} else {
		$("#footerPanel").css({"top": 930});
		$("#footerCtx").css({"top": 920});
	}
}

function loadSnake(){
	for(var y=0;y<50;y++){
		for(var x=0;x<50;x++){
			$("#snakePad").append("<div class='snakePixel' id='PIXEL-" + x + "-" + y + "'></div>");
				drawPixel(x,y,0); //Make It Black
		}
	}
	if (engine.gameOn==false) snakeInit();
}
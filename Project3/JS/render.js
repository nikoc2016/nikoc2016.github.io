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
		loadPage("page3.html",function(){
			for(var y=0;y<50;y++){
				for(var x=0;x<50;x++){
					$("#snakePad").append("<div class='snakePixel' id='PIXEL-" + x + "-" + y + "'></div>");
					drawPixel(x,y,0); //Make It Black
				}
			}
			snakeInit();
		});
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

	if ($("#mainDisplayCtx").height() > 690 ) {
		$("#footerPanel").css({"top": $("#mainDisplayCtx").height() + 280});
		$("#footerCtx").css({"top": $("#mainDisplayCtx").height() + 270});
	} else {
		$("#footerPanel").css({"top": 930});
		$("#footerCtx").css({"top": 920});
	}
}

$(window).resize(function(){
  myRain.resizeCanvas();
});
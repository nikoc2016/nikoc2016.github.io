/*
======================================================================================

                                   GLOBAL FUNCTIONS

======================================================================================
*/

//A global resize function for all pages except main page.
function superResize(){
	var browserSize = {
		width: $(window).width(),
		height: $(window).height()
	};

	$("#drawArea").css({"marginLeft": (browserSize.width - $("#drawArea").width()-4) / 2});
	$("#logoPIC").css({"marginLeft": ($("#logo").width() - 4 - $("#logoPIC").width()) / 2});
	$("footer").css({"marginLeft": ($("#drawArea").width()-$("footer").width())/2,
					 "marginTop" : 20});
}

//A global hover effect function for all pages except main page.
function enableHOVER(){
	$("#logo").hover(
		function(){
			$(this).animate({backgroundColor:'#555555'},'fast');
		},
		function() {
		  $(this).animate({backgroundColor:'#000000'},'fast');
		});
	$(".navOption").hover(
		function(){
			$(this).animate({backgroundColor:'#555555'},'fast');
		},
		function() {
		  $(this).animate({backgroundColor:'#000000'},'fast');
		});
}

//A global function for buttons.
function enableBUTTONS(){
	$("#nav1").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("body").fadeOut("slow",function(){window.location.href = "index.html";})
		}
		);
	$("#nav2").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("#logoPIC").fadeOut("slow");
			$("#post").slideUp("slow",function(){window.location.href = "page1.html";})
		}
		);
	$("#nav3").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("#logoPIC").fadeOut("slow");
			$("#post").slideUp("slow",function(){window.location.href = "page2.html";})
		}
		);
	$("#nav4").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("#logoPIC").fadeOut("slow");
			$("#post").slideUp("slow",function(){window.location.href = "page3.html";})
		}
		);
	$("#nav5").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("#logoPIC").fadeOut("slow");
			$("#post").slideUp("slow",function(){window.location.href = "page4.html";})
		}
		);
}
/*
======================================================================================

                                   INDEX FUNCTIONS

======================================================================================
*/

//The Director of Index
function indexDirector(){

	//DRAW BOX
	$("#logo").css({"border-color": "white",
					"border-weight": "2px",
					"border-style": "solid",
					"width": "900px",
				    "height": "200px",
					"text-align": "center",
					"display": "none"});

	//DRAW TEXT
	$("#logoCaption").css({"font-size": "130px",
						   "margin-top": "0px"});

	//DRAW FOOTER
	$("footer").css({"border": "1px solid black",
					 "margin-top": "20px",
					 "display": "none"});

	//RESIZE SCALE
	indexResize();
	$( window ).resize(function() {
  		indexResize();
	});

	//Fade In
	$("#logo").fadeIn("slow", function(){$(".indexButton").fadeIn("slow", function(){$("footer").fadeIn();});});

	//Hover Effect
	$("#logo").hover(
		function(){
			$(this).animate({backgroundColor:'#555555'},'fast');
		},
		function() {
		  $(this).animate({backgroundColor:'#000000'},'fast');
		});

	$(".indexButton").hover(
		function(){
			$(this).animate({backgroundColor:'#555555'},'fast');
		},
		function() {
		  $(this).animate({backgroundColor:'#000000'},'fast');
		});

	//Button Clicking
	$("#page1").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("body").fadeOut("slow",function(){window.location.href = "page1.html";})
		}
		);
	$("#page2").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("body").fadeOut("slow",function(){window.location.href = "page2.html";})
		}
		);
	$("#page3").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("body").fadeOut("slow",function(){window.location.href = "page3.html";})
		}
		);
	$("#page4").click(
		function(){
			$(this).css({"backgroundColor": "#FFFFFF"});
			$("body").fadeOut("slow",function(){window.location.href = "page4.html";})
		}
		);
}

//Resizing the page
function indexResize(){
	var browserSize = {
		width: $(window).width(),
		height: $(window).height()
	};

	$("#logo").css({"margin-left": (browserSize.width - 922) / 2,
					"margin-top": (browserSize.height - 350) / 2});
	$("#page1").css({"margin-left": (browserSize.width- 922) / 2 + 160});
	$("footer").css({"margin-left": (browserSize.width-$("footer").width())/2});
}

/*
======================================================================================

                                   PAGE1 FUNCTIONS

======================================================================================
*/

//The Director of Page1
function page1Director(){

	//RESIZE SCALE
	superResize();
	$( window ).resize(function() {
  		superResize();
	});

	$("#logoPIC").fadeIn("slow");
	enableHOVER();
	enableBUTTONS();

	$("#post").slideDown("slow");
}

/*
======================================================================================

                                   PAGE2 FUNCTIONS

======================================================================================
*/

//The Director of Page2
function page2Director(){

	//RESIZE SCALE
	superResize();
	$( window ).resize(function() {
  		superResize();
	});

	$("#logoPIC").fadeIn("slow");
	enableHOVER();
	enableBUTTONS();

	$("#post").slideDown("slow");
}

/*
======================================================================================

                                   PAGE3 FUNCTIONS

======================================================================================
*/

//The Director of Page3
function page3Director(){

	//RESIZE SCALE
	superResize();
	$( window ).resize(function() {
  		superResize();
	});

	//INITIAL PAGE
	$("#logoPIC").fadeIn("slow");
	enableHOVER();
	enableBUTTONS();

	$("#post").slideDown("slow");

	//FILL PIXELS
	//Name Format : PIXEL-X-Y
	//Drawpad Resolution : 50 x 50
	for(var y=0;y<50;y++){
		for(var x=0;x<50;x++){
			$("#snakePad").append("<div class='snakePixel' id='PIXEL-" + x + "-" + y + "'></div>");
			drawPixel(x,y,0); //Make It Black
		}
	}

	//Init Game
	snakeInit();
}

/*
======================================================================================

                                   PAGE4 FUNCTIONS

======================================================================================
*/

//The Director of Page4
function page4Director(){

	//RESIZE SCALE
	superResize();
	$( window ).resize(function() {
  		superResize();
	});

	$("#logoPIC").fadeIn("slow");
	enableHOVER();
	enableBUTTONS();

	$("#post").slideDown("slow");
}
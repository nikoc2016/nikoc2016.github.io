//Global Hook

var mainMenuStatus = 0;
/* 
0-None;
1-TitleBar
2-TitleBar + Home Button
*/
var optionStatus = 0;   //0-NONE; 1-SHOWN
var loginStatus = 0;    //0-NONE; 1-SHOWN
var giveRideStatus = 0; //0-NONE; 1-SHOWN
var getRideStatus = 0;  //0-NONE; 1-SHOWN
var accountStatus = 0;  //0-NONE; 1-SHOWN
var aboutStatus = 0;    //0-NONE; 1-SHOWN

$(document).ready(function(){
	displayMain();

	$("#homeIcon").mousedown(function() {
		mainMenuStatus = 1;
		$("#homeButton").fadeOut();
		displayMenu();
	});

	$("#Cancel").mousedown(function() {
		$("#greyMask").fadeOut();
		$("#buttonGround").fadeOut();
		$("#buttonBox").fadeOut();
		displayMain();
	});

	$("#greyMask").mousedown(function() {
		$("#greyMask").fadeOut();
		$("#buttonGround").fadeOut();
		$("#buttonBox").fadeOut();
		displayMain();
	});
});

function displayMain(){
	if(mainMenuStatus==0) $("#homeBar").fadeIn();
	if(mainMenuStatus!=2) $("#homeButton").fadeIn();
	mainMenuStatus = 2;
}

function displayMenu(){
	$("#greyMask").fadeIn();
	$("#buttonGround").fadeIn();
	$("#buttonBox").fadeIn();
	optionStatus = 1;
}
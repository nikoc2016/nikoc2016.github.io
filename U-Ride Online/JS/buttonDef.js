//Global Hook

var mainMenuStatus = 0; //0-None; 1-TitleBar; 2-TitleBar + Home Button
var optionStatus = 0;   //0-NONE; 1-SHOWN
var loginStatus = 0;    //0-NONE; 1-SHOWN
var giveRideStatus = 0; //0-NONE; 1-SHOWN
var getRideStatus = 0;  //0-NONE; 1-SHOWN
var accountStatus = 0;  //0-NONE; 1-SHOWN
var aboutStatus = 0;    //0-NONE; 1-SHOWN

var credits = 4000;

$(document).ready(function(){
	//Init Start

	mainUIhandle(2);

	//MAIN UI BUTTONS
	$("#homeIcon").mousedown(function() {
		mainUIhandle(1);
		mainOptionsHandle(1);
	});

	//OPTIONS UI BUTTONS
	$("#getRideButton").mousedown(function() {
		mainOptionsHandle(0);
		getRideHandle(1);
	});

	$("#Cancel").mousedown(function() {
		mainOptionsHandle(0);
		mainUIhandle(2);
	});

	$("#greyMask").mousedown(function() {
		mainOptionsHandle(0);
		mainUIhandle(2);
	});

	//getRide PANEL BUTTONS
	$("#getSearch").mousedown(function() {
		drawPath($("#getFromBox").val(),$("#getToBox").val());
	});

	//getRideDriver PANNEL BUTTONS
	$("#getRideDriverAccept").mousedown(function() {
		if (credits > travelDistance/100) {
			credits -= Math.round(travelDistance/100);
			getRideHandle(0);
			getRideDriverHandle(0);
			mainUIhandle(2);
			pushInfo(true,"Ride Confirmed! Available Credits: " + Math.round(credits));
		} else {
			pushInfo(false,"Not Enough Credits! Need " + Math.round(Math.abs(travelDistance/100 - credits)) + " more.");
			getRideDriverHandle(0);
		}
	});

	$("#getRideDriverNext").mousedown(function() {
		getRideDriverHandle(1);
	});

	$("#getRideDriverQuit").mousedown(function() {
		getRideHandle(0);
		getRideDriverHandle(0);
		mainUIhandle(2);
	});
});
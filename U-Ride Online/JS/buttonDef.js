//Global Hook

var mainMenuStatus = 0; //0-None; 1-TitleBar; 2-TitleBar + Home Button
var optionStatus = 0;   //0-NONE; 1-SHOWN
var loginStatus = 0;    //0-NONE; 1-SHOWN
var giveRideStatus = 0; //0-NONE; 1-SHOWN
var getRideStatus = 0;  //0-NONE; 1-SHOWN
var accountStatus = 0;  //0-NONE; 1-SHOWN
var aboutStatus = 0;    //0-NONE; 1-SHOWN
var creditStatus = 0 //0-NONE; 1-SHOWN

var credits = 500;
var creditEarn = 0;

var username = "Administrastor";
var password = "123";

var totalMilelage = 0;
var averageRating = 100;

$(document).ready(function(){
	//Init Start

	loginHandle(1);

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

	$("#giveRideButton").mousedown(function() {
		mainOptionsHandle(0);
		giveRideHandle(1);
	});

	$("#myProfileButton").mousedown(function() {
		mainOptionsHandle(0);
		myProfileHandle(1);
	});

	$("#aboutButton").mousedown(function() {
		mainOptionsHandle(0);
		aboutHandle(1);
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
		drawPath($("#getFromBox").val(),$("#getToBox").val(),true);
	});

	//getRideDriver PANNEL BUTTONS
	$("#getRideDriverAccept").mousedown(function() {
		if (credits > travelDistance/100) {
			credits -= Math.round(travelDistance/100);
			getRideHandle(0);
			getRideDriverHandle(0);
			mainUIhandle(2);
			totalMilelage += travelDistance;
			pushInfo(true,"Ride Confirmed! Available Credits: " + Math.round(credits));
		} else {
			pushInfo(false,"Not Enough Credits! Need " + Math.round(Math.abs(travelDistance/100 - credits)) + " more.");
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

	//giveRide PANEL BUTTONS
	$("#giveSearch").mousedown(function() {
		drawPath($("#giveFromBox").val(),$("#giveToBox").val(),false);
	});

	//giveRidePassenger PANNEL BUTTONS
	$("#giveRidePassengerAccept").mousedown(function() {
		if (Math.random() > 0.5) {
			giveRideHandle(0);
			giveRidePassengerHandle(0);
			mainUIhandle(2);
			totalMilelage += travelDistance;
			credits += creditEarn;
			pushInfo(true,"Thank you for giving a Ride! Credits Earned: " + Math.round(creditEarn));
		} else {
			giveRidePassengerHandle(1);
			pushInfo(false,"Ooops, passenger has found a Ride already. Try another one!");
		}
	});

	$("#giveRidePassengerNext").mousedown(function() {
		giveRidePassengerHandle(1);
	});

	$("#giveRidePassengerQuit").mousedown(function() {
		giveRideHandle(0);
		giveRidePassengerHandle(0);
		mainUIhandle(2);
	});

	//myProfile PANNEL BUTTONS
	$("#myProfileCreditButton").mousedown(function() {
		if (creditStatus==0) myProfileCreditHandle(1);
		else myProfileCreditHandle(0);
	});

	$("#myProfileBackButton").mousedown(function() {
		myProfileCreditHandle(0);
		myProfileHandle(0);
		mainUIhandle(2);
	});

	//myProfileCredit BUTTONS
	$("#creditInputBox").on('input', function(){
		$("#creditCaculation").html(
			"You can buy it from $" + Math.round($("#creditInputBox").val() / 100 * 3) + ". </br>" +
			"You can sell if for $" + Math.round($("#creditInputBox").val() / 100 * 2) + ". </br>"
		);
	});

	$("#myProfileCreditSellButton").mousedown(function() {
		if (credits - $("#creditInputBox").val() < 500) pushInfo(false,"500 credit base is untradable.");
		else if (credits>=$("#creditInputBox").val()) {
			pushInfo(true, "You sold " + $("#creditInputBox").val() + " for $" + Math.round($("#creditInputBox").val() / 100 * 2));
			credits -= $("#creditInputBox").val();
			$("#myProfilePanel p").html(
				username + "</br></br>" +
				"Available Credits : " + credits + "</br>" +
				"Traveled Distance : " + totalMilelage  + " m.</br>" +
				"Average Rating : " + averageRating + "/100 </br>"
				);
		}
	});

	$("#myProfileCreditBuyButton").mousedown(function() {
		if ($("#creditInputBox").val() < 20) pushInfo(false,"Minimal credit purchase is 20.");
		else {
			pushInfo(true, "You purchase " + $("#creditInputBox").val() + " for $" + Math.round($("#creditInputBox").val() / 100 * 3));
			credits += Math.round($("#creditInputBox").val());
			$("#myProfilePanel p").html(
				username + "</br></br>" +
				"Available Credits : " + credits + "</br>" +
				"Traveled Distance : " + totalMilelage  + " m.</br>" +
				"Average Rating : " + averageRating + "/100 </br>"
				);
		}
	});

	//About Buttons
	$("#aboutQuitButton").mousedown(function(){
		aboutHandle(0);
		mainUIhandle(2);
	});

	//Login Button
	$("#loginButton").mousedown(function(){
		username = $("#loginName").val();
		loginHandle(0);
		mainUIhandle(2);
	});

	$("#logoffButton").mousedown(function(){
		mainOptionsHandle(0);
		mainUIhandle(0);
		loginHandle(1);
	});

	//Global Cancel
	$("#globalCancelButton").mousedown(function() {
		$("#globalCancelButton").fadeOut();
		mainUIhandle(2);
		getRideHandle(0);
		giveRideHandle(0);
	})

});
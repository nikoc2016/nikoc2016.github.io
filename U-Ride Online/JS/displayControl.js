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

var credits = 1000;

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

	$("#getRideButton").mousedown(function() {
		$("#greyMask").fadeOut();
		$("#buttonGround").fadeOut();
		$("#buttonBox").fadeOut();
		$("#getRidePanel").slideDown();
	});

	//BUTTONS ONPRESS HOOK
	$("#getSearch").mousedown(function() {
		drawPath($("#getFromBox").val(),$("#getToBox").val());
	});

	//DRIVER PANNEL BUTTONS
	$("#getRideDriverAccept").mousedown(function() {
		if (credits > travelDistance/100) {
			credits -= travelDistance/100;
			$("#getRideDriverPanel").fadeOut("fast");
			$("#getRidePanel").slideUp("fast");
			getRideStatus = 0;
			displayMain();
			pushInfo(true,"Ride Confirmed! Available Credits: " + Math.round(credits));
		} else {
			pushInfo(false,"Not Enough Credits! Need " + Math.round(Math.abs(travelDistance/100 - credits)) + " more.");
			$("#getRideDriverPanel").fadeOut("fast");
		}
	});

	$("#getRideDriverNext").mousedown(function() {
		refreshDriverInfo();
	});

	$("#getRideDriverQuit").mousedown(function() {
		$("#getRideDriverPanel").fadeOut("fast");
		$("#getRidePanel").slideUp("fast");
		getRideStatus = 0;
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

function refreshDriverInfo(){
	$("#getRideDriverPanel").fadeOut("fast");
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
			//console.log(data);
			$("#getRiderDriverImagePic").attr("src",data.results[0].picture.large);
			$("#getRideDriverInfo").html(
				"Driver Found! </br></br>" + 
				data.results[0].name.first.toUpperCase() + " " + data.results[0].name.last.toUpperCase() + "</br>" +
				"Tel: " + data.results[0].cell + "</br>" +
				"Overall Rating : " + Math.floor(Math.random() * 100) + "/100" + "</br>" +
				"Credits Needed : " + Math.floor(travelDistance/100) + "/" + credits
				);
			$("#getRideDriverPanel").fadeIn();
		}
	});
}
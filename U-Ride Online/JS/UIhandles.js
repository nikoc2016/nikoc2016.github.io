function mainUIhandle(toStatus){
	if (toStatus==0) {
		$("#homeBar").fadeOut();
		$("#homeButton").fadeOut();
	} else if (toStatus==1) {
		$("#homeBar").fadeIn();
		if (mainMenuStatus == 2) {
			$("#homeButton").fadeOut();
		}
	} else if (toStatus==2) {
		$("#homeBar").fadeIn();
		$("#homeButton").fadeIn();
	} else {
		pushInfo(false,"mainUIhandle Error : toStatus undefined.");
	}
	mainMenuStatus = toStatus;
}

function mainOptionsHandle(toStatus){
	if (toStatus==0) {
		if (optionStatus==1) {
			$("#greyMask").fadeOut();
			$("#buttonGround").fadeOut();
			$("#buttonBox").fadeOut();
			optionStatus = 0;
		}
	} else if (toStatus==1){
		if (optionStatus==0) {
			$("#greyMask").fadeIn();
			$("#buttonGround").fadeIn();
			$("#buttonBox").fadeIn();
			optionStatus = 1;
		}
	} else {
		pushInfo(false,"mainOptionsHandle Error : toStatus undefined.");
	}
}

function getRideHandle(toStatus){
	if (toStatus==0) {
		if (getRideStatus==1) {
			$("#getRidePanel").slideUp();
			getRideStatus = 0;
		}
	} else if (toStatus==1){
		if (getRideStatus==0) {
			$("#getRidePanel").slideDown();
			getRideStatus = 1;
			$("#globalCancelButton").fadeIn();
		}
	} else {
		pushInfo(false,"getRideHandle Error : toStatus undefined.");
	}
}

function getRideDriverHandle(toStatus){
	if (toStatus==0) {
		$("#getRideDriverPanel").fadeOut("fast");
	} else if (toStatus==1) {
		$("#getRideDriverPanel").fadeOut("fast");
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
			//console.log(data);
			$("#getRiderDriverImagePic").attr("src",data.results[0].picture.large);
			$("#getRideDriverInfo").html(
				"Available Driver! </br></br>" + 
				data.results[0].name.first.toUpperCase() + " " + data.results[0].name.last.toUpperCase() + "</br>" +
				"Tel: " + data.results[0].cell + "</br>" +
				"Driver Skill Rating : " + Math.floor(Math.random() * 100) + "/100" + "</br>" +
				"Credits Needed : " + Math.floor(travelDistance/100) + "/" + credits
				);
			$("#getRideDriverPanel").fadeIn();
		}
	});
	} else {
		pushInfo(false,"getRideDriverHandle Error : toStatus undefined.");
	}
}

function giveRideHandle(toStatus){
	if (toStatus==0) {
		if (giveRideStatus==1) {
			$("#giveRidePanel").slideUp();
			giveRideStatus = 0;
		}
	} else if (toStatus==1){
		if (giveRideStatus==0) {
			$("#giveRidePanel").slideDown();
			giveRideStatus = 1;
			$("#globalCancelButton").fadeIn();
		}
	} else {
		pushInfo(false,"giveRideHandle Error : toStatus undefined.");
	}
}

function giveRidePassengerHandle(toStatus){
	if (toStatus==0) {
		$("#giveRidePassengerPanel").fadeOut("fast");
	} else if (toStatus==1) {
		$("#giveRidePassengerPanel").fadeOut("fast");
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
			//console.log(data);
			creditEarn = Math.floor(travelDistance/100*Math.random());
			$("#giveRidePassengerImagePic").attr("src",data.results[0].picture.large);
			$("#giveRidePassengerInfo").html(
				"Available Passenger! </br>" + 
				data.results[0].name.first.toUpperCase() + " " + data.results[0].name.last.toUpperCase() + "</br>" +
				"Passenger attitude rating : " + Math.floor(Math.random() * 100) + "/100" + "</br>" +
				"Credits Earn : " + creditEarn + "/" + Math.floor(travelDistance/100) + "</br>"
				);
			if (creditEarn < Math.floor(travelDistance/100) * (1/3)) {
				$("#giveRidePassengerInfo").append("Need a Short Ride");
			} else if (creditEarn < Math.floor(travelDistance/100) * (2/3)){
				$("#giveRidePassengerInfo").append("Need a Long Ride");
			} else {
				$("#giveRidePassengerInfo").append("Need a Full Ride");
			}
			$("#giveRidePassengerPanel").fadeIn();
		}
	});
	} else {
		pushInfo(false,"giveRideDriverHandle Error : toStatus undefined.");
	}
}

function myProfileHandle(toStatus){
	if (toStatus==1)	{
		$("#myProfilePanel").slideDown();
		$("#myProfileButtonPanel").fadeIn();
		$("#myProfilePanel p").html(
			username + "</br></br>" +
			"Available Credits : " + credits + "</br>" +
			"Traveled Distance : " + totalMilelage  + " m.</br>" +
			"Average Rating : " + averageRating + "/100 </br>"
		);
	} else {
		$("#myProfilePanel").slideUp();
		$("#myProfileButtonPanel").fadeOut();
	}
}

function myProfileCreditHandle(toStatus){
	if (toStatus==1) {
		creditStatus = 1;
		$("#myProfileCreditPanel").slideDown();
	} else {
		creditStatus = 0;
		$("#myProfileCreditPanel").slideUp();
	}
}

//0-Close 1-First Page 2-Next Page
function aboutHandle(toStatus){
	if (toStatus==1) {
		$("#aboutPanel").slideDown();
		aboutCurrentPage = 1;
		$("#aboutContent").html(
			"U-Ride is a multi-platform e-commerce application. </br></br>" +
			"By using U-Ride Credits, you can get a ride or give a ride. </br></br>" +
			"U-Ride Credits are tradable, but selling it only worth 2/3 of buying it</br></br>" +
			"U-Ride is created for protecting us from air pollution.</br></br>" +
			"chenglin.lu217@myci.csuci.edu</br>" +
			"jason.lara798@myci.csuci.edu"
		);
	} else if (toStatus==2) {

		if (aboutCurrentPage == 1) {
			aboutCurrentPage = 2;
			$("#aboutContent").html(
				"Get A Ride" + "</br></br>" +
				"1. Click the “U” from the home screen" + "</br></br>" +
				"2. Then click on get a ride" + "</br></br>" +
				"3. If your location services are enabled, there is no need to enter your location in “From” field" + "</br></br>" +
				"4. Enter your destination in the “To” field" + "</br></br>" +
				"5. Click “Get me a Ride”" + "</br></br>" +
				"6. You will have the option to “Accept”,” Next” or “Quit”"
			);
		} else if (aboutCurrentPage == 2) {
			aboutCurrentPage = 3;
			$("#aboutContent").html(
				"Give A Ride" + "</br></br>" +
				"1.Click the “U” from the home screen" + "</br></br>" +
				"2.Then click on “Give” a ride" + "</br></br>" +
				"3.If your location services are enabled, there is no need to enter your location in “From” field" + "</br></br>" +
				"4.Enter your destination in the “To” field" + "</br></br>" +
				"5.Click “Carpool It!”" + "</br></br>" +
				"6.You will have the option to “Accept”, “Next” or “Quit”"
			);
		} else if (aboutCurrentPage == 3) {
			aboutCurrentPage = 4;
			$("#aboutContent").html(
				"View your Account" + "</br></br>" +
				"1.Click the “U” from the home screen" + "</br></br>" +
				"2.Click “My Profile”"
			);
		} else if (aboutCurrentPage == 4) {
			aboutCurrentPage = 5;
			$("#aboutContent").html(
				"Purchasing or Selling credits" + "</br></br>" +
				"Click the “U” from the home screen" + "</br></br>" +
				"Click “My Profile”" + "</br></br>" +
				"Click “Credits”" + "</br></br>" +
				"Enter amount" + "</br></br>" +
				"Click either “Sell” or “Buy”"
			);
		} else {
			aboutHandle(1);
		}

	} else {
		$("#aboutPanel").slideUp();
	}
}

function loginHandle(toStatus){
	if (toStatus==1) {
		$("#loginPanel").slideDown();
	} else {
		$("#loginPanel").slideUp();
	}
}
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
		}
	} else {
		pushInfo(false,"giveRideHandle Error : toStatus undefined.");
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
				"Driver Found! </br></br>" + 
				data.results[0].name.first.toUpperCase() + " " + data.results[0].name.last.toUpperCase() + "</br>" +
				"Tel: " + data.results[0].cell + "</br>" +
				"Overall Rating : " + Math.floor(Math.random() * 100) + "/100" + "</br>" +
				"Credits Needed : " + Math.floor(travelDistance/100) + "/" + credits
				);
			$("#getRideDriverPanel").fadeIn();
		}
	});
	} else {
		pushInfo(false,"getRideDriverHandle Error : toStatus undefined.");
	}
}
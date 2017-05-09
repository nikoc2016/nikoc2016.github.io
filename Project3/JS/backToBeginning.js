//Initialization
var navAnimation = 0;
var animation = 0;
$(document).ready(function(){
	changeLOGO(1);
	navAnimation = setInterval(animateNav,10);
});

var animateFrames = 1;

//LOGO Animation manager
function changeLOGO(logoType=1){
	console.log("changeLOGO Called");

	document.getElementById("bigLOGO").style.fontSize = "10px";
	document.getElementById("bigLOGO").style.marginTop = "20px";
	var LOGO = "";
	if (logoType==1) {
		clearInterval(animation);
		animation = setInterval(animateText,100);
		$("#headerPanel div").css({"backgroundColor":"#6ceda7"});
	} else if (logoType==2){
		clearInterval(animation);
		animation = setInterval(animateM4A1,50);
		$("#headerPanel div").css({"backgroundColor":"#6cbaa7"});
	}
}


function animateText() {
	if (animateFrames == 15) {
		document.getElementById("bigLOGO").style.color = "red";
		document.getElementById("bigLOGO").innerHTML = [
			"`7MN.   `7MF\' db `7MM                 .g8\"\"\"bgd    `7MM\"\"\"Mq.                           `7MM              mm     db                     ",
			"MMN.    M        MM               .dP\'     `M      MM   `MM.                            MM              MM                            ",
			"M YMb   M `7MM   MM  ,MP\',pW\"Wq.  dM\'       `      MM   ,M9  .gP\"Ya `7M\'   `MF\',pW\"Wq.  MM `7MM  `7MM mmMMmm `7MM  ,pW\"Wq.`7MMpMMMb.  ",
			"  M  `MN. M   MM   MM ;Y  6W\'   `Wb MM               MMmmdM9  ,M\'   Yb  VA   ,V 6W\'   `Wb MM   MM    MM   MM     MM 6W\'   `Wb MM    MM  ",
			"    M   `MM.M   MM   MM;Mm  8M     M8 MM.              MM  YM.  8M\"\"\"\"\"\"   VA ,V  8M     M8 MM   MM    MM   MM     MM 8M     M8 MM    MM  ",
			"    M     YMM   MM   MM `Mb.YA.   ,A9 `Mb.     ,\'      MM   `Mb.YM.    ,    VVV   YA.   ,A9 MM   MM    MM   MM     MM YA.   ,A9 MM    MM  ",
			".JML.    YM .JMML.JMML. YA.`Ybmd9\'    `\"bmmmd\'     .JMML. .JMM.`Mbmmd\'     W     `Ybmd9\'.JMML. `Mbod\"YML. `Mbmo.JMML.`Ybmd9\'.JMML  JMML."
		].join("\n");
		animateFrames ++;
	} else if (animateFrames == 16) {
		document.getElementById("bigLOGO").style.color = "white";
		document.getElementById("bigLOGO").innerHTML = [
			"`7MN.   `7MF\' db `7MM                 .g8\"\"\"bgd    `7MM\"\"\"Mq.                           `7MM              mm     db                     ",
			"   MMN.    M        MM               .dP\'     `M      MM   `MM.                            MM              MM                            ",
			"  M YMb   M `7MM   MM  ,MP\',pW\"Wq.  dM\'       `      MM   ,M9  .gP\"Ya `7M\'   `MF\',pW\"Wq.  MM `7MM  `7MM mmMMmm `7MM  ,pW\"Wq.`7MMpMMMb.  ",
			"  M  `MN. M   MM   MM ;Y  6W\'   `Wb MM               MMmmdM9  ,M\'   Yb  VA   ,V 6W\'   `Wb MM   MM    MM   MM     MM 6W\'   `Wb MM    MM  ",
			" M   `MM.M   MM   MM;Mm  8M     M8 MM.              MM  YM.  8M\"\"\"\"\"\"   VA ,V  8M     M8 MM   MM    MM   MM     MM 8M     M8 MM    MM  ",
			"  M     YMM   MM   MM `Mb.YA.   ,A9 `Mb.     ,\'      MM   `Mb.YM.    ,    VVV   YA.   ,A9 MM   MM    MM   MM     MM YA.   ,A9 MM    MM  ",
			" .JML.    YM .JMML.JMML. YA.`Ybmd9\'    `\"bmmmd\'     .JMML. .JMM.`Mbmmd\'     W     `Ybmd9\'.JMML. `Mbod\"YML. `Mbmo.JMML.`Ybmd9\'.JMML  JMML."
		].join("\n");
		animateFrames ++;
	} else if (animateFrames == 17) {
		document.getElementById("bigLOGO").style.color = "white";
		document.getElementById("bigLOGO").innerHTML = [
			"       `7MN.   `7MF\' db `7MM                 .g8\"\"\"bgd    `7MM\"\"\"Mq.                           `7MM              mm     db                     ",
			"MMN.    M        MM               .dP\'     `M      MM   `MM.                            MM              MM                            ",
			"M YMb   M `7MM   MM  ,MP\',pW\"Wq.  dM\'       `      MM   ,M9  .gP\"Ya `7M\'   `MF\',pW\"Wq.  MM `7MM  `7MM mmMMmm `7MM  ,pW\"Wq.`7MMpMMMb.  ",
			"  M  `MN. M   MM   MM ;Y  6W\'   `Wb MM               MMmmdM9  ,M\'   Yb  VA   ,V 6W\'   `Wb MM   MM    MM   MM     MM 6W\'   `Wb MM    MM  ",
			"       M   `MM.M   MM   MM;Mm  8M     M8 MM.              MM  YM.  8M\"\"\"\"\"\"   VA ,V  8M     M8 MM   MM    MM   MM     MM 8M     M8 MM    MM  ",
			"       M     YMM   MM   MM `Mb.YA.   ,A9 `Mb.     ,\'      MM   `Mb.YM.    ,    VVV   YA.   ,A9 MM   MM    MM   MM     MM YA.   ,A9 MM    MM  ",
			".JML.    YM .JMML.JMML. YA.`Ybmd9\'    `\"bmmmd\'     .JMML. .JMM.`Mbmmd\'     W     `Ybmd9\'.JMML. `Mbod\"YML. `Mbmo.JMML.`Ybmd9\'.JMML  JMML."
		].join("\n");
		animateFrames ++;
	} else if (animateFrames == 18) {
		document.getElementById("bigLOGO").style.color = "white";
		document.getElementById("bigLOGO").innerHTML = [
			"`7MN.   `7MF\' db `7MM                 .g8\"\"\"bgd    `7MM\"\"\"Mq.                           `7MM              mm     db                     ",
			"         MMN.    M        MM               .dP\'     `M      MM   `MM.                            MM              MM                            ",
			"  M YMb   M `7MM   MM  ,MP\',pW\"Wq.  dM\'       `      MM   ,M9  .gP\"Ya `7M\'   `MF\',pW\"Wq.  MM `7MM  `7MM mmMMmm `7MM  ,pW\"Wq.`7MMpMMMb.  ",
			"         M  `MN. M   MM   MM ;Y  6W\'   `Wb MM               MMmmdM9  ,M\'   Yb  VA   ,V 6W\'   `Wb MM   MM    MM   MM     MM 6W\'   `Wb MM    MM  ",
			" M   `MM.M   MM   MM;Mm  8M     M8 MM.              MM  YM.  8M\"\"\"\"\"\"   VA ,V  8M     M8 MM   MM    MM   MM     MM 8M     M8 MM    MM  ",
			"           M     YMM   MM   MM `Mb.YA.   ,A9 `Mb.     ,\'      MM   `Mb.YM.    ,    VVV   YA.   ,A9 MM   MM    MM   MM     MM YA.   ,A9 MM    MM  ",
			"   .JML.    YM .JMML.JMML. YA.`Ybmd9\'    `\"bmmmd\'     .JMML. .JMM.`Mbmmd\'     W     `Ybmd9\'.JMML. `Mbod\"YML. `Mbmo.JMML.`Ybmd9\'.JMML  JMML."
		].join("\n");
		animateFrames ++;
	} else {
		document.getElementById("bigLOGO").style.color = "#26be47";
		document.getElementById("bigLOGO").innerHTML = [
			"`7MN.   `7MF\' db `7MM                 .g8\"\"\"bgd    `7MM\"\"\"Mq.                           `7MM              mm     db                     ",
			"  MMN.    M        MM               .dP\'     `M      MM   `MM.                            MM              MM                            ",
			"  M YMb   M `7MM   MM  ,MP\',pW\"Wq.  dM\'       `      MM   ,M9  .gP\"Ya `7M\'   `MF\',pW\"Wq.  MM `7MM  `7MM mmMMmm `7MM  ,pW\"Wq.`7MMpMMMb.  ",
			"  M  `MN. M   MM   MM ;Y  6W\'   `Wb MM               MMmmdM9  ,M\'   Yb  VA   ,V 6W\'   `Wb MM   MM    MM   MM     MM 6W\'   `Wb MM    MM  ",
			"  M   `MM.M   MM   MM;Mm  8M     M8 MM.              MM  YM.  8M\"\"\"\"\"\"   VA ,V  8M     M8 MM   MM    MM   MM     MM 8M     M8 MM    MM  ",
			"  M     YMM   MM   MM `Mb.YA.   ,A9 `Mb.     ,\'      MM   `Mb.YM.    ,    VVV   YA.   ,A9 MM   MM    MM   MM     MM YA.   ,A9 MM    MM  ",
			".JML.    YM .JMML.JMML. YA.`Ybmd9\'    `\"bmmmd\'     .JMML. .JMM.`Mbmmd\'     W     `Ybmd9\'.JMML. `Mbod\"YML. `Mbmo.JMML.`Ybmd9\'.JMML  JMML."
		].join("\n");
		if (animateFrames>18) {
			animateFrames = 1;
		} else {
			animateFrames++;
		}
	}
}

function animateM4A1() {
	console.log("frames : " + animateFrames);
	if (animateFrames <= 5) {
		document.getElementById("bigLOGO").style.color = "#7fdd9f";
		document.getElementById("bigLOGO").innerHTML = [
			"                           ______                ",
			"        |\\_______________ (_____\\\\______________ ",
			"HH======#H###############H#######################",
			"        \' ~\"\"\"\"\"\"\"\"\"\"\"\"\"\"`##(_))#H\\\"\"\"\"\"Y########",
			"                         /##/   \\#H\\       `\"Y###",
			"                        /##/     }#H)            ",
			"                        ===                      "
		].join("\n");
		animateFrames++;
	} else if (animateFrames <= 20 && animateFrames % 2 == 1) {
		document.getElementById("bigLOGO").style.color = "#FF0000";
		document.getElementById("bigLOGO").innerHTML = [
			"                                     ______                ",
			"       \\\\\\\\\\      |\\_______________ (_____\\\\______________ ",
			"--==(((   HH======#H###############H#######################",
			"       /////      \' ~\"\"\"\"\"\"\"\"\"\"\"\"\"\"`##(_))#H\\\"\"\"\"\"Y########",
			"                                   /##/   \\#H\\       `\"Y###",
			"                                  /##/     }#H)            ",
			"                                  ===                      "
		].join("\n");
		animateFrames++;
	} else if (animateFrames <= 20 && animateFrames % 2 == 0) {
		document.getElementById("bigLOGO").style.color = "#7fdd9f";
		document.getElementById("bigLOGO").innerHTML = [
			"                           ______                ",
			"        |\\_______________ (_____\\\\______________ ",
			"HH======#H###############H#######################",
			"        \' ~\"\"\"\"\"\"\"\"\"\"\"\"\"\"`##(_))#H\\\"\"\"\"\"Y########",
			"                         /##/   \\#H\\       `\"Y###",
			"                        /##/     }#H)            ",
			"                        ===                      "
		].join("\n");
		animateFrames++;
	} else {
		document.getElementById("bigLOGO").style.color = "#7fdd9f";
		document.getElementById("bigLOGO").innerHTML = [
			"                           ______                ",
			"        |\\_______________ (_____\\\\______________ ",
			"HH======#H###############H#######################",
			"        \' ~\"\"\"\"\"\"\"\"\"\"\"\"\"\"`##(_))#H\\\"\"\"\"\"Y########",
			"                         /##/   \\#H\\       `\"Y###",
			"                        /##/     }#H)            ",
			"                        ===                      "
		].join("\n");
		animateFrames = 1;
	}
}

//Nav Animation Memory
var navAnimateFrames = 1;
var navAnimateIndex = 0;

function animateNav() {

	var navDrawpad = document.getElementById("navTitle");
	navDrawpad.style.fontSize = "40px";
	navDrawpad.style.color = "#AAFFAA";
	//20 ways to say HI
	var emojiLibrary = [
		"Hello",
		"你好",
		"Bonjour",
		"Hallo",
		"Ciao",
		"こんにちは",
		"Hola"
	]

	if (navAnimateFrames<=100){
		navDrawpad.innerHTML = emojiLibrary[navAnimateIndex];
		navDrawpad.style.opacity = ( navAnimateFrames - 1 ) / 100;
	} else if (navAnimateFrames<=300) {
		navDrawpad.style.opacity = 1;
	} else if (navAnimateFrames<=400) {
		navDrawpad.style.opacity = 1 - ((navAnimateFrames - 300) / 100);
	} else if (navAnimateFrames>400) {
		navAnimateFrames=0;
		if (navAnimateIndex < 6) {
			navAnimateIndex++;
		} else navAnimateIndex = 0;
	}
	navAnimateFrames++;
}
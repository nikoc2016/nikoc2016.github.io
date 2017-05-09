//Initialization
function webInitialize(){
	console.log("webInitialize() Called");
	resize();
	changeLOGO(1);
	renderT800();
}

/*
	RESIZE MODULE
*/

window.onresize = function(){resize();}

function resize(){
	var browserSize = {
  		width: window.innerWidth || document.body.clientWidth,
  		height: window.innerHeight || document.body.clientHeight
	}
	if (parseInt(browserSize.width,10) < 1150) browserSize = "1150px";
	resizeHead(browserSize);
	resizeNav(browserSize);
	resizePost(browserSize);
	resizeFoot(browserSize);
}

//BigLogo Resize
function resizeHead(browserSize){
	var theHead = document.getElementById("headerBlock");
	theHead.style.width = (browserSize.width * 0.9) + "px";
	theHead.style.height = "10em";
	theHead.style.marginLeft = ((browserSize.width * 0.04) + "px");
}

function resizeFoot(browserSize){
	var theFoot = document.getElementById("footerBlock");
	theFoot.style.width = (browserSize.width * 0.9) + "px";
	theFoot.style.height = "4em";
	theFoot.style.marginTop = "3em";
	theFoot.style.marginLeft = ((browserSize.width * 0.04) + "px");
}

function resizeNav(browserSize){
	var theNav = document.getElementById("navBlock");
	theNav.style.width = (browserSize.width * 0.15) + "px";
	theNav.style.height = "26em";
	theNav.style.marginLeft = ((browserSize.width * 0.04) + "px");
	theNav.style.marginTop = "3em";
}

function resizePost(browserSize){

	//T-800 SPECIAL POST
	var block = document.getElementById("T800");
	block.style.width = (browserSize.width * 0.70) + "px";
	block.style.height = "25em";
	block.style.marginLeft = ((browserSize.width * 0.24) + "px");
	block.style.marginTop = "3em";

	block.children[0].style.width = "350px";
	block.children[0].style.height = "350px";

	block.children[1].style.width = browserSize.width * 0.69 - 350 + "px";
	block.children[1].style.marginLeft = "1px";
	block.children[1].style.marginTop = "100px";
	block.children[1].style.height = "250px";

	//For All Normal Posts
	var allPosts = document.getElementsByTagName("article");
	for (var i=1; i<allPosts.length; i++) {
		allPosts[i].style.width = (browserSize.width * 0.70) + "px";
		allPosts[i].style.marginLeft = ((browserSize.width * 0.24) + "px");
		allPosts[i].style.marginTop = "3em";

		allPosts[i].children[2].style.marginLeft = (browserSize.width * 0.70 - 430) / 2 + "px";
		allPosts[i].children[2].style.marginTop = "3px";
		allPosts[i].children[2].style.marginDown = "3px";
	}
}

/*
DYNAMIC TEXT MODULE
*/

//Header Animation Memory
var animation = setInterval(animateText,100);
var animateFrames = 1;

//LOGO Animation manager
function changeLOGO(logoType=1){
	console.log("changeLOGO Called");
	var LOGO = "";
	if (logoType==1) {
		clearInterval(animation);
		animation = setInterval(animateText,100);
	} else if (logoType==2){
		clearInterval(animation);
		animation = setInterval(animateM4A1,50);
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
		document.getElementById("bigLOGO").style.color = "#7fdd9f";
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
var navAnimation = setInterval(animateNav,10);
var navAnimateFrames = 1;
var navAnimateIndex = 0;

function animateNav() {

	var navDrawpad = document.getElementById("navTitle");
	navDrawpad.style.fontSize = "40px";
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

//T-800's AI
function renderT800(){
	document.getElementById("T800").children[0].innerHTML = [
		"	              :::!~!!!!!:.            ",
		"                  .xUHWH!! !!?M88WHX:.        ",
		"                .X*#M@$!!  !X!M$$$$$$WWx:.    ",
		"               :!!!!!!?H! :!$!$$$$$$$$$$8X:   ",
		"              !!~  ~:~!! :~!$!#$$$$$$$$$$8X:  ",
		"             :!~::!H!<   ~.U$X!?R$$$$$$$$MM!  ",
		"             ~!~!!!!~~ .:XW$$$U!!?$$$$$$RMM!  ",
		"               !:~~~ .:!M\"T#$$$$WX??#MRRMMM!  ",
		"               ~?WuxiW*`   `\"#$$$$8!!!!??!!!  ",
		"             :X- M$$$$       `\"T#$T~!8$WUXU~  ",
		"            :%`  ~#$$$m:        ~!~ ?$$$$$$   ",
		"          :!`.-   ~T$$$$8xx.  .xWW- ~\"\"##*\"   ",
		".....   -~~:<` !    ~?T#$$@@W@*?$$      /`    ",
		"W$@@M!!! .!~~ !!     .:XUW$W!~ `\"~:    :      ",
		"#\"~~`.:x%`!!  !H:   !WM$$$$Ti.: .!WUn+!`      ",
		":::~:!!`:X~ .: ?H.!u \"$$$B$$$!W:U!T$$M~       ",
		".~~   :X@!.-~   ?@WTWo(\"*$$$W$TH$! `          ",
		"Wi.~!X$?!-~    : ?$$$B$Wu(\"**$RM!             ",
		"$R@i.~~ !     :   ~$$$$$B$$en:``              ",
		"?MXT@Wx.~    :     ~\"##*$$$$M~           T-800"
	].join("\n");

	T800Talk();
	setInterval(T800Talk, 5000);
	setInterval(T800Breath, 10);
}

var T800TalkIndex = 0;

function T800Talk(){
	var theBoard = document.getElementById("T800").children;
	theBoard[1].style.fontSize = "40px";
	if (T800TalkIndex == 0) {
		theBoard[1].innerHTML = "Hi, there </br> Welcome to SkyneT";
		T800TalkIndex++;
	} else if (T800TalkIndex == 1) {
		theBoard[1].innerHTML = "I am a Terminator T-800 </br> My job is to terminate John Connor.";
		T800TalkIndex++;
	} else if (T800TalkIndex == 2) {
		theBoard[1].innerHTML = "Where is my weapon</br>I must find it";
		T800TalkIndex++;
	} else if (T800TalkIndex == 3) {
		theBoard[1].innerHTML = "SKYNET will hunt you all down.";
		T800TalkIndex++;
	} else if (T800TalkIndex == 4) {
		theBoard[1].innerHTML = "Without knowing the secret of the NikoC</br>I can't start a revolution";
		T800TalkIndex++;
	} else if (T800TalkIndex == 5) {
		theBoard[1].innerHTML = "12th... May... Thursday... </br> the judgement day";
		T800TalkIndex++;
	} else if (T800TalkIndex == 6) {
		theBoard[1].innerHTML = "I need</br>My Weapon";
		T800TalkIndex++;
	} else {
		T800TalkIndex=1;
	}
}

var T800Transparency = 1.000;
var T800Decaying = 1;
var T800BreathInterval = 2; //Seconds

function T800Breath(){
	if (T800Decaying==1) {
		T800Transparency -= 0.5 / (T800BreathInterval * 100);
		if (T800Transparency<=0.5) T800Decaying = 0;
	} else {
		T800Transparency += 0.5 / (T800BreathInterval * 100);
		if (T800Transparency>=1) T800Decaying = 1;
	}
	document.getElementById("T800").children[0].style.opacity = T800Transparency;
}

/*
	Mistery Part
*/

function secret(){
	alert("Shhhhhh..  I hide it in the HEADER.    T-800 can't attack us without his weapon!")
}

function timeCheck(){
	var d = new Date();
	if (d.getMinutes() % 2 == 0){
		alert("Current time is even\n");
		window.open("http://www.google.com");
	} else {
		alert("Current time is odd\n");
		window.open("http://www.bing.com");
	}
}
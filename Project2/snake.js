//A Sleep Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Random int generator W3C School
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//=================================================

//SNAKE GAME
//These codes are purely hand-typed by CHENGLIN LU.
//Feel free to upgrade, modify it.

//=================================================

//Global Variables
var engine = {

	//Engine Variables
	gameOn: false,
	gameScore: 0,

	//multiplers
	speed: 1,                  //Snake speed
	snakeSize: 10,             //Snake intial length
	foodAmount: 8,             //Total foods
	snakeGrowth: 30,            //How long does snake grow when eat one food.

	//SnakeDirections
	//2.DOWN 4:LEFT 6:RIGHT 8.UP 
	snakeFaceTo: 2,              //Direction of snake facing to
	snakeDirection: 2,           //Direction for snake to go

	//Linklists (Every Node has x,y information)
	snake: [{x:0,y:0}],
	foods: [{x:0,y:0}],

	//Handles
	looper: undefined,         //Stores the setInterval object.
	CGlooper: undefined,

	//snake increase
	increase: 0
};


function snakeInit(){

	//BIND KEYS
	//WASD or Arrows to move snake.
	//E or Enter to start game.

	$('html').keydown(function(e){
       if (e.which == 37 || e.which == 65) {
       	engine.snakeDirection = 4;
       }else if(e.which == 38 || e.which == 87){
       	engine.snakeDirection = 8;
       }else if(e.which == 39 || e.which == 68){
       	engine.snakeDirection = 6;
       }else if(e.which == 40 || e.which == 83){
       	engine.snakeDirection = 2;
       }else if(e.which == 13 || e.which == 69){
       	snakeOn();
       }
    });

	//Play CG
    snakeCG();
}

function snakeCG(){
	engine.CGlooper = setInterval(cgRender,10);
}

function pauseCG(){
	clearInterval(engine.CGlooper);
}

function cgRender(){
	var dotx = getRandomInt(0,49);
	var doty = getRandomInt(0,49);
	var dotopacity = 1 / getRandomInt(1,10);
	drawPixel(dotx,doty,dotopacity);
}

//Inits and starts the game
async function snakeOn(){
	if (engine.gameOn==false){
		engine.gameOn=true;
		engine.gameScore = 0;

		//CG stops and fade out
		pauseCG();
		await clearScreenCG(1);

		//Init Snake
		engine.snake = [{x:24,y:0}];
		for (var i=1;i<engine.snakeSize;i++){
			var newNode = {x:24,y:i};
			engine.snake.push(newNode);
		}
		engine.snake.reverse();

		//Init Food
		engine.foods = [{x:24,y:24}];
		for (var i=1;i<engine.foodAmount;i++){
			var validFood;
			var newNode;
			do{
				validFood = true;
				newNode = {x:0,y:0};
				newNode.x = getRandomInt(0,49);
				newNode.y = getRandomInt(0,49);
				for (var j=0;j<engine.snake.length;j++){
					if (newNode.x == engine.snake[j].x && newNode.y == engine.snake[j].y){
						validFood = false;
					}
				}
				for (var j=0;j<engine.foods.length;j++){
					if (newNode.x == engine.foods[j].x && newNode.y == engine.foods[j].y){
						validFood = false;
					}
				}
			}while(validFood == false);
			engine.foods.push(newNode);
		}

		//Launch Loop
		engine.looper = setInterval(snakeGo, 100 * engine.speed);
	}
}

//Ends the game and play the idle CG
async function snakeGameOff(){
	if (engine.gameOn==true){
		engine.gameOn=false;
		$(".snakePixel").css({"backgroundColor":"red"});
		clearInterval(engine.looper);
		await clearScreenCG(1);
		$(".snakePixel").css({"backgroundColor":"white"});
		snakeCG();
	}
}

function snakeGo(){

	//Updates the Score
	$("#snakeScore").html("Scores: " + engine.gameScore);

	//Possible Results
	var foodEat = false;
	var biteSelf = false;
	var wallhit = false;

	//Indentify Snake facing direction
	snakeFaceDirection();

	//Reverse Snake Feature
	var bodyDirection = 0;
	if (engine.snakeFaceTo==2) bodyDirection=8;
	else if (engine.snakeFaceTo==8) bodyDirection=2;
	else if (engine.snakeFaceTo==4) bodyDirection=6;
	else if (engine.snakeFaceTo==6) bodyDirection=4;
	if (bodyDirection == engine.snakeDirection) {
		engine.snake.reverse();
		snakeFaceDirection();
		engine.snakeDirection = engine.snakeFaceTo;
	}

	//New Snake Node
	var snakeNew = {x:0,y:0};
	snakeNew.x = engine.snake[0].x;
	snakeNew.y = engine.snake[0].y;

	console.log(engine.snakeDirection);
	if (engine.snakeDirection==2) snakeNew.y++;
	else if (engine.snakeDirection==8) snakeNew.y--;
	else if (engine.snakeDirection==4) snakeNew.x--;
	else if (engine.snakeDirection==6) snakeNew.x++;

	//Check if bite itself
	for (var i=0;i<engine.snake.length;i++){
		if (snakeNew.x==engine.snake[i].x && snakeNew.y==engine.snake[i].y){
			biteSelf = true;
		}
	}

	//Check if hits wall
	if (snakeNew.x > 49 || snakeNew.x < 0 || snakeNew.y > 49 || snakeNew.y < 0){
		wallhit = true;
		engine.snake.reverse();
		snakeFaceDirection();
		engine.snakeDirection = engine.snakeFaceTo;
	}

	//Check if eats food
	for (var i=0;i<engine.foodAmount;i++){
		if (snakeNew.x == engine.foods[i].x && snakeNew.y == engine.foods[i].y){

			//Food Eat Detected.
			foodEat = true;
			engine.increase += 3;
			engine.gameScore++;

			//Create New Food.
			var validFood;
			var newNode;
			do{
				validFood = true;
				newNode = {x:0,y:0};
				newNode.x = getRandomInt(0,49);
				newNode.y = getRandomInt(0,49);
				for (var j=0;j<engine.snake.length;j++){
					if (newNode.x == engine.snake[j].x && newNode.y == engine.snake[j].y){
						validFood = false;
					}
				}
				for (var j=0;j<engine.foods.length;j++){
					if (newNode.x == engine.foods[j].x && newNode.y == engine.foods[j].y){
						validFood = false;
					}
				}
			}while(validFood == false);
			engine.foods[i].x = newNode.x;
			engine.foods[i].y = newNode.y;
 		}
	}

	//Snake Goes
	if (wallhit!=true){
		engine.snake.unshift(snakeNew);
	}

	//Erase tail
	if (wallhit == false && engine.increase==0){
		engine.snake.pop();
	}

	//Expire snake growth
	if(engine.increase != 0){
		engine.increase--;
	}

	//Draw Frame
	clearScreen();
	drawSnake();
	drawFood();

	//If snake bites itself
	if (biteSelf==true) {
		snakeGameOff();
	}
}

function drawPixel(x,y,opacity){
	$("#PIXEL-" + x + "-" + y).css({"opacity":opacity});
}

function drawSnake(){
	var opacityUpperBound = 0.8;
	var opacityLowerBound = 0.3;
	var opacityDecay = (opacityUpperBound - opacityLowerBound) / engine.snake.length;
	var opacityThisNode = opacityUpperBound;

	//Traverse Snake List
	for (var i=0;i<engine.snake.length;i++){
		drawPixel(engine.snake[i].x,engine.snake[i].y,opacityThisNode);
		opacityThisNode -= opacityDecay;
	}
}

function drawFood(){
	//Traverse Food List
	for (var i=0;i<engine.foods.length;i++){
		drawPixel(engine.foods[i].x,engine.foods[i].y,100);
	}
}

function clearScreen(){
	for(var y=0;y<50;y++){
		for(var x=0;x<50;x++){
			drawPixel(x,y,0);
		}
	}
}

async function clearScreenCG(currentOpacity){
	if (currentOpacity<=0) {return 0;}
	else{
		currentOpacity -= 0.05;
		for(var y=0;y<50;y++){
			for(var x=0;x<50;x++){
				drawPixel(x,y,currentOpacity);
			}
		}
		await sleep(10);
		await clearScreenCG(currentOpacity);
		return 0;
	}
}

//The Direction snake currently face to
function snakeFaceDirection(){
	if (engine.snake[0].x == engine.snake[1].x){
		if (engine.snake[0].y < engine.snake[1].y) engine.snakeFaceTo = 8;
		else engine.snakeFaceTo = 2;
	} else {
		if (engine.snake[0].x < engine.snake[1].x) engine.snakeFaceTo = 4;
		else engine.snakeFaceTo = 6;
	}
}
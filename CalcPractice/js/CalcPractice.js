var first_num = 0.0
var final_num = 0.0
var true_answer = 0.0
var user_answer = 0.0
var operator = "+"

var stat_total_questions = 0
var stat_correct_questions = 0

function randchoice(min, max){
	return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

function randint(digits=1){

	if (digits==0) {
		return 0
	}

	var target_num = 0
	var verification = ""
	var deadloop_max = 1000
	var deadloop_idx = 0

	do {
		if (deadloop_idx > deadloop_max) {
			console.log("randint() deadloop protection: digits=" + digits)
			break
		}
		deadloop_idx ++
		rand_float = Math.random()
		target_num = Math.floor(rand_float * Math.pow(10, digits))
		verification = target_num.toString()
	} while (verification.length != digits)

	return target_num
}

function randfloat(digits=1){

	if (digits==0) {
		return 0
	}

	var target_num = 0.0
	var verification = ""
	var deadloop_max = 1000
	var deadloop_idx = 0

	do {
		if (deadloop_idx > deadloop_max) {
			console.log("randfloat() deadloop protection: digits=" + digits)
			break
		}

		deadloop_idx ++
		rand_float = Math.random()
		target_num = Math.floor(rand_float * Math.pow(10, digits)) / Math.pow(10, digits)
		verification = target_num.toString()
	} while (verification.length != digits + 2)

	return target_num
}

function init_config() {
	$("#FirstIntMinDigits").val(1)
	$("#FirstIntMaxDigits").val(2)
	$("#FirstDecMinDigits").val(0)
	$("#FirstDecMaxDigits").val(0)

	$("#FinalIntMinDigits").val(1)
	$("#FinalIntMaxDigits").val(2)
	$("#FinalDecMinDigits").val(0)
	$("#FinalDecMaxDigits").val(0)
}

function validate_config() {
	var FirstIntMinDigits = Math.floor($("#FirstIntMinDigits").val())
	var FirstIntMaxDigits = Math.floor($("#FirstIntMaxDigits").val())
	var FirstDecMinDigits = Math.floor($("#FirstDecMinDigits").val())
	var FirstDecMaxDigits = Math.floor($("#FirstDecMaxDigits").val())

	var FinalIntMinDigits = Math.floor($("#FinalIntMinDigits").val())
	var FinalIntMaxDigits = Math.floor($("#FinalIntMaxDigits").val())
	var FinalDecMinDigits = Math.floor($("#FinalDecMinDigits").val())
	var FinalDecMaxDigits = Math.floor($("#FinalDecMaxDigits").val())

	function normalize_min_max(min, max) {
		if (min < 0) {
			min = 0
		}

		if (max < 0) {
			max = 0
		}

		if (max < min) {
			max = min
		}

		if (min > max) {
			min = max
		}

		return {
			"min": min,
			"max": max
		}
	}

	var normalized_min_max = {}
	
	normalized_min_max = normalize_min_max(FirstIntMinDigits, FirstIntMaxDigits)
	FirstIntMinDigits = normalized_min_max["min"]
	FirstIntMaxDigits = normalized_min_max["max"]

	normalized_min_max = normalize_min_max(FirstDecMinDigits, FirstDecMaxDigits)
	FirstDecMinDigits = normalized_min_max["min"]
	FirstDecMaxDigits = normalized_min_max["max"]

	normalized_min_max = normalize_min_max(FinalIntMinDigits, FinalIntMaxDigits)
	FinalIntMinDigits = normalized_min_max["min"]
	FinalIntMaxDigits = normalized_min_max["max"]

	normalized_min_max = normalize_min_max(FinalDecMinDigits, FinalDecMaxDigits)
	FinalDecMinDigits = normalized_min_max["min"]
	FinalDecMaxDigits = normalized_min_max["max"]

	$("#FirstIntMinDigits").val(FirstIntMinDigits)
	$("#FirstIntMaxDigits").val(FirstIntMaxDigits)
	$("#FirstDecMinDigits").val(FirstDecMinDigits)
	$("#FirstDecMaxDigits").val(FirstDecMaxDigits)

	$("#FinalIntMinDigits").val(FinalIntMinDigits)
	$("#FinalIntMaxDigits").val(FinalIntMaxDigits)
	$("#FinalDecMinDigits").val(FinalDecMinDigits)
	$("#FinalDecMaxDigits").val(FinalDecMaxDigits)
}

function renew_operator() {
	operator_status = [
		$("#switch_add").is(':checked'),
		$("#switch_minus").is(':checked'),
		$("#switch_times").is(':checked'),
		$("#switch_divide").is(':checked')
	]
	operator_sign = ["+", "-", "*", "/"]

	operator_idx = 0
	do {
		operator_idx = randchoice(0, 3)
	} while (operator_status[operator_idx] != true)

	operator = operator_sign[operator_idx]
}

function renew_nums() {
	validate_config()

	var FirstIntMinDigits = Math.floor($("#FirstIntMinDigits").val())
	var FirstIntMaxDigits = Math.floor($("#FirstIntMaxDigits").val())
	var FirstDecMinDigits = Math.floor($("#FirstDecMinDigits").val())
	var FirstDecMaxDigits = Math.floor($("#FirstDecMaxDigits").val())

	var FinalIntMinDigits = Math.floor($("#FinalIntMinDigits").val())
	var FinalIntMaxDigits = Math.floor($("#FinalIntMaxDigits").val())
	var FinalDecMinDigits = Math.floor($("#FinalDecMinDigits").val())
	var FinalDecMaxDigits = Math.floor($("#FinalDecMaxDigits").val())

	var FirstIntDigits = randchoice(FirstIntMinDigits, FirstIntMaxDigits)
	var FirstDecDigits = randchoice(FirstDecMinDigits, FirstDecMaxDigits)
	var FinalIntDigits = randchoice(FinalIntMinDigits, FinalIntMaxDigits)
	var FinalDecDigits = randchoice(FinalDecMinDigits, FinalDecMaxDigits)

	var FirstInt = randint(FirstIntDigits)
	var FirstDec = randfloat(FirstDecDigits)
	var FinalInt = randint(FinalIntDigits)
	var FinalDec = randfloat(FinalDecDigits)

	first_num = FirstInt + FirstDec
	final_num = FinalInt + FinalDec

	if (operator == "/" && final_num == 0) {
		final_num = 1
	}

	switch(operator)
	{
	    case "+":
	        true_answer = exactMath.add(first_num, final_num)
	        break
	    case "-":
	        true_answer = exactMath.sub(first_num, final_num)
	        break
	    case "*":
	        true_answer = exactMath.mul(first_num, final_num)
	        break
	    case "/":
	        true_answer = exactMath.div(first_num, final_num)
	        break
	    default:
	        console.log("Illegal operator " + operator)
	        break
	}
}

function render_question() {
	var question = first_num + operator + final_num
	$("#question_text").text(question)
}

function prepare_new_question() {
	$("#answer_input").val("")
	renew_operator()
	renew_nums()
	render_question()
	$("#answer_input").focus()
}

function complete_question() {
	stat_total_questions++

	user_answer = $("#answer_input").val()
	if (user_answer == "") {
		user_answer = 0
	}

	var answer_to_compare = 0

	var answer_precision = $("#answer_precision").val()
	if (answer_precision < 0) {
		answer_to_compare = true_answer
	}
	else if (answer_precision > 0) {
		answer_to_compare = exactMath.floor(true_answer, -1 * answer_precision)
	}
	else {
		answer_to_compare = exactMath.floor(true_answer, 1)
	} 

	console.log("Actual answer to compare: " + answer_to_compare)

	var answer_result = false

	if (user_answer == answer_to_compare) {
		stat_correct_questions++
		answer_result = true
	}

	stat_str_previous = ""
	stat_str_previous += "上题: " + first_num + operator + final_num + " "
	stat_str_previous += "正确答案: " + answer_to_compare + " "
	stat_str_previous += "您的答案: " + user_answer + " "
	stat_str_previous += "结论: " + answer_result

	stat_str_all = ""
	stat_str_all += "总数: " + stat_total_questions + " "
	stat_str_all += "正确: " + stat_correct_questions + " "
	stat_str_all += "错误: " + (stat_total_questions - stat_correct_questions) + " "
	stat_str_all += "正确率: " + (Math.floor(stat_correct_questions / stat_total_questions * 100)) + "%"

	$("#stat_previous").html(stat_str_previous)
	$("#stat_all").html(stat_str_all)

	prepare_new_question()
}


$(document).ready(()=>{
	init_config()
	prepare_new_question()

	$("#confirm_button").click(()=>{
		complete_question()
	})
})
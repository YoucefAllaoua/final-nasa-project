let question_number = document.querySelectorAll(".question_number span");
let answers = document.querySelectorAll(".answers .answer");
let question_container = document.querySelector(".question-text");
let confirm_btn = document.querySelector(".confirm-answer");
let index = localStorage.getItem("index");
let clicked = 0 | localStorage.getItem("clicked");
let test = false;
let score = document.querySelector(".scoreValue");
let level = document.querySelector(".level-value");
console.log(score);
let questions = [
	{
		qst: "How many moons does Mars have?",
		answers: [1, 2, 0],
		trueIndex: 1,
		difficulty: 1,
	},
	{
		qst: "How long is a day on Mars?",
		answers: ["24 hours 39 minutes", "24 hours 10 minutes", "23 hours 39 minutes"],
		trueIndex: 0,
		difficulty: 1,
	},
	{
		qst: "What is the gravity on Mars?",
		answers: ["4.7m/s2", "3.7m/s2", "3.3m/s2"],
		trueIndex: 1,
		difficulty: 1,
	},
	{
		qst: "How is the temperature in Mars?",
		answers: ["Hot", "Moderate", "Cold"],
		trueIndex: 2,
		difficulty: 1,
	},
	{
		qst: "What year was Mars discovered?",
		answers: ["1610", "1613", "1608"],
		trueIndex: 0,
		difficulty: 2,
	},
	{
		qst: "What type of planet is Mars?",
		answers: ["Gas giants", "Rocky", "Ice giants"],
		trueIndex: 1,
		difficulty: 2,
	},
	{
		qst: "Mars experiences dust storms ?",
		answers: ["a little", "a lot", "at all"],
		trueIndex: 1,
		difficulty: 2,
	},
	{
		qst: "How much does mars has a kinds of motion?",
		answers: ["1", "2", "3"],
		trueIndex: 1,
		difficulty: 2,
	},
	{
		qst: " Mars name is based on :",
		answers: ["color", "temperature", "size"],
		trueIndex: 0,
		difficulty: 2,
	},
];
function initQstNmber() {
	question_number.forEach((ele) => {
		ele.classList.remove("focused");
	});
	question_number[index].classList.add("focused");
}
initQstNmber();
function updatFields() {
	// add the question text to the element
	question_container.innerText = questions[index].qst;

	// add the answers to the elements
	for (let i = 0; i < answers.length; i++) {
		answers[i].querySelector(".answer-text").innerText = questions[index].answers[i];
	}
}
// initialiwing the score content
score.innerText = 0 | localStorage.getItem("score");
// initialiwing the level content
level.innerText = 0 | localStorage.getItem("level");
updatFields();
// function to remove check from btns :
function removeCheck() {
	answers.forEach((element, index) => {
		element.querySelector(".radio").classList.remove("clicked");
	});
}
// FUNCTION TO GET THE DEFult style of btn
function normlizeBtn() {
	confirm_btn.style.backgroundColor = "#3F69C0";
	confirm_btn.innerText = "Confirm";
}
// check the correct answer :
function checkCorrect(element) {
	answers.forEach((ele) => {
		if (ele.innerText == questions[index].answers[questions[index].trueIndex]) {
			ele.style.backgroundColor = "#5cdb9a";
		}
	});
}
// the number of the question
question_number[index].classList.add("focused");
// add the focus to the chosen answer
answers.forEach((ele, index) => {
	ele.addEventListener("click", (event) => {
		if (document.querySelector(".clicked") && document.querySelector(".clicked").parentElement.querySelector(".answer-text").innerText == ele.innerText) {
			removeCheck();
		} else if (document.querySelector(".clicked")) {
			removeCheck();
			ele.querySelector(".radio").classList.add("clicked");
		} else {
			ele.querySelector(".radio").classList.add("clicked");
		}
	});
});
confirm_btn.addEventListener("click", function () {
	if (document.querySelector(".clicked")) {
		let clicked = document.querySelector(".clicked").getAttribute("data");
		if (confirm_btn.innerText == "Confirm") {
			confirm_btn.innerText = "Continue";
			if (questions[index].answers[questions[index].trueIndex] == answers[clicked].querySelector(".answer-text").innerText) {
				localStorage.setItem("index", index);
				confirm_btn.style.color = "black";
				confirm_btn.style.backgroundColor = "green";
				answers[clicked].style.backgroundColor = "#5cdb9a";
				if (questions[index].difficulty == 1) {
					score.innerText = +score.innerText + 5;
				} else {
					if (questions[index].difficulty == 2) {
						score.innerText = +score.innerText + 10;
					} else {
						score.innerText = +score.innerText + 15;
					}
				}
				level.innerText++;
				localStorage.setItem("level", level.innerText);
				localStorage.setItem("score", score.innerText);
			} else {
				// color the wrong answer
				answers[clicked].style.backgroundColor = "#E66856";
				// color the right answer
				answers.forEach((ele) => {
					if (ele.querySelector(".answer-text").innerText == questions[index].answers[questions[index].trueIndex]) {
						ele.style.backgroundColor = "#5cdb9a";
					}
				});
			}
			index++;
			if (index >= questions.length) {
				index = 0;
			}
		} else {
			answers.forEach((ele) => {
				ele.style.backgroundColor = "#f2e9e9";
			});
			normlizeBtn();
			updatFields();
			removeCheck();
			initQstNmber();
		}
	}
});

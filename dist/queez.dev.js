"use strict";

var question_number = document.querySelectorAll(".question_number span");
var answers = document.querySelectorAll(".answers .answer");
var question_container = document.querySelector(".question-text");
var confirm_btn = document.querySelector(".confirm-answer");
var index = localStorage.getItem("index");
var clicked = 0 | localStorage.getItem("clicked");
var test = false;
var questions = [{
  qst: "How many moons does Mars have?",
  answers: [1, 2, 0],
  trueIndex: 1,
  difficulty: 1
}, {
  qst: "How long is a day on Mars?",
  answers: ["24 hours 39 minutes", "24 hours 10 minutes", "23 hours 39 minutes"],
  trueIndex: 0,
  difficulty: 1
}, {
  qst: "What is the gravity on Mars?",
  answers: ["4.7m/s2", "3.7m/s2", "3.3m/s2"],
  trueIndex: 1,
  difficulty: 1
}, {
  qst: "How is the temperature in Mars?",
  answers: ["Hot", "Moderate", "Cold"],
  trueIndex: 2,
  difficulty: 1
}, {
  qst: "What year was Mars discovered?",
  answers: ["1610", "1613", "1608"],
  trueIndex: 0,
  difficulty: 2
}, {
  qst: "What type of planet is Mars?",
  answers: ["Gas giants", "Rocky", "Ice giants"],
  trueIndex: 1,
  difficulty: 2
}, {
  qst: "Mars experiences dust storms ?",
  answers: ["a little", "a lot", "at all"],
  trueIndex: 1,
  difficulty: 2
}, {
  qst: "How much does mars has a kinds of motion?",
  answers: ["1", "2", "3"],
  trueIndex: 1,
  difficulty: 2
}, {
  qst: " Mars name is based on :",
  answers: ["color", "temperature", "size"],
  trueIndex: 0,
  difficulty: 2
}];

function initQstNmber() {
  question_number.forEach(function (ele) {
    ele.classList.remove("focused");
  });
  question_number[index].classList.add("focused");
}

initQstNmber();

function updatFields() {
  // add the question text to the element
  question_container.innerText = questions[index].qst; // add the answers to the elements

  for (var i = 0; i < answers.length; i++) {
    answers[i].querySelector(".answer-text").innerText = questions[index].answers[i];
  }
}

updatFields(); // function to remove check from btns :

function removeCheck() {
  answers.forEach(function (element, index) {
    element.querySelector(".radio").classList.remove("clicked");
  });
} // FUNCTION TO GET THE DEFult style of btn


function normlizeBtn() {
  confirm_btn.style.backgroundColor = "#3F69C0";
  confirm_btn.innerText = "Confirm";
} // check the correct answer :


function checkCorrect(element) {
  answers.forEach(function (ele) {
    if (ele.innerText == questions[index].answers[questions[index].trueIndex]) {
      ele.style.backgroundColor = "#5cdb9a";
    }
  });
} // the number of the question


question_number[index].classList.add("focused"); // add the focus to the chosen answer

answers.forEach(function (ele, index) {
  ele.addEventListener("click", function (event) {
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
    var _clicked = document.querySelector(".clicked").getAttribute("data");

    if (confirm_btn.innerText == "Confirm") {
      confirm_btn.innerText = "Continue";

      if (questions[index].answers[questions[index].trueIndex] == answers[_clicked].querySelector(".answer-text").innerText) {
        localStorage.setItem("index", index);
        confirm_btn.style.color = "black";
        confirm_btn.style.backgroundColor = "green";
        answers[_clicked].style.backgroundColor = "#5cdb9a";
      } else {
        // color the wrong answer
        answers[_clicked].style.backgroundColor = "red"; // color the right answer

        answers.forEach(function (ele) {
          if (ele.querySelector(".answer-text").innerText == questions[index].answers[questions[index].trueIndex]) {
            ele.style.backgroundColor = "#5cdb9a";
          }
        });
      }

      index++;

      if (index > 5) {
        index = 0;
      }
    } else {
      answers.forEach(function (ele) {
        ele.style.backgroundColor = "#f2e9e9";
      });
      normlizeBtn();
      updatFields();
      removeCheck();
      initQstNmber();
    }
  }
});
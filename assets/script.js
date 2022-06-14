var startBtn = document.querySelector("#startBtn");
var landingPage = document.querySelector("#display");
var questionDisplay = document.querySelector("#hide");
var questionContent = document.querySelector("#questionContent");
var answerContent = document.querySelector("#answerContent");
startBtn.addEventListener("click", getQuestion);

questionDisplay.style.display = "none"

var questionList = [{
    question: "Which of the following is NOT a JavaScript data type?",
    answers: ["Number", "Boolean", "Value", "String"],
    key: "Value"
},
{
    question: "Which symbol is used to create comments in JavaScript?",
    answers: ["*", "/", "?", "<"],
    key: "/"
},
{
    question: "Which symbol is used for strict equality operators?",
    answers: ["===", "==", "+", " &&"],
    key: "==="
},
{
    question: "Which key word cannot be used to create a variable in JavaScript?",
    answers: ["var", "let", "const", "be"],
    key: "be"
},
{
    question: "Which operator is NOT a boolean operator in JavaScript?",
    answers: ["&&", "||", "@", "!"],
    key: "@"
}]

var i = 0;
function getQuestion() {
    // Hide Landing Page 
    landingPage.style.display = "none";
    // Get questions
    questionDisplay.style.display = "block";

    for (let a = 0; a < questionList[i].answers.length; a++) {
        var questions = questionList[i].question;
        var answers = questionList[i].answers[a];
        var answerBtns = document.createElement("button");

        questionContent.innerText = questions;
        answerBtns.innerText = answers;
        answerBtns.addEventListener("click", nextQuestion);
        answerContent.appendChild(answerBtns);        
    }
}

function nextQuestion() {
    // iterate through each question on click 
    i++
    // clear the previous question
    answerContent.innerText = ""
    // Get next question 
    getQuestion();
}


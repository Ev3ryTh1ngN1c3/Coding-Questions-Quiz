let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let next8tn = document.getElementById("next-button");
let countOfQuestion = document.querySelector("*.numer-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector("start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countDown;

//questions & answers
const quizArray = {
    id: "0",
    question: "What tag specifies a section of text in HTML?",
    options: {"<code>", "<caption>", "<p>", "<section>"},
    correct: "<p>"
}
{
    id: "1"
    question: "What is the most important CSS property, used for controlling the layout ?",
    options: {"display", "margin", "table", "<div>"},
    correctAnswer: "display"
}
{
    id: "2"
    question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
    choices: {"variable", "string", "declaration", "function"},
    correctAnswer: "function"
}
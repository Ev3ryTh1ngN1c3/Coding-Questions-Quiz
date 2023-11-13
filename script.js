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
const quizArray = [
    {
        id: "0",
        question: "What tag specifies a section of text in HTML?",
        options: ["<code>", "<caption>", "<p>", "<section>"],
        correct: "<p>",
    },
    {
        id: "1",
        question: "What is the most important CSS property, used for controlling the layout ?",
        options: ["display", "margin", "table", "<div>"],
        correct: "display",
    },
    {
        id: "2",
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["variable", "string", "declaration", "function"],
        correct: "function",
    },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

next8tn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "score is" + scoreCount + "out of" + "questionCount";
    }
    else {
        countOfQuestion.innerHTML = questionCount + 1 + "of" + quizArray.length + "question";

        quizDisplay(questionCount);
        count = 4;
        clearInterval(countDown);
        timerDisplay();
    }
})
);

const TimerDisplay = () => {
    countDown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '$(count)s';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizContainer() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + "of" + quizArray.length + "question";

        let questiion_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += 
        <button class="option-div" onclick="checker(this)"> 
        $(i.option[0]</button>;
        <button class="option-div" onclick="checker(this)"> 
        $(i.option[1]</button>;
        <button class="option-div" onclick="checker(this)"> 
        $(i.option[2]</button>
    }
}
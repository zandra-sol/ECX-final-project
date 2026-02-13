const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const restartBtn = document.getElementById("restart-btn");


const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"],
    correctIndex: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
    correctIndex: 0
  },
  {
    question: "What is JavaScript used for?",
    options: ["Styling web pages", "Making web pages interactive", "Storing data in HTML"],
    correctIndex: 1
  },
  {
    question: "Which tag is used for a paragraph in HTML?",
    options: ["<p>", "<div>", "<h1>"],
    correctIndex: 0
  },
  {
    question: "Which property changes the text color in CSS?",
    options: ["color", "font-style", "background-color"],
    correctIndex: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

startBtn.addEventListener("click", function() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
});

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;

  answerButtons.innerHTML = "";
 
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;

  
    button.addEventListener("click", function() {
      checkAnswer(index);
    });

  
    answerButtons.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correctIndex;


  Array.from(answerButtons.children).forEach((button, index) => {
    if (index === correctIndex) {
      button.style.backgroundColor = "green";
      button.style.color = "white";
    } else if (index === selectedIndex) {
      button.style.backgroundColor = "red";  
      button.style.color = "white";
    } else {
      button.style.backgroundColor = ""; 
      button.style.color = "";
    }

    button.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 800); 
}

const resultScreen = document.getElementById("result-screen");
const resultText = document.getElementById("result-text");

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  resultText.textContent = "You scored " + score + " out of " + questions.length;
}

restartBtn.addEventListener("click", function() {
  score = 0;
  currentQuestionIndex = 0;

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

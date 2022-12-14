const quizQuestions = [
  {
    question: "Which is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answerIndex: 0,
  },
  {
    question: "Who is the president of India?",
    options: ["Modi", "Biden", "Murmu", "Kovind"],
    answerIndex: 2,
  },
  {
    question: "What is the voting age in India",
    options: [18, 19, 20, 21],
    answerIndex: 0,
  },
  {
    question: "Sun rises in?",
    options: ["North", "South", "East", "West"],
    answerIndex: 2,
  },
  {
    question: "Mongo is a ...",
    options: ["Country", "Cloud Provider", "City", "Database"],
    answerIndex: 3,
  },
];

let currentQuestionIndex = 0;
const totalNumberOfQuestions = quizQuestions.length;
let score = 0;

const questionCountDiv = document.getElementById("question-count");
const scoreDiv = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");
const contentDiv = document.getElementsByClassName("content-div")[0];

nextButton.style.visibility = "hidden";
scoreDiv.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";

scoreDiv.innerText = `Score: ${score}/${totalNumberOfQuestions}`;

startButton.addEventListener("click", startButtonClickHandler);
nextButton.addEventListener("click", nextButtonClickHandler);

function startButtonClickHandler() {
  nextButton.style.visibility = "visible";
  scoreDiv.style.visibility = "visible";
  questionCountDiv.style.visibility = "visible";

  showQuestion();
}

function nextButtonClickHandler() {
  const userAnswerRadioButton = document.querySelector(
    "input[name=ans]:checked"
  );

  contentDiv.style.backgroundColor = "#333";
  if (userAnswerRadioButton === null) {
    contentDiv.style.backgroundColor = "brown";
    return;
  }

  const userAnswer = userAnswerRadioButton.value;
  const correctAnswer = document.getElementById("correct-answer").innerText;

  if (correctAnswer === userAnswer) {
    score = score + 1;

    scoreDiv.innerText = `Score: ${score}/${totalNumberOfQuestions}`;
  }

  if (currentQuestionIndex >= totalNumberOfQuestions - 1) {
    nextButton.style.visibility = "hidden";
    contentDiv.innerHTML = `<div style='text-align:center'>Your score: ${
      (score / totalNumberOfQuestions) * 100
    }%</div>`;
  } else {
    currentQuestionIndex = currentQuestionIndex + 1;

    showQuestion();
  }
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionCountDiv.innerText = `Question: ${
    currentQuestionIndex + 1
  }/${totalNumberOfQuestions}`;

  contentDiv.innerHTML = `<div>${currentQuestion.question}</div>`;

  for (let index = 0; index < currentQuestion.options.length; index++) {
    const element = currentQuestion.options[index];

    contentDiv.innerHTML =
      contentDiv.innerHTML +
      `<div>
    <input type="radio" name="ans" id="r${index}" value="${index}" /><label for="r${index}"
      >${element}</label
    >
  </div>`;
  }

  contentDiv.innerHTML =
    contentDiv.innerHTML +
    `<div id="correct-answer" style="display:none">${currentQuestion.answerIndex}</div>`;
}

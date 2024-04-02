import { QUESTIONS } from "./QUESTIONS.js";

let ANSWERS = [];

QUESTIONS.forEach((question) => {
  ANSWERS.push("");
});

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
LoadQuestion();

function LoadQuestion() {
  const section = document.querySelector("section");

  section.innerHTML = `
    <div class="quiz-box" id="${currentQuestion}">
    <h3>${QUESTIONS[currentQuestion].question}</h3>

    <div class="options">   
    </div>

    <div class="buttons-prev-next">
    <div class="button-prev">
      <button>Prev</button>
    </div>

    <div class="button-next">
      <button>Next</button>
    </div>
    </div>
    </div>`;

  const options = document.querySelector(".options");

  QUESTIONS[currentQuestion].option.forEach((option, id) => {
    if (
      ANSWERS[currentQuestion].toLowerCase().trim() ==
      option.toLocaleLowerCase().trim()
    ) {
      options.innerHTML += `
      <div class="option">
      <label for="option-${id + 1}">${option}</label>
      <input type="radio" name="option" id="option-${
        id + 1
      }" value="${option}" class="selected"/>
      </div>`;
    } else {
      options.innerHTML += `
      <div class="option">
      <label for="option-${id + 1}">${option}</label>
      <input type="radio" name="option" id="option-${
        id + 1
      }" value="${option}" />
      </div>`;
    }
  });
  const OPTION = options.querySelectorAll("input[type='radio']");

  OPTION.forEach((option) => {
    option.addEventListener("click", (e) => {
      currentQuestion = e.target.parentElement.parentElement.parentElement.id;

      OPTION.forEach((answer) => {
        if (answer.classList.contains("selected")) {
          answer.classList.remove("selected");
        }
      });

      ANSWERS[Number(currentQuestion)] = e.target.value;
    });
  });

  const nextButton = document.querySelector(".button-next button");
  const prevButton = document.querySelector(".button-prev button");

  if (currentQuestion === 0) {
    prevButton.style.display = "none";
  }

  if (currentQuestion === QUESTIONS.length - 1) {
    nextButton.setAttribute("type", "submit");
    nextButton.innerText = "Submit";
  }

  nextButton.addEventListener("click", NextQuestion);
  prevButton.addEventListener("click", PreviousQuestion);
}

function PreviousQuestion() {
  currentQuestion = Number(currentQuestion) - 1;

  console.log(currentQuestion);

  if (currentQuestion < 0) {
    currentQuestion = 0;
    return;
  }

  LoadQuestion();
}

function NextQuestion() {
  currentQuestion = Number(currentQuestion) + 1;
  if (currentQuestion < QUESTIONS.length) {
    LoadQuestion();
  } else {
    currentQuestion = QUESTIONS.length;

    const section = document.querySelector("section");

    verifyAnswers();

    section.innerHTML = `
    <div class="result quiz-box">
      <div class="success">
        <h3>Question Answered Correctly</h3>

        <div>${correctAnswers}</div>
      </div>

      <div class="failure">
        <h3>Question Answered Incorrectly</h3>

        <div>${incorrectAnswers}</div>
      </div>
    </div>
    `;

    return;
  }
}

function verifyAnswers() {
  ANSWERS.map((answer, id) => {
    if (answer == QUESTIONS[id].answer) {
      correctAnswers = correctAnswers + 1;
    }
    incorrectAnswers = QUESTIONS.length - correctAnswers;
  });
}

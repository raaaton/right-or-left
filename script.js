var boutonAAppuyer;
var score = 0;
var timer;
var timerStarted = false;

function randomInstruction() {
  var instruction = document.getElementById('instruction');
  var random = Math.random();
  if (random < 0.5) {
    instruction.innerText = "LEFT";
    boutonAAppuyer = 'arrowleft';
  } else {
    instruction.innerText = "RIGHT";
    boutonAAppuyer = 'arrowright';
  }
}

function startTimer() {
    score = 0;
    var timerElement = document.getElementById('timer');
    var timeLeft = 30;
    var instructionElement = document.getElementById('instruction');
    var scoreTextElement = document.getElementById('scoretext');
    var startButtonElement = document.getElementById('startButton');

    function updateTimer() {
      timerElement.innerText = "Time: " + timeLeft;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        instructionElement.innerText = "";
        instructionElement.style.opacity = 0;
        scoreTextElement.innerText = "Score: " + score;
        scoreTextElement.style.opacity = 1;
        timerElement.classList.add('hidden'); // Cache le texte du timer
        scoreTextElement.classList.remove('hidden'); // Montre le texte du score
        timerStarted = false;
      } else {
        instructionElement.innerText = boutonAAppuyer === 'arrowleft' ? "LEFT" : "RIGHT";
        instructionElement.style.opacity = 1;
        scoreTextElement.innerText = "Score: " + score;
        scoreTextElement.style.opacity = 1;
        timerElement.classList.remove('hidden'); // Montre le texte du timer
        instructionElement.classList.remove('hidden'); // Montre le texte "LEFT"/"RIGHT"
      }
    }

    timer = setInterval(updateTimer, 1000);
    startButtonElement.classList.add('start-button-hidden'); // Cache le bouton
    timerElement.classList.remove('hidden'); // Montre le texte du timer
    scoreTextElement.classList.remove('hidden'); // Montre le texte du score
    instructionElement.classList.remove('hidden'); // Montre le texte "LEFT"/"RIGHT"
    timerStarted = true;
}

document.getElementById('startButton').addEventListener('click', function() {
    startTimer();
});

document.addEventListener('keydown', function(event) {
  if (timerStarted) {
    var keyPressed = event.key.toLowerCase();
    if (keyPressed === boutonAAppuyer) {
      score = score + 1;
      randomInstruction();
    } else {
      if (score <= 0) {
        randomInstruction();
      } else {
        score = score - 1;
        randomInstruction();
      }
    }
    scoretext.innerText = "Score: " + score;
  }
});

window.onload = function () {
  score = 0;
  randomInstruction();
};

document.getElementById('startButton').addEventListener('click', function() {
  startTimer();
});
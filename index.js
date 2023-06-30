const target = document.getElementById("target");
const start = document.getElementById("start");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");
const gameContainer = document.getElementById("game-container");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

function updateScore() {
  scoreElement.textContent = "Score: " + score;
  highScoreElement.textContent = "High Score: " + highScore;
}

target.addEventListener("mouseover", function() {
  score++;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }
  updateScore();
  moveTarget();
});

start.addEventListener("mouseover", function() {
  score = 0;
  updateScore();
  moveTarget();
});

function moveTarget() {
  const containerWidth = gameContainer.offsetWidth;
  const containerHeight = gameContainer.offsetHeight;

  const targetWidth = target.offsetWidth;
  const targetHeight = target.offsetHeight;

  const startWidth = start.offsetWidth;
  const startHeight = start.offsetHeight;

  const maxPosX = containerWidth - targetWidth;
  const maxPosY = containerHeight - targetHeight;

  const randomX = Math.floor(Math.random() * maxPosX);
  const randomY = Math.floor(Math.random() * maxPosY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";

  const maxStartPosX = containerWidth - startWidth;
  const maxStartPosY = containerHeight - startHeight;

  const randomStartX = Math.floor(Math.random() * maxStartPosX);
  const randomStartY = Math.floor(Math.random() * maxStartPosY);

  start.style.left = randomStartX + "px";
  start.style.top = randomStartY + "px";
}

updateScore();
moveTarget();

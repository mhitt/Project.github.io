//set inititia var
let q;
let a;
let b;
let c;
let d;
let choice;
let qNum = 1;




let startGame = document.querySelector(".startBtn");


startGame.addEventListener("click", loadNewPage);

function loadNewPage(){
    window.location.href = "game.html";
}









// Event listeners
// document.addEventListener("DOMContentLoaded", () => {
//     const startButton = document.querySelector(".startBtn");
//     startButton.addEventListener("click", startGame); // Corrected event listener setup
  
//     const answerButtons = document.querySelectorAll(".button");
//     answerButtons.forEach((button) => {
//       button.addEventListener("click", () => checkAnswer(button));
//     });
//   });

// function addQuestion(q,a,b,c,d) {
//     document.getElementById('question').innerHTML = q;
//     document.getElementById('aButton').innerHTML = a;
//     document.getElementById('bButton').innerHTML = b;
//     document.getElementById('cButton').innerHTML = c;
//     document.getElementById('dButton').innerHTML = d;
// }
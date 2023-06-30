let startGame = document.querySelector(".startBtn");


startGame.addEventListener("click", loadNewPage);

function loadNewPage(){
    window.location.href = "game.html";
}
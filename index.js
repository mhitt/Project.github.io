//set inititia var
let q;
let a;
let b;
let c;
let d;
let choice;
let qNum = 1;


//hide gameSection
// const gameSection = document.getElementById("gameSection");
// gameSection.style.display = "none";

//listen for when user clicks Start, start game

// const startGame = () => {generateQuestion(qNum);}
// document.addEventListener("click", startGame(1));

let startGame = document.querySelector(".startBtn");
// console.log(startGame);

startGame.addEventListener("click", generateQuestion);

function generateQuestion() {//qNum
    //hide startSection
    // const startSection = document.getElementById("startSection");
    // startSection.style.display = "none";
    
    //add gameSection to screen
    // gameSection = document.getElementById("gameSection");
    // gameSection.add();
    // gameSection.style.display = "block";
    console.log("i am working");
    
    //generate questions on page
    //window.location.href = "game.html";
    //window.onload = function(){
    if(qNum === 1){

        console.log("in question ");
        // q = document.getElementById("qNum");
        // q.innerText = `Q ${qNum}`;
        q = document.getElementById("questions");
        console.log(q);
        q.innerText = "How many sides does a square have?";
        // a = document.getElementById("aButton");
        // a.innerText = "Three";
        // b = document.getElementById("bButton");
        // b.innerText = "Nine";
        // c = document.getElementById("cButton");
        // c.innerText = "Seven";
        // d = document.getElementById("dButton");
        // d.innerText = "Four";//correct
        
    //}
    
    }

    
    // if(qNum === 1){


    //     window.location.href = "game.html";
    //     console.log("in question ");
    //     // q = document.getElementById("qNum");
    //     // q.innerText = `Q ${qNum}`;
    //     q = document.getElementById("questions");
    //     console.log(q);
    //     q.innerText = "How many sides does a square have?";
    //     // a = document.getElementById("aButton");
    //     // a.innerText = "Three";
    //     // b = document.getElementById("bButton");
    //     // b.innerText = "Nine";
    //     // c = document.getElementById("cButton");
    //     // c.innerText = "Seven";
    //     // d = document.getElementById("dButton");
    //     // d.innerText = "Four";//correct
        
    // }
    // if(qNum === 2){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "Who are the seven dwarfs from Snow White?";
    //     document.getElementById("aButton").innerHTML = "Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, Sneezy";//correct
    //     document.getElementById("bButton").innerHTML = "Dashing, Ditzy, Drooly, Grumpy, Hungry, Sleepy, Sneezy";
    //     document.getElementById("cButton").innerHTML = "Bashful, Doc, Jumpy, Grumpy, Slothly, Frosty, Hippy";
    //     document.getElementById("dButton").innerHTML = "Homey, Doc, Fuming, Zesty, Happy, Sleepy, Sneezy";
        
    // }
    // if(qNum === 3){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "Who is the CEO of SpaceX?";
    //     document.getElementById("aButton").innerHTML = "Lance Armstrong";
    //     document.getElementById("bButton").innerHTML = "Steve Jobs";
    //     document.getElementById("cButton").innerHTML = "Elon Musk";//correct
    //     document.getElementById("dButton").innerHTML = "Sir Richard Branson";
    // }
    // if(qNum === 4){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "What fast food restaraunt sells William's favorite fry?";
    //     document.getElementById("aButton").innerHTML = "Wendy's";
    //     document.getElementById("bButton").innerHTML = "Burger King";
    //     document.getElementById("cButton").innerHTML = "McDonald's";//correct
    //     document.getElementById("dButton").innerHTML = "Chick Fil A";
    // }
    // if(qNum === 5){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "What major city are multiple classmates from this cohort and William from (or currently reside)?";
    //     document.getElementById("aButton").innerHTML = "Dallas, TX";//correct
    //     document.getElementById("bButton").innerHTML = "San Fransisco, CA";
    //     document.getElementById("cButton").innerHTML = "Chicago, IL";
    //     document.getElementById("dButton").innerHTML = "Boston, MA";
    // }
    // if(qNum === 6){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "Which of the following statements is True?";
    //     document.getElementById("aButton").innerHTML = "People weigh more if they stand at the equator than if they stand at the North or South poles.";
    //     document.getElementById("bButton").innerHTML = "Rabbits can see behind them without moving their heads.";//correct
    //     document.getElementById("cButton").innerHTML = "Napoleon was the first person to be pictured on a coin.";
    //     document.getElementById("dButton").innerHTML = "African lions catch about 69% of the prey they chase.";
    // }
    // if(qNum === 7){
    //     document.getElementById("qNum").innerHTML = `Q ${qNum}`;
    //     document.getElementById("question").innerHTML = "Where was the first example of paper money used?";
    //     document.getElementById("aButton").innerHTML = "China";//correct
    //     document.getElementById("bButton").innerHTML = "Turkey";
    //     document.getElementById("cButton").innerHTML = "Greece";
    //     document.getElementById("dButton").innerHTML = "Prussia";
    // }
}

//check answer
// const checkAnswer = (button) => {
//     if(choice = button.id){}
//     // if(qNum === 1){

//     //     choice = e.target.id;
//     //     if(choice === "dButton"){
//             //insrease number and generate next question
//         //     qNum++;
//         //     generateQuestion(qNum);
//         // }
//         // else{
//             //display message saying user lost
//     //     }
//     // }
//     // if(qNum === 2){
        
//     //     document.getElementById("aButton").innerHTML = "Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, Sneezy";//correct
//     // }
//     // if(qNum === 3){
       
//     //     document.getElementById("cButton").innerHTML = "Elon Musk";//correct
//     // }
//     // if(qNum === 4){
        
//     //     document.getElementById("cButton").innerHTML = "McDonald's";//correct
//     // }
//     // if(qNum === 5){
        
//     //     document.getElementById("aButton").innerHTML = "Dallas, TX";//correct
//     // }
//     // if(qNum === 6){
        
//     //     document.getElementById("bButton").innerHTML = "Rabbits can see behind them without moving their heads.";//correct
//     // }
//     // if(qNum === 7){
//     //     document.getElementById("aButton").innerHTML = "China";//correct
//     // }    
// };





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
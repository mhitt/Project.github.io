//set inititia var
let qn;
let q;
let a;
let b;
let c;
let d;
let choice;
let qNum = 1;

window.onload = function generateQuestion() {
    
    //generate questions on page
    if(qNum === 1){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("questions");
        console.log(q);
        q.innerText = "How many sides does a square have?";
        a = document.getElementById("aButton");
        a.innerText = "Three";
        b = document.getElementById("bButton");
        b.innerText = "Nine";
        c = document.getElementById("cButton");
        c.innerText = "Seven";
        d = document.getElementById("dButton");
        d.innerText = "Four";//correct
    }
    
    if(qNum === 2){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "Who are the seven dwarfs from Snow White?";
        a = document.getElementById("aButton");
        a.innerText = "Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, Sneezy";//correct
        b = document.getElementById("bButton");
        b.innerText = "Dashing, Ditzy, Drooly, Grumpy, Hungry, Sleepy, Sneezy";
        c = document.getElementById("cButton");
        c.innerText = "Bashful, Doc, Jumpy, Grumpy, Slothly, Frosty, Hippy";
        d = document.getElementById("dButton");
        d.innerText = "Homey, Doc, Fuming, Zesty, Happy, Sleepy, Sneezy";
        
    }
    if(qNum === 3){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "Who is the CEO of SpaceX?";
        a = document.getElementById("aButton");
        a.innerText = "Lance Armstrong";
        b = document.getElementById("bButton");
        b.innerText = "Steve Jobs";
        c = document.getElementById("cButton");
        c.innerText = "Elon Musk";//correct
        d = document.getElementById("dButton");
        d.innerText = "Sir Richard Branson";
    }
    if(qNum === 4){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "What fast food restaraunt sells William's favorite fry?";
        a = document.getElementById("aButton");
        a.innerText = "Wendy's";
        b = document.getElementById("bButton");
        b.innerText = "Burger King";
        c = document.getElementById("cButton");
        c.innerText = "McDonald's";//correct
        d = document.getElementById("dButton");
        d.innerText = "Chick Fil A";
    }
    if(qNum === 5){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "What major city are multiple classmates from this cohort and William from (or currently reside)?";
        a = document.getElementById("aButton");
        a.innerText = "Dallas, TX";//correct
        b = document.getElementById("bButton");
        b.innerText = "San Fransisco, CA";
        c = document.getElementById("cButton");
        c.innerText = "Chicago, IL";
        d = document.getElementById("dButton");
        d.innerText = "Boston, MA";
    }
    if(qNum === 6){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "Which of the following statements is True?";
        a = document.getElementById("aButton");
        a.innerText = "People weigh more if they stand at the equator than if they stand at the North or South poles.";
        b = document.getElementById("bButton");
        b.innerText = "Rabbits can see behind them without moving their heads.";//correct
        c = document.getElementById("cButton");
        c.innerText = "Napoleon was the first person to be pictured on a coin.";
        d = document.getElementById("dButton");
        d.innerText = "African lions catch about 69% of the prey they chase.";
    }
    if(qNum === 7){
        qn = document.getElementById("qNum");
        qn.innerText = `Q ${qNum}`;
        q = document.getElementById("question");
        q.innerText = "Where was the first example of paper money used?";
        a = document.getElementById("aButton");
        a.innerText = "China";//correct
        b = document.getElementById("bButton");
        b.innerText = "Turkey";
        c = document.getElementById("cButton");
        c.innerText = "Greece";
        d = document.getElementById("dButton");
        d.innerText = "Prussia";
    }
}

//check answer
const checkAnswer = (button) => {
    //if(choice = button.id){}
    if(qNum === 1){

        choice = e.target.id;
        if(choice === "dButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }
    if(qNum === 2){
        choice = e.target.id;
        if(choice === "aButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }
    if(qNum === 3){
        choice = e.target.id;
        if(choice === "cButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }
    if(qNum === 4){
        choice = e.target.id;
        if(choice === "cButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }
    if(qNum === 5){
        choice = e.target.id;
        if(choice === "aButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }
    if(qNum === 6){
        choice = e.target.id;
        if(choice === "bButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
        
    }
    if(qNum === 7){
        choice = e.target.id;
        if(choice === "aButton"){
            window.location.href = "correct.html";
            //insrease number and generate next question
            // qNum++;
            // generateQuestion(qNum);
        }
        else{
            //display message saying user lost
            window.location.href = "gameOver.html";
        }
    }    
};
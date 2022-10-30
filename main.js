
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");
const pChoice = document.getElementById("p-choice");
const cChoice = document.getElementById("c-choice");
const rWinner = document.getElementById("r-winner");
const fWinner = document.getElementById("f-winner");

let playerScore = 0;
let computerScore = 0;

let playerChoice = "";
let computerChoice = "";

function getComputerChoice (){  // gets random num from one to three
    const rNum = Math.floor(Math.random() * 3);

    if(rNum == 1){
        computerChoice = "ROCK";
    }
    else if (rNum == 2){
        computerChoice = "PAPER";
    }
    else{
        computerChoice = "SCISSORS";
    }

    
}


function playRound(){  // play rounds until player or computer gets 5 wins, than reset

    let winner = "";
    let finalWinner = "";
    
    if(playerChoice === computerChoice){  // determine who wins
        winner = "DRAW";
        playerScore++;
        computerScore++;
    }
    else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        winner = "PLAYER WINNS!";
        playerScore++;
    }
    else if(playerChoice === "PAPER" && computerChoice === "ROCK"){
        winner = "PLAYER WINNS!";
        playerScore++;
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        winner = "PLAYER WINNS!";
        playerScore++;
    }
    else{
        winner = "COMPUTER WINNS!";
        computerScore++;
    }   
   
    pScore.textContent = playerScore;
    cScore.textContent= computerScore;
    pChoice.textContent = playerChoice;
    cChoice.textContent= computerChoice;
    rWinner.textContent = winner;

    if(playerScore == 5){  // if either gets 5 wins declare the winner and reset the score
            playerScore = 0;
            computerScore = 0;
            finalWinner = "PLAYER IS THE FINAL WINNER!";

        } else if(computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            finalWinner = "COMPUTER IS THE FINAL WINNER, YOU LOOSE!"

        } else if(playerScore == 5 || computerScore == 5){
            playerScore = 0;
            computerScore = 0;
            finalWinner = "WOW IT's A DRAW!"

        }

    fWinner.textContent = finalWinner;
    
}

const btns = document.querySelectorAll("button");


btns.forEach(btn => {  // on click, first get computer and player choices, than play one round
    btn.addEventListener("click",getComputerChoice)
    btn.addEventListener("click",(e) => playerChoice = e.target.value)  // get the value of the button that was clicked
    btn.addEventListener("click",playRound)
})
    





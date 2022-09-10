

let promptt = "";

function getPlayerChoice(){

    promptt = prompt("ROCK, PAPER or SCISSORS?");
    let playerChoice = promptt.toUpperCase();
    return playerChoice
}


console.log(`Player: ${getPlayerChoice()}`);



function getComputerChoice (){
    const rNum = Math.floor(Math.random() * 3);

    let computerChoice = "";
    
    if(rNum == 1){
        computerChoice = "ROCK";
    }
    else if (rNum == 2){
        computerChoice = "PAPER";
    }
    else{
        computerChoice = "SCISSORS";
    }

    return computerChoice;

}

console.log(`Computer: ${getComputerChoice()}`);

function playRound(playerSelection, computerSelection){

    let winner = "";


    if(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
        if(playerSelection === computerSelection){
            winner = "DRAW";
        }
        else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            winner = "PLAYER WINNS!";
        }
        else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
            winner = "PLAYER WINNS!";
        }
        else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            winner = "PLAYER WINNS!";
        }
        else{
            winner = "COMPUTER WINNS";
        }   
    }
    else{
        winner = "YOU CAN ONLY CHOOSE ROCK, PAPER or SCISSORS";
    }

    return winner;
}

playRound(getPlayerChoice(), getComputerChoice());

console.log(playRound(getPlayerChoice(), getComputerChoice())); 


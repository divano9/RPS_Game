



function getPlayerChoice(){

    let promptt = "";
    promptt = prompt("ROCK, PAPER or SCISSORS?");
    let playerChoice = promptt.toUpperCase();

    console.log(`Player: ${playerChoice}`);
    return playerChoice 
}


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

    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
    
}


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){

    let winner = "";

    if(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
        if(playerSelection === computerSelection){
            winner = "DRAW";
            playerScore++;
            computerScore++;
        }
        else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            winner = "PLAYER WINNS!";
            playerScore++;
        }
        else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
            winner = "PLAYER WINNS!";
            playerScore++;
        }
        else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            winner = "PLAYER WINNS!";
            playerScore++;
        }
        else{
            winner = "COMPUTER WINNS!";
            computerScore++;
        }   
    }
    else{
        winner = "YOU CAN ONLY CHOOSE ROCK, PAPER or SCISSORS";
    }


    console.log(winner);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    return winner;;

     
}


function game (rounds){
    for (let i = 0; i < rounds; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
}


game(5);
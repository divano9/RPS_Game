



function getPlayerChoice(){

    let promptt = "";
    promptt = prompt("KAMEN, PAPIR, MAKAZE?");
    let playerChoice = promptt.toUpperCase();

    console.log(`Igrač: ${playerChoice}`);
    return playerChoice 
}


function getComputerChoice (){
    const rNum = Math.floor(Math.random() * 3);

    let computerChoice = "";
    
    if(rNum == 1){
        computerChoice = "KAMEN";
    }
    else if (rNum == 2){
        computerChoice = "PAPIR";
    }
    else{
        computerChoice = "MAKAZE";
    }

    console.log(`Kompjuter: ${computerChoice}`);
    return computerChoice;
    
}


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){

    let winner = "";

    if(playerSelection === "KAMEN" || playerSelection === "PAPIR" || playerSelection === "MAKAZE"){
        if(playerSelection === computerSelection){
            winner = "NEREŠENO";
            playerScore++;
            computerScore++;
        }
        else if(playerSelection === "KAMEN" && computerSelection === "MAKAZE"){
            winner = "BRAVO IGRAČ JE POBEDIO!";
            playerScore++;
        }
        else if(playerSelection === "PAPIR" && computerSelection === "KAMEN"){
            winner = "BRAVO IGRAČ JE POBEDIO!";
            playerScore++;
        }
        else if(playerSelection === "MAKAZE" && computerSelection === "PAPIR"){
            winner = "BRAVO IGRAČ JE POBEDIO!";
            playerScore++;
        }
        else{
            winner = "KOMPJUTER JE POBEDIO!";
            computerScore++;
        }   
    }
    else{
        winner = "MOŽEŠ DA IZABEREŠ SAMO PAPIR, KAMEN ILI MAKAZE!";
    }


    console.log(winner);
    console.log(`Igrač: ${playerScore}`);
    console.log(`Kompjuter: ${computerScore}`);
    return winner;;

     
}


function game (rounds){
    for (let i = 0; i < rounds; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
}


game(5);
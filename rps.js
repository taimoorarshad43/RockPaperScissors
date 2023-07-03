//Main RPS game loop
function getComputerChoice(){
    //let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "rock";
    }
    if(random == 1){
        return "paper";
    }
    if(random == 2){
        return "scissors";
    }
}

function gameRound(playerChoice, getComputerChoice){
    
    let computerChoice = getComputerChoice();

    console.log(`You've picked ${playerChoice} and the computer has picked ${computerChoice}`);
    
    if(playerChoice == computerChoice){
        return "Its a tie!";
    }

    if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return "You Lose! Paper beats Rock!";
        }
        if(computerChoice == "scissors"){
            return "You Win! Rock beats Scissors!";
        }
    }

    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "You Win! Paper beats Rock!";
        }
        if(computerChoice == "scissors"){
            return "You Lose! Scissors beats Paper!";
        }
    }

    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return "You Win! Scissors beats Paper!";
        }
        if(computerChoice == "rock"){
            return "You Lose! Rock beats Scissors!";
        }
    }
}

function playRPS(){
    let playerChoice = prompt("Input your choice of Rock, Paper, or Scissors");
    playerChoice = playerChoice.toLowerCase();
    console.log(gameRound(playerChoice, getComputerChoice));

    let playAgain = prompt("Play again?");
    playAgain = playAgain.toLowerCase();

    if(playAgain == "yes"){
        playRPS();
    }
}

playRPS();
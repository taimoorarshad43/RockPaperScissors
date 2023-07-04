//Main RPS game loop

//let playerChoice = prompt("Input your choice of Rock, Paper, or Scissors");
//playerChoice = playerChoice.toLowerCase();

let playerChoice;

const btnRock = document.querySelector("#rock_btn");
const btnPaper = document.querySelector("#paper_btn");
const btnScissors = document.querySelector("#scissors_btn");
const outcome = document.querySelector("#outcome");
const choices = document.querySelector("#choices");

btnRock.addEventListener('click', () => {playerChoice = "rock"; playRPS();});
btnPaper.addEventListener('click', () => {playerChoice = "paper"; playRPS();});
btnScissors.addEventListener('click', () => {playerChoice = "scissors"; playRPS();});

//alert("Player has chosen " + playerChoice);

//Random number between 0, 1, or 2 is picked. Decides computer move.
function getComputerChoice(){
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

//Function that plays a game round. Compares player choice with computer choice
function gameRound(playerChoice, getComputerChoice){
    
    let computerChoice = getComputerChoice();
    choices.textContent =`You've picked ${playerChoice} and the computer has picked ${computerChoice}`;
    
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

//Function that starts the game
function playRPS(){

    outcome.textContent = gameRound(playerChoice, getComputerChoice);

}
// Initialize the scores for the human and computer
let humanScore = 0;
let computerScore = 0;
let results = "";
let winner = "";

// logging user choice by using buttons 
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { 
  button.addEventListener("click", () => {
     const userChoice = button.id;
        playRound(userChoice);})   
 });

// Function to get the computer's choice (randomized between rock, paper, and scissors)
function getComputerChoice() {

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) return "rock";
  if (randomNumber === 2) return "paper";
  else  return "scissors";
}

// Dom elements that update when the either player scior
const updateScoreDisplay = function(){
  playerScore.textContent = `Human Score: ${humanScore}`;
  robotScore.textContent = `Computer Score: ${computerScore}`;
  winnerDisplay.textContent = `${winner}`;
  resultsDisplay.textContent = `${results}`;
  }
  
  const scoreCard = document.querySelector("#scoreCard");
  
  const playerScore = document.createElement("div")
  playerScore.classList.add("score");
  playerScore.textContent = `Human Score: ${humanScore}`;
  scoreCard.appendChild(playerScore)
  
  
  const robotScore = document.createElement("div")
  robotScore.classList.add("score");
  robotScore.textContent = `Computer Score: ${computerScore}`;
  scoreCard.appendChild(robotScore)
  
  const resultCard = document.querySelector("#resultCard");

  const winnerDisplay = document.createElement("div")
  winnerDisplay.classList.add("result");
  winnerDisplay.textContent = `${winner}`;
  resultCard.appendChild(winnerDisplay)

  const resultsDisplay = document.createElement("div")
  resultsDisplay.classList.add("result");
  resultsDisplay.textContent = `${results}`;
  resultCard.appendChild(resultsDisplay)


// Function to play one round of the game
function playRound(userChoice) {  
  results = ""; 
  winner = "";

const computerSelection = getComputerChoice();

if (userChoice === computerSelection) {
   results = `You draw!, ${userChoice} and ${computerSelection} are the same`;
   updateScoreDisplay();
}
else if (
  (userChoice === "rock" && computerSelection === "scissors") ||
  (userChoice === "paper" && computerSelection === "rock") ||
  (userChoice === "scissors" && computerSelection === "paper")
) { results = `You Win!, ${userChoice} beats ${computerSelection}`;
  humanScore++;
  updateScoreDisplay();
}
else { results = `You lose!, ${userChoice} loses to ${computerSelection}`;
  computerScore++;
  updateScoreDisplay();
}

  if (humanScore >= 5 || computerScore >= 5) {
      endGame();
  }
  userChoice = null; 
}
  
// Function to end the game and declare a winner
function endGame() {
    if (humanScore > computerScore) {
      winner = "You Win! You want to try again?";
    } else if (humanScore < computerScore) {
      winner = "You Lose! You want to try again?";
    }
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay(); 
  }




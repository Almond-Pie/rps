// Initialize the scores for the human and computer
let humanScore = 0;
let computerScore = 0;
let userChoice;
let results;
let winner;

// logging user choice by using buttons 
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { // forEach = iterate through each (button)
  button.addEventListener("click", () => {
     const userChoice = button.id; // Set userChoice on click

    if (userChoice === "rock" ||
      userChoice === "paper" ||
      userChoice === "scissors"){
        playRound(userChoice);
      } else {alert("invalid Option")};   
  });
});

// Function to get the computer's choice (randomized between rock, paper, and scissors)
function getComputerChoice() {
  // Generate a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  
  // Return the corresponding choice based on the random number
  if (randomNumber === 1) return "rock";
  if (randomNumber === 2) return "paper";
  else  return "scissors";
}

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
  
  const winnerDisplay = document.createElement("div")
  winnerDisplay.classList.add("score");
  winnerDisplay.textContent = `winner: ${results}`;
  scoreCard.appendChild(winnerDisplay)

  const resultsDisplay = document.createElement("div")
  resultsDisplay.classList.add("score");
  resultsDisplay.textContent = `${winner}`;
  scoreCard.appendChild(resultsDisplay)


// Function to play one round of the game
function playRound(userChoice) {  
  if (!userChoice) {
    alert ("select a valid oprtion");
      return; // Handle the case where the user hasn't chosen yet
  }

const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

if (userChoice === computerSelection) {
   results = console.log(`You draw!, ${userChoice} and ${computerSelection} are the same`);
}
else if (
  (userChoice === "rock" && computerSelection === "scissors") ||
  (userChoice === "paper" && computerSelection === "rock") ||
  (userChoice === "scissors" && computerSelection === "paper")
) { results = console.log(`You Win!, ${userChoice} beats ${computerSelection}`);
  humanScore++;
  updateScoreDisplay();
}
else { results = console.log(`You lose!, ${userChoice} loses to ${computerSelection}`);
  computerScore++;
  updateScoreDisplay();
}

console.log(`Computer chose: ${computerSelection}`);

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

  if (humanScore >= 5 || computerScore >= 5) {
      endGame();
  }
  userChoice = null; 
}

// Function to play the game for 5 rounds
function playGame() {

    // Play one round
    playRound(humanSelection, computerSelection);

    // Display the scores after each round
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // After 5 rounds, compare scores and declare a winner
  if (humanScore == 5) {
    winner = console.log ("You Win! You will run it back, right?");
    endGame()
  } else if (computerScore == 5) {
     winner = console.log("You Lose! You want to try again?");
     endGame()
  }

function endGame() {
    if (humanScore > computerScore) {
      console.log("You Win! You will run it back, right?");
    } else if (humanScore < computerScore) {
      console.log("You Lose! Let's try again.");
    }
    humanScore = 0;
    computerScore = 0;
  }




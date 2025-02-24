// Initialize the scores for the human and computer
let humanScore = 0;
let computerScore = 0;
let userChoice;

// logging user choice by using buttons 
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { // forEach = iterate through each (button)
  button.addEventListener("click", () => {
     const choice = button.id; // Set userChoice on click

    if (choice === "start"){
      alert ("Pick an optio")
      startGame();
    } else if (choice === "restart"){
      console.clear();
      endGame(); 
    } else if 
      (choice === "rock" ||
      choice === "paper" ||
      choice === "scissors"){
        playRound(choice);
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
  if (randomNumber === 3) return "scissors";
}

// Function to play one round of the game
function playRound(userChoice) {  // No parameters needed
  if (!userChoice) {
    alert ("select a valid oprtion");
      return; // Handle the case where the user hasn't chosen yet
  }

const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

if (userChoice === computerSelection) {
  console.log(`You draw!, ${userChoice} and ${computerSelection} are the same`);
}
else if (
  (userChoice === "rock" && computerSelection === "scissors") ||
  (userChoice === "paper" && computerSelection === "rock") ||
  (userChoice === "scissors" && computerSelection === "paper")
) {
  console.log(`You Win!, ${userChoice} beats ${computerSelection}`);
  humanScore++;
}
else if (
  (userChoice === "scissors" && computerSelection === "rock") ||
  (userChoice === "rock" && computerSelection === "paper") ||
  (userChoice === "paper" && computerSelection === "scissors")
) {
  console.log(`You lose!, ${userChoice} loses to ${computerSelection}`);
  computerScore++;
}
else if ( userChoice === "start"){
  alert ("To start the game, you need to select a box")
  console.clear()
}
else if ( userChoice === "restart"){
  alert ("Game has been reset!")
  playGame();
  console.clear();
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

    // If the human cancels the game, stop playing
    if (humanSelection === "restart") {  
      console.log("Game stopped by player.");
      return; 
    }

    // Play one round
    playRound(humanSelection, computerSelection);

    // Display the scores after each round
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // After 5 rounds, compare scores and declare a winner
  if (humanScore == 5) {
    console.log("You Win! You will run it back, right?");
  } else if (humanScore == 5) {
    console.log("You Lose! Let's try again.");
  }

const startGame = function(){
  if (userChoice === "start"){
    alert ("Pick from one of these options")
    humanScore = 0;
    computerScore = 0;
  }
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

  const scoreCard = document.querySelector("#scoreCard");

  const playerScore = document.createElement("")
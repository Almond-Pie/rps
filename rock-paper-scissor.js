// Initialize the scores for the human and computer
let humanScore = 0;
let computerScore = 0;
let userChoice;

// buttons to get the users choice
    
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.id; // Correct: Set userChoice on click
    console.log("User Choice:", userChoice);
    playRound(); // Correct: Call playRound *after* setting userChoice
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

// Function to get the human's choice
function getHumanChoice() {

    // If the user cancels the prompt, exit the game
    if (userChoice === null) {  
      alert("Game canceled. Press Start to play again.");
      return null;
    }

    // Check if the input is valid (rock, paper, or scissors)
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;  // Return the user's choice if valid
    }
  }


// Function to play one round of the game
function playRound() {  // No parameters needed
  if (!userChoice) {
    alert ("select a valid oprtion");
      return; // Handle the case where the user hasn't chosen yet
  }

const computerSelection = getComputerChoice();
console.log(`Computer chose: ${computerSelection}`);

if (userChoice === computerSelection) {
  console.log(`You draw!, ${userChoice} and ${computerSelection} are the same`);
} else if (
  (userChoice === "rock" && computerSelection === "scissors") ||
  (userChoice === "paper" && computerSelection === "rock") ||
  (userChoice === "scissors" && computerSelection === "paper")
) {
  console.log(`You Win!, ${userChoice} beats ${computerSelection}`);
  humanScore++;
} else {
  console.log(`You Lose!, ${userChoice} loses to ${computerSelection}`);
  computerScore++;
}

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

  if (humanScore >= 5 || computerScore >= 5) {
      endGame();
  }
  userChoice = null; 
}

// Function to play the game for 5 rounds
function playGame() {

    let humanSelection = getHumanChoice();
    
    // If the human cancels the game, stop playing
    if (humanSelection === null) {  
      console.log("Game stopped by player.");
      return; 
    }

    // Get the computer's choice
    let computerSelection = getComputerChoice();

    // Play one round
    playRound(humanSelection, computerSelection);

    // Display the scores after each round
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // After 5 rounds, compare scores and declare a winner
  if (humanScore > computerScore) {
    console.log("You Win! You will run it back, right?");
  } else if (humanScore < computerScore) {
    console.log("You Lose! Let's try again.");
  } else {
    console.log("You Draw! Where's the fun in that? Let's play again.");
  }


function endGame() {
    if (humanScore > computerScore) {
      console.log("You Win! You will run it back, right?");
    } else if (humanScore < computerScore) {
      console.log("You Lose! Let's try again.");
    } else {
      console.log("You Draw! Where's the fun in that? Let's play again.");
    }
    humanScore = 0;
    computerScore = 0;
  }
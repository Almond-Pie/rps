// Initialize the scores for the human and computer
let humanScore = 0;
let computerScore = 0;

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
  let userChoice;
  
  // Keep asking for input until a valid choice is made
  while (true) {
    userChoice = prompt("Rock/Paper/Scissors?");
    
    // If the user cancels the prompt, exit the game
    if (userChoice === null) {  
      alert("Game canceled. Press Start to play again.");
      return null;
    }

    // Convert the input to lowercase and remove any extra spaces
    userChoice = userChoice.toLowerCase().trim();
    
    // Check if the input is valid (rock, paper, or scissors)
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;  // Return the user's choice if valid
    } else {
      // Inform the user if their input is invalid
      alert("Check your spelling. Please enter Rock, Paper, or Scissors.");
    }
  }
}

// Get both human and computer's choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Function to play one round of the game
function playRound(humanSelection, computerSelection) {
  // Display the choices of both players
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  // If both players chose the same option, it's a draw
  if (humanSelection === computerSelection) {
    console.log(`You draw!, ${humanSelection} and ${computerSelection} are the same`);
  }
  // If the human wins, update the score and display the result
  else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You Win!, ${humanSelection} beats ${computerSelection}`);
    humanScore++;  // Increment the human's score
  }
  // If the computer wins, update the score and display the result
  else {
    console.log(`You Lose!, ${humanSelection} loses to ${computerSelection}`);
    computerScore++;  // Increment the computer's score
  }
}

// Function to play the game for 5 rounds
function playGame() {
  // Reset scores at the start of the game
  humanScore = 0;
  computerScore = 0;

  // Play 5 rounds of the game
  for (let i = 0; i < 5; i++) {
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
}

// Start the game
playGame();

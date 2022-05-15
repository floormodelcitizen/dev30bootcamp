let i;
let choices = ["rock", "paper", "scissors"];
let winner;
let userInput = prompt(
  `I'll Rochambeau you for it! Please enter your choice of rock, paper, or scissors.`
);

function getUserChoice() {
  userInput = userInput.toLowerCase();
  if (choices.includes(userInput) === false) {
    userInput = prompt(
      `${userInput} is not a valid entry. Please enter rock, paper, or scissors.`
    );
    getUserChoice();
  }
  return userInput;
}

function getComputerChoice() {
  i = Math.floor(Math.random() * 3);
  return choices[i];
}

function determineWinner() {
  let userChoice = userInput;
  console.log(`User chooses ${userChoice}`);
  let computerChoice = choices[i];
  console.log(`Computer chooses ${computerChoice}`);
  if (userChoice === computerChoice) {
    winner = "Nobody";
  } else if (userChoice === "paper") {
    switch (computerChoice) {
      case "scisors":
        winner = "Computer";
        break;
      default:
        winner = "User";
        break;
    }
  } else if (userChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        winner = "Computer";
        break;
      default:
        winner = "User";
        break;
    }
  } else {
    switch (computerChoice) {
      case "paper":
        winner = "Computer";
        break;
      default:
        winner = "User";
        break;
    }
  }
  console.log(`${winner} wins.`);
}
getUserChoice();
getComputerChoice();
determineWinner();

// console.log(`User chooses ${userChoice}`)
// console.log(getComputerChoice())

let humanScore = 0;
let computerScore  = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return("rock");
    } else if (random === 1) {
        return("paper");
    } else {
        return("scissors");
    }
}

function getHumanChoice() {
    let human_choice = prompt("Choose between Rock / Paper / Scissors:");
    human_choice.toLowerCase();
    return(human_choice);
}

function playRound(human_choice, computer_choice) {
    if (human_choice === computer_choice) {
        console.log("Draw!");
    } else if ((human_choice === "rock" && computer_choice === "scissors") || (human_choice === "paper" && computer_choice === "rock") || (human_choice === "scissors" && computer_choice === "paper")) {
        console.log(`You win! ${human_choice} beats ${computer_choice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${human_choice} beats ${computer_choice}`);
        computerScore++;
    }

    console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
}

function playGame() {
    let count = 5;
    let round_number = 1;
    while (count > 0) {
        let computer_choice = getComputerChoice();
        let human_choice = getHumanChoice();
        console.log(`Round ${round_number}:`);
        console.log(`Human: ${human_choice}\nComputer: ${computer_choice}`);
        playRound(human_choice, computer_choice);
        count--;
        round_number++;
    }
    console.log(`Finals scores are:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();
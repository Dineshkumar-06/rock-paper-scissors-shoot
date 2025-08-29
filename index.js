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
        result.innerHTML = "Draw!";
    } else if ((human_choice === "rock" && computer_choice === "scissors") || (human_choice === "paper" && computer_choice === "rock") || (human_choice === "scissors" && computer_choice === "paper")) {
        result.innerHTML = `You win! ${human_choice} beats ${computer_choice}`;
        humanScore++;
    } else {
        result.innerHTML = `You lose! ${human_choice} beats ${computer_choice}`;
        computerScore++;
    }

    score.innerHTML = `Human score: ${humanScore}\nComputer score: ${computerScore}`;
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

// playGame();

function resetAll() {
    humanScore = 0;
    computerScore = 0;
    choices.forEach(item => item.disabled = false);
    result.textContent = "";
    score.textContent = "";
    reset.disabled = true;
}

function play(humanChoice) {
    
    if (humanScore == 5) {
        result.innerHTML = "Overall winner: Human!";
        choices.forEach(item => item.setAttribute("disabled", true));
        reset.disabled = false;
    } else if (computerScore == 5) {
        result.innerHTML = "Overall winner: Computer!";
        choices.forEach(item => item.setAttribute("disabled", true));
        reset.disabled = false;
    } else {
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    } 
}


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let reset = document.querySelector("#reset");

let result = document.querySelector("#result");
let score = document.querySelector("#score");

let choices = document.querySelectorAll(".human-choice");

choices.forEach(item => item.addEventListener('click' , (event) => play(event.target.value)));

reset.addEventListener('click', resetAll);




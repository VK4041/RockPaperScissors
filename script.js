console.log("The beginning of a new journey!")

//START//

//Global variables to keep track of cpu and human scores
let humanScore = 0
let cpuScore = 0
//This function returns a random integer between 1-3 inclusive => [1,3]
function getComputerChoice() {
    //Creating a number in range [0,3),
    //adding 1 makes it in range [1,4),
    //finally, flooring it makes it lie in range [1,3]
    let cpuChoice = Math.floor(Math.random() * 3 + 1)

    let cpuSelection
    //using switch statement to return either R,P or S as cpu choice
    switch (cpuChoice) {
        case 1: cpuSelection = "ROCK"
            break;
        case 2: cpuSelection = "PAPER"
            break;
        case 3: cpuSelection = "SCISSORS"
            break;
    }
    console.log("Computer Choice = ", cpuSelection)
    return cpuSelection
}
//This function gets the human user's choice using prompt
function getHumanChoice() {
    //first, we ask the user to enter their choice
    let humanChoice = prompt("Enter your choice (ROCK, PAPER or SCISSORS): ")

    //then, in case they enter an empty value or cancel the prompt, we output "TERMINATED"
    if (humanChoice === "" || humanChoice === null) {
        throw new Error("No value was entered by user, aborting game")
    }
    //else, compare
    else {
        //trim and capitalize the choice for stable comparisons
        humanChoice = humanChoice.trim().toUpperCase()

        //check if the choice is valid or not
        if (["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
            console.log("Human Choice = ", humanChoice)
            return humanChoice
        }

        //if not valid, then say invalid and redirect to the same function again until user enters a valid one!
        else {
            alert("Please enter a valid choice!, try again")
            getHumanChoice()
        }
    }
}
// Function the play a round and decide win, loss or tie and update the scores
function playRound(round) {

    //Print the round number before each player makes their choice
    console.log(`\n\tRound ${round}`)
    let cpuChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(cpuChoice, humanChoice)

    //Compare the choices of cpu and human user

    //TIE if same choice by both
    if (cpuChoice === humanChoice) {
        console.log("IT'S A TIE!!!")
    }
    //All cases where CPU wins
    else if ((cpuChoice === 'ROCK' && humanChoice === 'SCISSORS') || (cpuChoice === 'PAPER' && humanChoice === 'ROCK') || (cpuChoice === 'SCISSORS' && humanChoice === 'PAPER')) {
        cpuScore += 1
        console.log('You Lose!')
    }
    //All other cases, where human wins
    else {
        humanScore += 1
        console.log('You Win!')
    }
}

//Function to play the game (5 rounds and decide the overall winner)
function playGame() {
    //Run 5 rounds
    for (let i = 1; i <= 5; i++) {
        playRound(i)
    }
    //Game end indicator and scoreboard
    console.log(`\n\t------Game Over------\n\t------Results------`)
    console.log(`Human Score = ${humanScore}\nCPU Score = ${cpuScore}`)
    if (cpuScore === humanScore) {
        console.log("OVERALL TIE!!!")
    }
    else if (cpuScore > humanScore) {
        console.log("CPU wins the whole game!!!")
    }
    else {
        console.log("You win the whole game!!!")
    }
}
//Try-Catch block to handle the exception generated on line 35
try {
    playGame()
}
catch (err) {
    console.log(err)
}
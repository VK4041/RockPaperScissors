//START//

//Global variables to keep track of cpu and human scores
let humanScore = 0
let cpuScore = 0
const container = document.querySelector('#container')

function addClasses(classes, ...elements) {
    elements.map(element => classes.map(className => element.classList.add(className)))
}
function appendChildren(parent, ...children) {
    children.map(child => parent.appendChild(child))
}
function setAttributes(node, ...attributes) {
    attributes.map(each => {
        node.setAttribute(each[0], each[1])
    })
}
function displayStartScreen() {
    //element declaration
    const topDiv = document.createElement('div')
    const middleDiv = document.createElement('div')
    const startDiv = document.createElement('div')
    const startBtn = document.createElement('button')
    const title = document.createElement('h1')
    const footerDiv = document.createElement('footer')
    const footerText = document.createElement('p')
    const footerImg = document.createElement('img')
    const footerLink = document.createElement('a')

    //append children
    {
        topDiv.appendChild(title)
        startDiv.appendChild(startBtn)
        middleDiv.appendChild(startDiv)
        appendChildren(container, topDiv, middleDiv, footerDiv)
        footerText.textContent = `Made by Varun Kumar`
        footerLink.appendChild(footerImg)
        footerText.appendChild(footerLink)
        footerDiv.appendChild(footerText)
    }
    title.textContent = 'Rock Paper Scissors'
    startBtn.textContent = 'Start Game'
    //set attributes and classes
    {
        setAttributes(footerImg, ['src', './images/github.png'], ['alt', 'GitHub Icon'], ['class', 'footerImg'])
        setAttributes(footerLink, ['href', 'https://github.com/VK4041'], ['class', 'popUp'], ['target', '_blank'])
        addClasses(['flex-col-center'], topDiv, middleDiv, footerDiv, container)
        addClasses(['theme'], title, startBtn)
        addClasses(['footerDiv'], footerDiv)
        addClasses(['footerText'], footerText)
        addClasses(['startButton'], startBtn)
        addClasses(['midDiv'], middleDiv)
        addClasses(['startDiv'], startDiv)
        addClasses(['center'], footerText)
    }
    startBtn.addEventListener('click', () => displayGameScreen())
}
function displayGameScreen() {
    //clear midDiv for next step
    const middleDiv = document.querySelector('.midDiv')
    while (middleDiv.firstChild) {
        middleDiv.removeChild(middleDiv.lastChild)
    }
    //element declarations
    const playArea = document.createElement('section')
    const resultsArea = document.createElement('section')
    const leftPane = document.createElement('section')
    const rightPane = document.createElement('section')
    const humanTag = document.createElement('div')
    const choiceRow1 = document.createElement('div')
    const choiceRow2 = document.createElement('div')
    const cpuTag = document.createElement('div')
    const cpuDiv = document.createElement('div')
    const rockImg = document.createElement('img')
    const paperImg = document.createElement('img')
    const scissorsImg = document.createElement('img')
    const cpuChoiceImg = document.createElement('img')

    //appending children
    {
        appendChildren(middleDiv, playArea, resultsArea)
        appendChildren(playArea, leftPane, rightPane)
        appendChildren(leftPane, humanTag, choiceRow1, choiceRow2)
        appendChildren(choiceRow1, rockImg, paperImg, scissorsImg)
        appendChildren(rightPane, cpuTag, cpuDiv)
        appendChildren(cpuDiv, cpuChoiceImg)
    }
    humanTag.textContent = `YOU`
    cpuTag.textContent = `CPU`

    //setting attributes and adding classes
    {
        addClasses(['theme', 'medText'], humanTag, cpuTag)
        addClasses(['flex-row-center'], playArea,)
        addClasses(['flex-col-center'], leftPane, rightPane, resultsArea)
        setAttributes(rockImg, ['src', './images/rock.jpg'], ['name', 'rock'])
        setAttributes(paperImg, ['src', './images/paper.jpg'], ['name', 'paper'])
        setAttributes(scissorsImg, ['src', './images/scissors.jpg'], ['name', 'scissors'])
        addClasses(['rpsImages'], rockImg, paperImg, scissorsImg)
        addClasses(['center'], choiceRow1, choiceRow2, cpuDiv)
        addClasses(['fixed-img'], cpuChoiceImg)
        addClasses(['alignTop'], cpuTag)
        addClasses(['cpuChoice'], cpuDiv)

    }

    let images = [rockImg, paperImg, scissorsImg]
    let humanChoice, cpuChoice;

    images.map(img => img.addEventListener('click', function handler() {
        if (cpuScore !== 5 && humanScore !== 5) {
            humanChoice = img.getAttribute('name')
            cpuChoice = getComputerChoice()
            decideWinner(humanChoice, cpuChoice, resultsArea)
        }
        else {
            displayGameOverScreen(images)
        }
    }))
}

function displayGameOverScreen(images) {
    console.log('GAME OVER');

}
function displayRoundResults(outcome, resultsArea) {
    const resultsText = document.createElement('div')
    const resultsBoard = document.createElement('div')
    let children = [...resultsArea.children]

    resultsText.textContent = `${outcome}`
    resultsBoard.textContent = `${humanScore} - ${cpuScore}`
    addClasses(['theme', 'medText'], resultsArea)

    if (resultsArea.children.length >= 2) {
        children.map(child => resultsArea.removeChild(child))
    }
    appendChildren(resultsArea, resultsText, resultsBoard)
}
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3 + 1)
    const cpuDiv = document.querySelector('.cpuChoice')
    const cpuImg = cpuDiv.firstElementChild
    const imgAttributes = [[['src', './images/rock.jpg'], ['name', 'rock']],
    [['src', './images/paper.jpg'], ['name', 'paper']],
    [['src', './images/scissors.jpg'], ['name', 'scissors']]]

    addClasses(['rpsImages'], cpuImg)
    let cpuSelection
    //using switch statement to return either R,P or S as cpu choice
    switch (compChoice) {
        case 1: cpuSelection = "rock"
            setAttributes(cpuImg, imgAttributes[0][0], imgAttributes[0][1])
            break;
        case 2: cpuSelection = "paper"
            setAttributes(cpuImg, imgAttributes[1][0], imgAttributes[1][1])
            break;
        case 3: cpuSelection = "scissors"
            setAttributes(cpuImg, imgAttributes[2][0], imgAttributes[2][1])
            break;
    }
    return cpuSelection
}

function decideWinner(humanChoice, cpuChoice, resultsArea) {
    let outcome
    //TIE if same choice by both
    if (cpuChoice === humanChoice) {
        outcome = "IT'S A TIE!!!"
    }
    //All cases where CPU wins
    else if ((cpuChoice === 'rock' && humanChoice === 'scissors')
        || (cpuChoice === 'paper' && humanChoice === 'rock')
        || (cpuChoice === 'scissors' && humanChoice === 'paper')) {
        cpuScore += 1
        outcome = 'You Lose!'
    }
    //All other cases, where human wins
    else {
        humanScore += 1
        outcome = 'You Win!'
    }
    displayRoundResults(outcome, resultsArea)
}

//Function to play the game (5 rounds and decide the overall winner)
function playGame() {
    displayStartScreen()
    // //Game end indicator and scoreboard
    // console.log(`\n\t------Game Over------\n\t------Results------`)
    // console.log(`Human Score = ${ humanScore } \nCPU Score = ${ cpuScore } `)
    // if (cpuScore === humanScore) {
    //     console.log("OVERALL TIE!!!")
    // }
    // else if (cpuScore > humanScore) {
    //     console.log("CPU wins the whole game!!!")
    // }
    // else {
    //     console.log("You win the whole game!!!")
    // }
}
//Try-Catch block to handle the exception generated on line 35
try {
    playGame()
}
catch (err) {
    console.log(err)
}
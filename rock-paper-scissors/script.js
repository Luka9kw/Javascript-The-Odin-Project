let playerChoice = 'ScissoRS'
let playerSelection = playerChoice.charAt().toLocaleUpperCase() + playerChoice.slice(1).toLocaleLowerCase()

let computerSelection = getComputerChoice()
function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissors']
    let math = Math.floor(Math.random() * 3)
    return array[math]
}

function playRound(playerSelection, computerSelection) {
    //Condições de vitória
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You Win: ${playerSelection} beats ${computerSelection}`)
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You Win: ${playerSelection} beats ${computerSelection}`)
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You Win: ${playerSelection} beats ${computerSelection}`)
    }
    //Condições de Derrota
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        console.log(`You Lose: ${computerSelection} beats ${playerSelection}`)
    }

    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        console.log(`You Lose: ${computerSelection} beats ${playerSelection}`)
    }

    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log(`You Lose: ${computerSelection} beats ${playerSelection}`)
    }
    //Condições de empate
    else if (computerSelection === playerSelection) {
        console.log(`You Tie: ${playerSelection} ties ${computerSelection}`)
    }
}

console.log(playerSelection)
playRound(playerSelection, computerSelection)
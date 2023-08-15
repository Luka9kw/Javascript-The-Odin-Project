//Escolha do jogador
let playerChoice = 'roCK'

//Corrige a primeira letra para maiúsculo e as seguintes para minúsculo
let playerSelection = playerChoice.charAt().toLocaleUpperCase() + playerChoice.slice(1).toLocaleLowerCase()

//Função que seleciona um valor para o computador quando chamada
function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissors']
    let math = Math.floor(Math.random() * 3)
    return array[math]
}

//Cálculo dos resultados
function playRound(playerSelection, computerSelection) {
    //Condições de vitória
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }
    //Condições de Derrota
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return `You Lose: ${computerSelection} beats ${playerSelection}`
    }

    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return `You Lose: ${computerSelection} beats ${playerSelection}`
    }

    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return `You Lose: ${computerSelection} beats ${playerSelection}`
    }
    //Condições de empate
    else if (computerSelection === playerSelection) {
        return `You Tie: ${playerSelection} ties ${computerSelection}`
    }
}


//Jogo final
function game() {
    for (i = 0; i < 5; i++) {
        //Escolha do computador dentro do jogo final
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()

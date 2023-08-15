//Escolha do jogador
let playerChoice = window.prompt()

//Corrige a primeira letra para maiúsculo e as seguintes para minúsculo
let playerSelection = playerChoice.charAt().toLocaleUpperCase() + playerChoice.slice(1).toLocaleLowerCase()

//Função que seleciona um valor para o computador quando chamada
function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissors']
    let math = Math.floor(Math.random() * 3)
    return array[math]
}

let playerPoints = 0
let computerPoints = 0

//Cálculo dos resultados
function playRound(playerSelection, computerSelection) {
    //Condições de vitória
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerPoints++
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerPoints++
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerPoints++
        return `You Win: ${playerSelection} beats ${computerSelection}`
    }
    //Condições de empate
    else if (computerSelection === playerSelection) {
        return `That's a Tie: ${playerSelection} ties ${computerSelection}`
    }
    //Condições de Derrota
    else {
        computerPoints++
        return `You Lose: ${computerSelection} beats ${playerSelection}`
    }
}


//Jogo final
function game() {
    for (i = 0; i < 5; i++) {
        //Escolha do computador dentro do jogo final
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerPoints, computerPoints)
    }

    //Cálculo de Pontos
     if(playerPoints > computerPoints) {
        console.log('The Player Wins!')
     }

     else if (computerPoints > playerPoints) {
        console.log('The Computer Wins')
     }

     else {
        console.log('Draw')
     }
}

game()



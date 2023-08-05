
// Write a function called add7 that takes one number and returns that number + 7.


function add7(valor) {
    return valor + 7
}

// Arrow function
let add7 = valor => valor + 7;



// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(valor, valor2) {
    return valor * valor2
}

// Arrow function
let multiply = (valor, valor2) => valor * valor2




// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.


function capitalize(string) {
    let maiusculo = string.charAt(0).toUpperCase()
    let minusculo = string.slice(1).toLowerCase()

    return maiusculo + minusculo;
}

console.log(capitalize('meU priMeiro Estágio como DEV'))



// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(string) {
    let letrafinal = string.slice(-1)
    return letrafinal
}

console.log(lastLetter('Olá mundo'))
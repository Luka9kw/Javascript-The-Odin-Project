
function soma(){
    let valor1 = document.querySelector("#valor1soma").value
    let valor2 = document.querySelector("#valor2soma").value
    let resultado = document.querySelector("#resultadoSoma")
    resultado.innerHTML = Number(valor1) + Number(valor2)
}

function subtrai(valor){
    let valor1 = document.querySelector("#valor1subtrai").value
    let valor2 = document.querySelector("#valor2subtrai").value
    let resultado = document.querySelector("#resultadoSubtrai")
    resultado.innerHTML = valor1 - valor2
}

function multiplica(valor){
    let valor1 = document.querySelector("#valor1multiplica").value
    let valor2 = document.querySelector("#valor2multiplica").value
    let resultado = document.querySelector("#resultadoMultiplica")
    resultado.innerHTML = valor1 * valor2
}

function divide(valor){
    let valor1 = document.querySelector("#valor1divide").value
    let valor2 = document.querySelector("#valor2divide").value
    let resultado = document.querySelector("#resultadoDivide")
    resultado.innerHTML = valor1 / valor2
}

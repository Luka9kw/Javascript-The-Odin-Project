function testCallback(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const myArray = [1, 2, 3, 1000]


// A chamada da função recebe uma arrow function como segundo paramêtro, esse é o callback. Uma função chamando outra função.
testCallback(myArray, (valorloopado) => {
    console.log(valorloopado + 2)
})
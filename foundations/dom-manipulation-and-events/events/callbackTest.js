function testCallback(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const myArray = [1, 2, 3, 1000]
testCallback(myArray, (callbackItem) => {
    console.log(callbackItem + 2)
})
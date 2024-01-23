const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     alert("Hello World");
// })

//Também posso fazer assim

function alertFunciton() {
    alert('É os guri')
}

btn.addEventListener('click', alertFunciton)
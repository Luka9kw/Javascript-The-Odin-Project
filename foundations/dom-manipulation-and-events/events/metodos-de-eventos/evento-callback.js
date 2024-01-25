const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    (e.target)
}); // Mostra o alvo que executou a função. No caso foi o btn no html.

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue'
}); // Altera o valor do alvo que executou o evento. O btn no html fica azul.

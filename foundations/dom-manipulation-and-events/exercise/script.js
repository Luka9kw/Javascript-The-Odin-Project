const mainContainer = document.querySelector('#container')

const p = document.createElement('p');
const h3 = document.createElement('h3');

p.textContent = "Hey i'm red";
h3.textContent = "Hey i'm a blue h3!";

p.setAttribute('style', 'color: red')
h3.setAttribute('style', 'color: blue')
mainContainer.appendChild(p)
mainContainer.appendChild(h3)

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border: solid');
const divh1 = document.createElement('h1')
const divp = document.createElement('p')

divh1.textContent = "i'm in a div"
divp.textContent = "ME TOO!"

div.appendChild(divh1)
div.appendChild(divp)
mainContainer.appendChild(div)

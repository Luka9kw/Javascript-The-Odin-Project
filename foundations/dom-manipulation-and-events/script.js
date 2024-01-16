const div = document.createElement('div'); // Não cria o elemento na DOM, nó na memória para manipular estilo, classes, id etc.

div.style.color = 'blue'; // Adiciona uma regra de estilo
div.style.cssText = 'color: blue; background: white;' // Adiciona várias regras de estilo
div.setAttribute('style', 'color: blue; background: white;') // Mesma coisa de outro jeito

div.setAttribute('style', 'color: blue')
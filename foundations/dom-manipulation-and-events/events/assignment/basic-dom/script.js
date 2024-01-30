const link = document.querySelector("a");
const paragraph = document.createElement("p");
const section = document.querySelector("section");

link.textContent = "Mozilla Developer Network";
paragraph.textContent = "We hope you enjoyed the ride.";

link.href = "https://developer.mozilla.org";

section.appendChild(paragraph);
section.appendChild(link); // Desce o link para o final da página onde está loclizado o node section.


// Criando um text node
const text = document.createTextNode(" - the premier source for web development knowledge.")
paragraph.appendChild(text)
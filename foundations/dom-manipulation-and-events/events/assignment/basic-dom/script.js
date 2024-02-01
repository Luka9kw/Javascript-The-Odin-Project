const link = document.querySelector("a");
const paragraph = document.createElement("p");
const section = document.querySelector("section");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
paragraph.textContent = "We hope you enjoyed the ride.";


section.appendChild(paragraph);
// section.appendChild(link);

// Criando um text node
const text = document.createTextNode(" - the premier source for web development knowledge.");
paragraph.appendChild(text);

//Clonando um node
const link2 = link.cloneNode(true);
section.appendChild(link2);

//Removendo um node
section.removeChild(link2);

//Removendo um node (método alternativo, não funciona em navegadores antigos)
text.remove(); 

//Manipulating styles
// paragraph.style.color = "white";
// paragraph.style.backgroundColor = "black";
// paragraph.style.padding = "10px";
// paragraph.style.width = "250px";
// paragraph.style.textAlign = "center";

paragraph.setAttribute("class", "highlight");

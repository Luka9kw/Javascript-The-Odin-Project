let btn = document.querySelector('.btn');
let element = document.querySelector('.special');

btn.addEventListener('click', function () {
    //alinha o elemento no topo da página.
    // element.scrollIntoView(true);
    
    //alinha o elemento no final da página.
    element.scrollIntoView(false);
});
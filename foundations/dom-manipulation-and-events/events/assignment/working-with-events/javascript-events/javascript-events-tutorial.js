const container = document.querySelector('#container');
let btn = document.querySelector('#btn');
btn.addEventListener('click', btnPress);

let DmC = ['dmc1', 'dmc2', 'dmc3', 'dmc4', 'dmc:dmc', 'dmc5'];
let index = 0

function btnPress() {
    let lorem = document.createElement('p');
    lorem.textContent = '';
    container.insertBefore(lorem, btn);
    index++

    for(i=0; i < DmC.length; i++){

        lorem.textContent = DmC[index-1]
        console.log(DmC[index-1])   
    }
    
};

// DmC.forEach(btnPress)


// DmC.forEach(btnPress);


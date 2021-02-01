'use strict';


for(let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', mouseover);
    square.addEventListener('mouseout', mouseout);
    square.addEventListener('click', click);
    body.appendChild(square);
}

function mouseover(e) {
    if(this.style.background != 'green') {
        this.style.background = 'red';
    }
}
function mouseout(e) {
    if(this.style.background != 'green') {
        this.style.background = 'white';
    }
}
function click(e) {
    this.style.background = 'green';
}
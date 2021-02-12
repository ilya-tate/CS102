'use strict';


function toggleVisibility(e) {
    if(text.style.visibility != 'hidden') {
        text.style.visibility = 'hidden';
    } else {
        text.style.visibility = 'visible';
    }
}

toggle.addEventListener('click', toggleVisibility);
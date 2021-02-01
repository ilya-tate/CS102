"use strict";


// body.innerHTML = "<div>Stuff</div>"

let first = function() {
    alert('First has been clicked.');
}
let second = function() {
    this.removeEventListener("click", first);
}

let div = document.createElement("div")
div.addEventListener("click", first);
div.addEventListener("click", second);
body.appendChild(div);
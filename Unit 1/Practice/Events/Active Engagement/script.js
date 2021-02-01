"use strict";

let song = '';

let body = document.getElementsByTagName("body");
body = body[0];

let btnBeep = document.createElement("button");
let btnBoop = document.createElement("button");
let btnBop = document.createElement("button");

body.appendChild(btnBeep);
body.appendChild(btnBoop);
body.appendChild(btnBop);

btnBeep.textContent = 'Beep';
btnBoop.textContent = 'Boop';
btnBop.textContent = 'Bop';

let btnPrint = document.createElement("button");
body.appendChild(btnPrint);
btnPrint.textContent = 'Print';

console.log(body);

let addSoundBeep = function addSoundBeep() {
    song += ` beep`;
    console.log(song);
}
let addSoundBoop = function addSoundBoop() {
    song += ` boop`;
    console.log(song);
}
let addSoundBop = function addSoundBop() {
    song += ` bop`;
    console.log(song);
}
let printSong = function printSong() {
    alert(song);
    song = '';
}

btnBeep.addEventListener("click", addSoundBeep);
btnBoop.addEventListener("click", addSoundBoop);
btnBop.addEventListener("click", addSoundBop);
btnPrint.addEventListener("click", printSong);
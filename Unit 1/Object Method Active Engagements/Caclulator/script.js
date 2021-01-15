"use strict";


let valFirst;
let valSecond;
let calculator = {
    read() {
        this.a = +(prompt("What is the first number?", 0));
        this.b = +(prompt("What is the second number?", 0));
    },

    sum() {
        return this.a + this.b;
    },

    mult() {
        return this.a * this.b;
    }
};

calculator.read();
let calcSum = calculator.sum();
console.log(`The sum of ${calculator.a} + ${calculator.b} = ${calculator.sum()}`);
console.log(calculator.mult());
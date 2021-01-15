"use strict";


let ladder = {
    step: 0,
    height: '', // In case no height is defined
    height(height) {
        this.height = height;
        return this;
    },
    up() {
        if(this.step < this.height || isNumber(height) == false) {
            this.step++;
        }
        return this;
    },
    down() {
        if(this.step > 0) {
            this.step--;
        }
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
};

ladder.height(5);
ladder.up().up().down().up().down().showStep();
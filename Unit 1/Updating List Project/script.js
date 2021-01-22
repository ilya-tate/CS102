"use strict";


class User {
    constructor(nameFirst, nameLast, dob, cityDepart, cityDestin, dateLeave, dateReturn, bagNum, meal, extras, canDrink, extraCost, timeLeft, id) {
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.dob = dob;
        this.cityDepart = cityDepart;
        this.cityDestin = cityDestin;
        this.dateLeave = dateLeave;
        this.dateReturn = dateReturn;
        this.bagNum = bagNum;
        this.meal = meal;
        this.extras = extras;
        this.canDrink = canDrink;
        this.extraCost = extraCost;
        this.timeleft = timeLeft;
        this.id = id;
    }
}

function submit() {
    let nameFirst = document.getElementById("nameFirst").value;
    let nameLast = document.getElementById("nameLast").value;
    let dob = document.getElementById("dob").value;
    let cityDepart = document.getElementById("cityDepart").value;
    let cityDestin = document.getElementById("cityDestin").value;
    let dateLeave = document.getElementById("dateLeave").value;
    let dateReturn = document.getElementById("dateReturn").value;
    let bagNum = document.getElementById("bagNum").value;

    let meal = '';
    if(document.getElementById("meal.chicken").checked) {
        meal = document.getElementById("meal.chicken");
    } else if(document.getElementById("meal.fish").checked) {
        meal = document.getElementById("meal.fish");
    } else if (document.getElementById("meal.vege").checked) {
        meal = document.getElementById("meal.vege");
    } else {
        meal = null;
    }

    let extras = [];
    if(document.getElementById("extras.legroom").checked) {
        extras.push(document.getElementById("extras.legroom"));
    }
    if(document.getElementById("extras.window").checked) {
        extras.push(document.getElementById("extras.window"));
    }
    if (document.getElementById("extras.headphones").checked) {
        extras.push(document.getElementById("extras.headphones"));
    }
    if (document.getElementById("extras.food").checked) {
        extras.push(document.getElementById("extras.food"));
    }
    if(extras.length == 0) {
        extras = null;
    }

    let id = assignId();

    let user = new User(nameFirst, nameLast, dob, cityDepart, cityDestin, dateLeave, dateReturn, bagNum, meal, extras, canDrink, extraCost, timeLeft, id);
    console.log(user);
}

function canDrink(age) {
    age = document.getElementById("dob").value;
}

function assignId() {
    let id = '';
    for (let i = 1; i = 6; i++) {
        id += rng();
    }
    return +(id);
}

function rng() {
    return Math.floor(Math.random() * 10);
}
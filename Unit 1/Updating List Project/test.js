"use strict";

function rng(max) {
    max++;
    return Math.floor(Math.random() * max);
}

function createRandomDate(earliestDate, latestDate) {
    let yr = rng(latestDate.getFullYear() - earliestDate.getFullYear()) + earliestDate.getFullYear();
    let mon = rng(latestDate.getMonth() - earliestDate.getMonth()) + earliestDate.getMonth();
    let day = rng(latestDate.getDate() - earliestDate.getDate()) + earliestDate.getDate();

    return new Date(yr, mon, day)
}

let today = new Date()
let a = new Date(2025, 5, 6)

console.log(createRandomDate(today, a));
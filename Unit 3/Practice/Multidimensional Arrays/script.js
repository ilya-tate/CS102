'use strict';


let day = [
    ['School', 8],
    ['Food', 1],
    ['Driving', 2],
    ['Free Time', 6],
    ['Sleeping', 7]
];

day.splice(3, 0, ['Study', 2]);
day[4][1] -= 2;

day.splice(5, 0, ['Programming', 1]);
day[6][1]--;


for (let i in day) {
    let percent = Math.round(day[i][1] / 24 * 100);
    day[i][2] = percent + '%';
}


console.table(day);
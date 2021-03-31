let arr = [];
for (let i = 1; i < 101; i++) {
    arr.push(i);
}

let missingNum = Math.floor(Math.random() * 100);
arr[missingNum - 1] = null;

for (i in arr) {
    if (Number.isInteger(arr[i]) == false) {
        console.log(arr);
        console.log(arr.indexOf(arr[i]) + 1);
    }
}
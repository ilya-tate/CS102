let arr = [];
for (let i = 0; i < 100; i++) {
    let val = i + 1;
    if (Number.isInteger(val / 15) == true) {
        arr[i] = 'FizzBuzz';
    } else if (Number.isInteger(val / 3) == true) {
        arr[i] = 'Fizz';
    } else if (Number.isInteger(val / 5) == true) {
        arr[i] = 'Buzz';
    } else {
        arr[i] = val;
    }
}

let str = arr.join(', ')

console.log(str);
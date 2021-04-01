let input = [1, 2, 3, 4, 5];


function calcMinJumps(arr) {
    let jumpCnt = 0;
    let tempArr = [];
    let indexArr = [0];
    let valArr = [arr[0]];

    for (i in indexArr) {
        for (let j = 0; j <= valArr[i]; j++) {
            tempArr.push(indexArr[i] + j);
        }
    }

    return jumpCnt;
}

console.log(calcMinJumps(input));
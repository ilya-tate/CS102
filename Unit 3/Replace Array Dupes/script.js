function replaceArrDupes(arr) {
    let newArr = [];
    for (i in arr) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        } else {
            newArr.push(null);
        }
    }

    return newArr;
}
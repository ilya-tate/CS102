const _BOARD = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],

    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],

    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.']
];

const _COORDS = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],

    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],

    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9]
];

function getRow(board, row) {
    // Returns an array with all the array elements from the row
    return board[row];
}

function getCol(board, col) {
    // Returns an array with all the array elements from the column
    let inCol = [];
    for (row in board) {
        inCol.push(board[row][col]);
    }
    return inCol;
}

function getQuad(board, quadNum) {
    // Creates an array of all the array elements in the same quadrant
    let inQuad = [];
    // Cycles through all of the rows in the board
    for (row in board) {

        // Cycles through all of the columns in the row
        for (col in board[row]) {
            if (_COORDS[row][col] == quadNum) {
                inQuad.push(board[row][col]);
            }
        }
    }

    return inQuad;
}


// Filter through all of the used values and return only the possible values for that cell
function getPossible(board, row, col) {
    let inRow = getRow(board, row);
    let inCol = getCol(board, col);
    let inQuad = getQuad(board, _COORDS[row][col]);

    let possible = [];
    let notPossible = [];

    // Go through every row element and say what is not possible
    for (i in inRow) {
        let included = false;
        for (j in notPossible) {
            if (inRow[i] == notPossible[j]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inRow[i]);
        }
    }

    // Every through every column element and say what is not possible
    for (i in inCol) {
        let included = false;
        for (j in notPossible) {
            if (inCol[i] == notPossible[j]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inCol[i]);
        }
    }

    // Finds all not possible from the quadrant
    for (i in inQuad) {
        let included = false;
        for (j in notPossible) {
            if (inQuad[i] == notPossible[j]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inQuad[i]);
        }
    }

    for (i in notPossible) {
        if (notPossible[i] == '.') {
            notPossible.splice([i], 1);
        }
    }

    for (let num = 1; num < 10; num++) {
        if (!notPossible.includes(num + '')) {
            possible.push(num + '');
        }
    }

    return possible;
}


function fillInCell(board, row, col) {
    if (board[row][col] == '.') {
        let possible = getPossible(board, row, col);
        
        if (possible.length == 1) {
            board[row][col] = possible[0];
        }
    }
}


function solveBoard(board) {
    for (i in board) {
        do {
            for (rowNew in board) {
                for (colNew in board[rowNew]) {
                    fillInCell(board, rowNew, colNew);
                }
            }
        } while (board[i].indexOf('.') != -1) // When there are no more '.' index returns -1 and moves to next row
    }
}


solveBoard(_BOARD);
console.table(_BOARD);
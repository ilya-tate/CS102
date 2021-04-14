// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push(i * 10);
// }

// const descruct = () => {
//   // Where you write code to modify array / values
//   return arr;
// }
// let [a, b, c, d, e, f, g, h, i, j, k] = destruct();

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let students = {
  names: {
    '01': 'Jeff',
    '02': 'Jill',
    '03': 'Jack',
    '04': 'Jimm',
    '05': 'John'
  },
  grades: {
    '01': 30,
    '02': 78,
    '03': 95,
    '04': 67,
    '05': 89
  },
  ids: {
    '01': 1234,
    '02': 2345,
    '03': 3456,
    '04': 4567,
    '05': 5678
  }
}

// const { names, grades, ids } = students;
// console.log(names);
// console.log(grades);
// console.log(ids);

// const { ids, ...obj } = students;
// console.log(obj);

// const { names, ...theRest } = students;
// console.log(theRest);

// const { names: studentNames, grades: studentGrades, ...theRest } = students;

const { name: n, stats: newStats, abilities: abils, id, ...others } = require('./charmander.json');

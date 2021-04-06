// let visitors =  ['john', 'jim', 'jane', 'jack', 'jill', 'robert', 'john', 'jill', 'jane', 'jim', 'jim', 'jill'];
// let set = new Set();

// for (i of visitors) {
//     set.add(i);
// }

// console.log(set.size);


// let cakeRecipe = new Map([
//     ['butter', '1/2 cup'],
//     ['eggs', '1 large'],
//     ['vanilla extract', '2 teaspoons'],
//     ['flour', '1-1/2 cups'],
//     ['baking pouder', '1-3/4 teaspoons'],
//     ['milk', '1/2 cup']
// ]);

// cakeRecipe.set('white sugar', '2 cups');
// cakeRecipe.set('eggs', '2 large');
// cakeRecipe.delete('vanilla extract');
// cakeRecipe.set('chocolate', '1 bar');

// cakeRecipe = JSON.stringify(Object.fromEntries(cakeRecipe));

// cakeRecipe = new Map(Object.entries(JSON.parse(cakeRecipe)));

// console.log(cakeRecipe);


// let sched = '{"title":"Conference","date":"2017-11-30T12:00:00.000"}';

// console.log(sched);
// // Function is called a reviver, and the "key, value" param are ALWAYS needed
// JSONsched = JSON.parse(sched, (key, value) => {
//     if (key == 'date') {
//         return new Date(value);
//     } else return value;
// });
// console.log(JSONsched);
// console.log(JSONsched.date);
// console.log(JSONsched.date.getDate());


let testObj = {
    name: 'Jimmy',
    age: 40,
    city: 'Phoenix'
}
let testJSON = JSON.stringify(testObj);

// First str: Name of the storage location
// Second str: Json obj you want to store
localStorage.setItem('testStorage', testJSON);
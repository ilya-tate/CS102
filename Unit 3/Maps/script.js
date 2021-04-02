// let map = new Map();

// for (let i = 0; i < 100; i++) {
//     map.set(`key ${i + 1}`, `value ${i + 1}`);
// }

// console.table(map);


let cakeRecipe = new Map([
    ['butter', '1/2 cup'],
    ['eggs', '1 large'],
    ['vanilla extract', '2 teaspoons'],
    ['flour', '1-1/2 cups'],
    ['baking pouder', '1-3/4 teaspoons'],
    ['milk', '1/2 cup']
]);

// cakeRecipe.set('white sugar', '2 cups');
// console.table(cakeRecipe);

// console.log(cakeRecipe.has('eggs'));
// console.log(cakeRecipe.get('eggs'));

// cakeRecipe.set('eggs', '2 large');
// console.table(cakeRecipe);

// cakeRecipe.delete('vanilla extract');
// cakeRecipe.set('chocolate', '1 bar');
// console.table(cakeRecipe);

for (entry of cakeRecipe.entries()) {
    console.log(`-${entry[0]}\t${entry[1]}`);
}


let megatron = new Map([
    ['name', 'megatron'],
    ['ID', 872465],
    ['Team', 'Deception'],
    ['Kills', ''],
    ['Deaths', 5],
    ['Movies', 6],
    ['Degree', ''],
    ['LEDs', 40221],
    ['Favorite Animal', 'rabbits'],
    ['Favorite Food', '']
]);

for (entry of megatron.entries()) {
    if (entry[1] != '') {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

for (key of megatron.keys()) {
    if (key.length >= 5) {
        console.log(key);
    }
}

for (entry of megatron.entries()) {
    if (isNaN(entry[1]) == false && entry[1] != '') {
        console.log(entry[1]);
    }
}
"use strict";


// // Creating an array object
// // Name, age, hair color, home city, hobby
// let myself = ['Ilya', 17, 'brown', 'Peoria', 'video games'];

// // Home city
// console.log(myself[3]);
// // Age
// console.log(myself[1]);


// let newSelf = {
//     name: 'Ilya',
//     age: 17,
//     hairColor: 'brown',
//     hometown: 'Peoria',
//     hobby: 'video games'
// };

// // Hometown
// console.log(newSelf['hometown']);
// // Age
// console.log(newSelf['age']);


// // A type of bear

// let polar =  {
//     furColor: 'white',
//     avgWeight: 770,
//     country: ['Denmark', 'Norway', 'Russia', 'United States', 'Canada'],
//     lifeSpan: 25,
//     population: 31000,
//     diet: 'seal'
// };

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let name = `Vihaan Wu
// Jia Le
// Ember Joyner
// Spencer Romero
// Priya George
// Kadie Thatcher
// Anayah Irving
// Domas Rose
// Iris Hancock
// Beulah Osborn
// Nile Ellis
// Hina Redfern
// Maliha Marsh
// Areeb Rubio
// Bjorn Mcneil
// Kyran Dalton
// Laurence Singh
// Zion Mata
// Greg Schultz
// Cillian Pearson
// Darien Hilton
// Joe Wicks
// Nicky Harrison
// Laylah Leal
// Bertha Dickinson
// Amar Winter
// Horace Keith
// Lillie-Rose Pike
// Zeeshan Acosta
// Sachin Mckee
// Emilee Mcintosh
// Yvonne Craft
// Scarlette Bowen
// Jadon Horn
// Safwan Haney
// Laurie Stacey
// Blane Cleveland
// Keiren Bloggs
// Cayson Morse
// Nusaybah Gentry
// Maheen Macdonald
// Inigo Riddle
// Sufyaan Hartman
// Jeff Fletcher
// Kaya Doyle
// Yehuda Rice
// Whitney Washington
// Roma Robertson
// Kiaan Kerr
// Rosalind Franco`;

// let namesArray = name.split('\n');

// let typingSpeed = {}

// function createList(array) {
//     for(let i = 0; i < array.length; i++) {
//         let name = array[i];
//         let speed = Math.floor(Math.random() * 30 + 40); // 40 - 70
//         typingSpeed[name] = speed;
//     }
// }

// createList(namesArray);
// console.log(typingSpeed);

// let tvStatus = {}

// function createTvObject(arrayObject) {
//     for(let i = 0; i < arrayObject.length; i++) {
//         let key = arrayObject[i];
//         let rng = Math.ceil(Math.random() * 3);

//         if(rng == 1) {
//             let val = 'off';
//         } else {
//             let val = Math.ceil(Math.random() * 99);
//         }

//         tvStatus[key] = val;
//     }
// }

// createTvObject(namesArray);
// console.log(tvStatus);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* Create an object that will say the income of people you employ
100 names
: 'intern' 10%
: '10000 - 20000' 30%
: '30000 - 59999' 50%
: '80000 - 120000' 10%
: 1 person CEO: 250000 */

"use strict";


let names = `Anniyah Spence
Sumaiya Cannon
Nora Oneill
Rubie Talbot
Isaiah Blackwell
Freya Copeland
Kalem Robins
Asha Mcintosh
Zubair Byrd
Lucas Plummer
Mayur Buchanan
Lyndsey Waller
Abdallah Plant
Sania Power
Koby Wiley
Stefano Dickerson
Asma Armstrong
Addie Contreras
Jack Riddle
Layla-Mae Hutchings
Shelly Blankenship
Emrys Bush
Bhavik Maldonado
Tea Sexton
Hana Ponce
Aimie Squires
Georga Smith
Eliza Adamson
Zi Sellers
Lilliana Nairn
Marguerite Hibbert
Gregory Wilkes
Kianna Durham
Remy Flower
Makayla Mccormick
Lincoln Hughes
Lennon Burris
Milton Lowery
Tanner Hunter
Krishan Ritter
Kai Novak
Aisha Huang
Blanka Stein
Kareem Callaghan
Malak Cabrera
Raj Steadman
Lucca Doyle
Eshaal Bone
Demi-Lee Redfern
Shanon Davey
Yvie Hills
Anayah Mcphee
Vickie Miles
Korben Escobar
Kaylan Baird
Shelby Humphreys
Montana Dawson
Joanna Kavanagh
Rodrigo Juarez
Mya Prentice
Victor Espinosa
Rory Appleton
Yusuf Rosas
Beck Jensen
Pamela Olsen
Virginia Connolly
Aubrey Elliott
Bree Dixon
Peter Cousins
Marie Harrison
Faraz Alston
Vincent Mcconnell
Lynsey Bravo
Umayr Christie
Aila Tucker
Roshni Harris
Macauley Drake
Eloisa Mcdowell
Shana Findlay
Ehsan Devine
Princess Hudson
Adriana Harvey
Kymani Parry
Savanna Nelson
Kiki Wolfe
Zakaria Padilla
Tamia Archer
Damien Huff
Herbie Mckenna
Dario Cooke
Nicola Faulkner
Sanjay Blair
Ayden Gunn
Myla Mcdaniel
Gabriela Lloyd
Caden Millar
Cora Joyce
Eugene Knox
Ann-Marie Morris
Tasha Evans`;

let ceoExists = false;

let namesArray = names.split('\n');

let income = {}

function createIncomeObject(array) {
    for (let i = 0; i < array.length; i++) {
        let rng;
        let val;
        let key = array[i];

        if (i == 0) {
            rng = 0
        } else {
            rng = Math.ceil(Math.random() * 101);
        }


        if (rng > 90) {
            val = Math.floor(Math.random() * 40000 + 80000);
        } else if (rng > 40 && rng <= 90) {
            val = Math.floor(Math.random() * 29999 + 30000);
        } else if (rng > 10 && rng <= 40) {
            val = Math.floor(Math.random() * 10000 + 10000);
        } else if (rng > 0 && rng <= 10) {
            val = 'intern';
        } else if (rng == 0) {
            val = 250000;
        }

        income[key] = val;
    }
}

createIncomeObject(namesArray);
console.log(income);
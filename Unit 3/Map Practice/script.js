const input = `'Martin Pratt: 53%',
'Kain Gibbs: 76%',
'Shantelle Shah: 82%',
'Ritik Alcock: 80%',
'Abdurahman Ratcliffe: 57%',
'Bailey Garcia: 68%',
'Freyja Joyce: 99%',
'Abraham Davison: 92%',
'Zarah Cote: 95%',
'Aayush Keith: 100%',
'Melvin Fischer: 58%',
'Blane Ayala: 68%',
'Gregg Zuniga: 76%',
'Rizwan Goodwin: 64%',
'Denise Turner: 84%',
'Shelly Reed: 89%',
'Robin Ellwood: 87%',
'Pollyanna Hopkins: 67%',
'Darcey Martins: 79%',
'Javan Rankin: 92%',
'Lina Flower: 99%',
'Millie-Rose Lacey: 65%',
'Lynda Whitley: 100%',
'Emrys Banks: 77%',
'Bradleigh Hodges: 60%',
'Aishah Knott: 94%',
'Shannen Blanchard: 90%',
'Ellise Watson: 56%',
'Kimora Carver: 54%',
'Elaina Allison: 59%',
'Kobe Odom: 61%',
'Keeleigh Searle: 97%',
'Coby Peters: 52%',
'Leslie Whitmore: 93%',
'Christian Cook: 65%',
'Esme Downes: 77%',
'Nico Clegg: 74%',
'Aine Welch: 82%',
'Noah Huber: 97%',
'Dewey Benton: 55%',
'Ubaid Shannon: 88%',
'Todd Chadwick: 81%'`;

let studentGrades = new Map();

// Converts to arr and adds to map
let inputArr = input.split('\n')
for (i in inputArr) {
  let arr = inputArr[i].split('')

  arr.shift();
  if (arr.includes(",")) {
    arr.pop();
  }
  arr.splice(-2);

  inputArr[i] = arr.join('').split(':');
  inputArr[i][1] = inputArr[i][1].trim();

  studentGrades.set(inputArr[i][0], inputArr[i][1]);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function questionOne() {
  return studentGrades;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function questionTwo() {
  console.log(studentGrades.size);
  let names = '';
  for (key of studentGrades.keys()) {
    console.log(key);
    names += `\n${key} ${studentGrades}`
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let newStudents = `Isobella Moyer: 95%
Star Mcdougall: 56%
Blade Lennon: 72%
Karishma Molloy: 92%
Gregor Garner: 63%
Alec Peterson: 100%
Letitia Benitez: 67%
Elicia Hoover: 55%`;

newStudents = newStudents.split('\n')
for (i in newStudents) {
  newStudents[i] = newStudents[i].replace('%', '').split(':');
  newStudents[i][1] = newStudents[i][1].trim();

  studentGrades.set(newStudents[i][0], newStudents[i][1]);
}

function questionThree() {
  return studentGrades;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function questionFour() {
  let sumOfGrades = 0;
  for (value of studentGrades.values()) {
    sumOfGrades += +value;
  }

  return sumOfGrades / studentGrades.size;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function questionFive() {
  for (let i = 0; i < 4; i++) {
    let currentHighestStudent;
    let currentLowestStudent;
    let currentLowestScore = 100;
    let currentHighestScore = 0;

    for (entry of studentGrades.entries()) {
      if (entry[1] > currentHighestScore) {
        currentHighestStudent = entry[0];
        currentHighestScore = entry[1];
      }
      
      if (entry[1] < currentLowestScore) {
        currentLowestStudent = entry[0];
        currentLowestScore = entry[1];
      }
    }

    studentGrades.delete(currentLowestStudent);
    studentGrades.delete(currentHighestStudent);
  }

  return studentGrades;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function questionSix() {
  for (entry of studentGrades.entries()) {
    console.log(entry);
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.table(questionOne());
questionTwo();
console.table(questionThree());
console.log(questionFour());
console.table(qusetionFive());
questionSix();
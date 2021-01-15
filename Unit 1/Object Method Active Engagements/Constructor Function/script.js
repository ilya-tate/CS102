"use strict";


// function Student(name, id, grade, score) {
//     this.name = name;
//     this.id = id;
//     this.grade = grade;
//     this.score = score;
//     this.permissions = 'Student';

//     this.graduate = function() {
//         this.grade++;
//     };
//     this.whiteList = function() {
//         this.permissions = 'Admin';
//     };
//     this.setScore = function(grade) {
//         this.score = score;
//     };
// }

// let ilya = new Student('Ilya Tate', 123456, 11, 'A');

// ilya.whiteList();
// ilya.setScore(96);
// console.log(ilya);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// class Student { 
//     constructor(name, id, grade) {
//         this.name = name;
//         this.id = id;
//         this.grade = grade;
//         this.permissions = 'Student';
//     }

//     graduate() {
//         this.grade++;
//     }

//     whiteList() {
//         this.permissions = 'Admin';
//     }

//     setScore(score) {
//         this.score = score;
//     }
// }

// let ilya = new Student('Ilya T.', 123456, 11);

// ilya.graduate();
// ilya.graduate();
// ilya.whiteList();
// ilya.setScore('A');
// console.log(ilya);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// class User {
//     constructor() {
//         this.nameFirst =  'Ilya';
//         this.nameLast = 'Tate';
//     }

//     get fullName() {
//         return `${this.nameFirst} ${this.nameLast}`;
//     }

//     set fullName(value) {
//         [this.firstName, this.nameLast] = value.split(' ');
//     }
// };

// let user = new User();

// user.fullName = 'Ilya ButNotTateHahaGottem';
// console.log(user.fullName);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// class User
// set userName - >4 characters
// set password - >5 characters and contains =1 number
// login(username, password) - If correct log("Welcome in (username)")

let input;
let type;
let errorPlayed = false;

class User {
    constructor() {}

    set setUsername(username) {
        input = username
        type = 'username';

        if(input.length > 4) {
            this.username = input;
        } else if (errorPlayed != true) {
            error();
            errorPlayed = true;
        }
    }

    set setPassword(password) {
        input = password
        type = 'password';

        let arr = input.split('');

        if(input.length > 5) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].toUpperCase() == arr[i].toLowerCase()) {
                    this.password = input;
                }
            }
        } else if (errorPlayed != true) {
            error();
            errorPlayed = true;
        }

        if(this.password != input && errorPlayed != true) {
            error();
            errorPlayed = true;
        }
    }

    login(username, password) {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;

        type = 'login';

        if(this.username == username && this.password == password) {
            console.log(`Welcome ${this.username}!`);
            alert(`Welcome ${this.username}!`);
        } else if(errorPlayed != true) {
            error();
            errorPlayed = true;
        }
    }
}

function error() {
    if(type == 'username') {
        console.log(`Error: ${input} is not a valid username. Please enter at least 5 characters.`);
        alert(`Error: ${input} is not a valid username. Please enter at least 5 characters.`);
    } else if(type == 'password') {
        console.log(`Error: ${input} is not a valid password. Please enter at least 6 characters and a number.`);
        alert(`Error: ${input} is not a valid password. Please enter at least 6 characters and a number.`);
    } else if(type == 'login') {
        console.log("Error: Login does not exist.");
        alert("Error: Login does not exist.");
    } else {
        console.log("Error: Unknown");
        alert("Error: Unkown");
    }
}

function submit() {
    let user = new User();

    user.setUsername = document.getElementById("username").value;
    user.setPassword = document.getElementById("password").value;

    user.login('Ilya123', 'abc123')
}
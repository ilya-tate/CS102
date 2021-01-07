function student(name, ID, haircolor, favoritesnack, classname, session) {
    return {
        name: "Ilya Tate",
        ID: 123456,
        haircolor: "brown",
        favoritesnack: "Sun Chips",
        classname: "coding",
        session: "1:00 PM"
    };
}


let user = {}
let userName = prompt("Enter your name.", "Ex. Michael");
let userColor = prompt("What is your favorite color?", "Ex. Red");
let userRandNum = prompt("Enter a random number.", "Ex. 420");
user["name"] = userName;
user["color"] = userColor;
user["random num"] = userRandNum;
console.log(user);
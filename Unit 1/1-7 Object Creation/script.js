"use strict";



function submit() {
    let user = {}
    user["email"] = document.getElementById("email").value;
    user["id"] = +(document.getElementById("id").value);
    user["username"] = document.getElementById("user-name").value;
    user["password"] = document.getElementById("password").value;

    console.log(user);
    console.log(`User Email: ${user["name"]}\n
User ID: ${user["id"]}\n
User Name: ${user["username"]}\n
User Password: ${user["password"]}`);
}
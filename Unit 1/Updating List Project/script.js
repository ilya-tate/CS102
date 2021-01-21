"use strict";


function checkAge(dob) {
    dob = document.getElementById("dob").value;
    // Convert from mm-dd-yyyy to yyyy-mm-dd
    let dateArr = dob.split('/');
    let dobConverted = `${dateArr[2]}-${dateArr[0]}-${dateArr[1]}`;
    dob = new Date(dobConverted);

    let today = new Date()
    let difYear = today.getFullYear() - dob.getFullYear();

    // Checks age >=21 yrs old
    if(difYear >= 21 || difYear == 20 && dob.getMonth() >= today.getMonth() && dob.getDay() >= today.getDay()) {
        return true;
    } else {
        return false;
    }
}

function addCost() {
    let addedCost = 0;
    let extraCheckbox = document.getElementById("extra");

    // Checks for extras
    for(let i = 0, length = extraCheckbox.length; i < length; i++) {
        if(extraCheckbox[i].checked) {
            addedCost += 10;
        }
    }

    // ADD FOR BAGS
}
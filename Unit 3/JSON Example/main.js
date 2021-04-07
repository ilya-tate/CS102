let string = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}`;

let header = document.getElementById('header');
let section = document.getElementById('section');

init(string);

function init(string) {
   let superObj = JSON.parse(string);
    createHeader(superObj);
    createSection(superObj);
}

// Creates header content for HTML
function createHeader(obj) {
    // Creates h1 in header using the JSON
    const h1 = document.createElement('h1');
    h1.textContent = obj.squadName; // Same as obj["squadName"]
    header.appendChild(h1);

    // Creates the isActive based on the boolean obj[active"]
    let isActive = '';
    if (obj["active"] == true) {
        isActive = 'They are currently active';
    } else {
        isActive = 'They are currently on vacation';
    }


    // Creates a subheader
    const para = document.createElement('p');
    para.textContent = `Home Town: ${obj["homeTown"]} || Formed: ${obj["formed"]} || ${isActive}`; // isActive is a state
    header.appendChild(para);
}

// Creates information abotu all the heroes in the city
function createSection(obj) {
    const members = obj["members"];
    for (i in members) {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const list = document.createElement('ul');

        h2.textContent = members[i]["name"];
        p1.textContent = `Secret Identity: ${members[i]["secretIdentity"]}`;
        p2.textContent = `Age: ${members[i]["age"]}`;

        p3.textContent = 'Super Powers:';
        const powers = members[i]["powers"];
        for (j in powers) {
            const listItem = document.createElement('li');
            listItem.textContent = powers[j];
            list.appendChild(listItem);
        }

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(list);
        section.appendChild(article);
    }
}
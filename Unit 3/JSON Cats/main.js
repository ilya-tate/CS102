let cats = `{
  "title": "Cat Families",
  "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us.",
  "cats": [
    {
      "name": "Lindy",
      "breed": "Cymric",
      "color": "white",
      "kittens": [
        {
          "name": "Percy",
          "gender": "m"
        },
        {
          "name": "Thea",
          "gender": "f"
        },
        {
          "name": "Annis",
          "gender": "f"
        }
      ]
    },
    {
      "name": "Mina",
      "breed": "Aphrodite Giant",
      "color": "ginger",
      "kittens": [
        {
          "name": "Doris",
          "gender": "f"
        },
        {
          "name": "Pickle",
          "gender": "f"
        },
        {
          "name": "Max",
          "gender": "m"
        }
      ]
    },
    {
      "name": "Antonia",
      "breed": "Ocicat",
      "color": "leopard spotted",
      "kittens": [
        {
          "name": "Bridget",
          "gender": "f"
        },
        {
          "name": "Randolph",
          "gender": "m"
        }
      ]
    }
  ]
}`;

const header = document.getElementById('header');
const section = document.getElementById('section');

init(cats);

function init(str) {
  let obj = JSON.parse(str);
  createHeader(obj);
  createSection(obj);
}


function createHeader(obj) {
  const title = document.createElement('h1');
  title.textContent = obj["title"];
  header.appendChild(title);

  const desc = document.createElement('p');
  desc.textContent = obj["intro"];
  header.appendChild(desc);
}

function createSubheader(obj) {
  const mothers = obj["cats"];

  for (mother of mothers) {
    const article = document.createElement('article');
    const motherName = document.createElement('h2');
    const motherBreed = document.createElement('p');
    const motherColor = document.createElement('p');
    const kittensListHead = document.createElement('h4');
    const kittensList = document.createElement('ul');

    motherName.textContent = mother["name"];
    motherBreed.textContent = `Breed: ${mother["breed"]}`;
    motherColor.textContent = `Color: ${mother["color"]}`;
    kittensListHead.textContent = 'Kittens:';

    const kittens = mother["kittens"];
    for (kitten of kittens) {
      let kitten = document.createELement('li');
    }
  }
}
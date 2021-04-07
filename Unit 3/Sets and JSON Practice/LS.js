let text = localStorage.getItem('testStorage');
console.log(text);

let obj = JSON.parse(text);
console.log(obj);

document.getElementById('test').innerHTML = obj.name;
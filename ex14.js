const prompt = require('prompt-sync')();

let names = [];

for (let i = 0; i < 7; i++) {
    let name = prompt(`Digite o nome da pessoa ${i + 1}: `);
    names.push(name);
}

console.log("Nomes na ordem inversa:");
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

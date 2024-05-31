const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

// Ler o nome e a idade de 9 pessoas
for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    
    nomes.push(nome);
    idades.push(idade);
}

// Mostrar a listagem contendo apenas os dados das pessoas menores de idade
console.log("\nPessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}

const prompt = require('prompt-sync')();

let numbers = [];

// Preencher o vetor com números aleatórios entre 0 e 99
for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100)); // Gera um número aleatório entre 0 e 99
}

// Mostrar os números gerados
console.log("Números gerados:");
console.log(numbers.join(", "));

// Ordenar o vetor em ordem crescente
numbers.sort((a, b) => a - b);

// Mostrar os números ordenados
console.log("Números ordenados:");
console.log(numbers.join(", "));
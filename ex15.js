const prompt = require('prompt-sync')();

let numbers = [];
let evenNumbers = [];
let evenPositions = [];

// Ler 10 números inteiros e armazená-los no vetor
for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt(`Digite o número ${i + 1}: `));
    numbers.push(number);
}

// Verificar quais números são pares e armazenar os números pares e suas posições
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
        evenPositions.push(i);
    }
}

// Mostrar os números pares e suas posições
if (evenNumbers.length > 0) {
    console.log("Números pares e suas posições:");
    for (let i = 0; i < evenNumbers.length; i++) {
        console.log(`Número par: ${evenNumbers[i]} na posição: ${evenPositions[i]}`);
    }
} else {
    console.log("Nenhum número par foi digitado.");
}

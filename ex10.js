const prompt = require('prompt-sync')();

let sum = 0;
let count = 0;
let min = null;
let evenCount = 0;

do {
    const numInput = prompt("Digite um número: ");
    const num = parseFloat(numInput);

    if (isNaN(num)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    sum += num;
    count++;

    if (min === null || num < min) { //null pq estou assumindo inicialmente que min = null
        min = num;
    }

    if (num % 2 === 0) {
        evenCount++;
    }

    var continueInput = prompt("Deseja continuar? (S/N): ");
} while (continueInput === 'S');

const average = sum / count;

console.log(`Somatório: ${sum}`);
console.log(`Menor valor: ${min}`);
console.log(`Média: ${average}`);
console.log(`Quantidade de valores pares: ${evenCount}`);

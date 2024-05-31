const prompt = require('prompt-sync')();


const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
const razao = parseFloat(prompt("Digite a razão da PA: "));

let pa = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let termoAtual = primeiroTermo + (i * razao);
    pa.push(termoAtual);
    soma += termoAtual;
}

console.log("Os 10 primeiros termos da PA são:");
console.log(pa.join(", "));

console.log(`A soma de todos os valores da PA é: ${soma}`);
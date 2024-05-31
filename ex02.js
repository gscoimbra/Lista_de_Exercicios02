const prompt = require('prompt-sync')();

const velocidade = parseInt(prompt("Velocidade: "));

if (velocidade > 80) {
    console.log("Valor da multa: R$" + (velocidade - 80) * 5);
}
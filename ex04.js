const prompt = require('prompt-sync')();

const segmento1 = prompt("Tamanho segmento 1: ");
const segmento2 = prompt("Tamanho segmento 2: ");
const segmento3 = prompt("Tamanho segmento 3: ");

if (segmento1 + segmento2 > segmento3 && segmento1 + segmento3 > segmento2 && segmento2 + segmento3 > segmento1) {
    console.log("Forma triângulo")
}
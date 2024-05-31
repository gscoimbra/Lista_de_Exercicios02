const prompt = require('prompt-sync')();

const distancia = parseInt(prompt("Distância a percorrer em km: "))

if (distancia <= 200) {
    console.log("Preço da passagem: R$" + distancia * 0.5)
} else {
    console.log("Preço da passagem: " + distancia * 0.45)
}
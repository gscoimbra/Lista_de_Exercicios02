const prompt = require('prompt-sync')();

const horasAtividadeFisica = parseInt(prompt("Horas de atividade física: "))

let pontos = 0;

if (horasAtividadeFisica <= 10) {
    pontos = horasAtividadeFisica * 2
} else if (horasAtividadeFisica > 10 && horasAtividadeFisica <= 20) {
    pontos = horasAtividadeFisica * 5
} else {
    pontos = horasAtividadeFisica * 10
}

console.log("Pontos: " + pontos)
console.log("Faturamento: R$" + pontos * 0.05)

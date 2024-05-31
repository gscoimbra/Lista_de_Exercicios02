const prompt = require('prompt-sync')();

const cigarrosPorDia = parseInt(prompt("Cigarros por dia: "))
const anosFumando = parseInt(prompt("Anos fumando: "))

const totalDeCigarros = cigarrosPorDia * 365 * anosFumando
const tempoPerdido = (totalDeCigarros * 10)/(24 * 60)

console.log("Dias perdidos: " + tempoPerdido.toFixed(2))


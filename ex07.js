const prompt = require('prompt-sync')();

const carro = prompt("Carro popular ou luxo?: ")
const diasDeAluguel = parseInt(prompt("Dias de aluguel: "))
const KmPercorridos = parseInt(prompt("Km percorridos: "))

if (carro === "popular") {
    if (KmPercorridos <= 100) {
        console.log("Valor total: R$" + (90 * diasDeAluguel + KmPercorridos * 0.20))
    } else {
        console.log("Valor total: R$" + 90 * diasDeAluguel + KmPercorridos * 0.10)
    }
} else {
    if (KmPercorridos <= 200) {
        console.log("Valor total: R$" + (150 * diasDeAluguel + KmPercorridos * 0.30))
    } else {
        console.log("Valor total: R$" + (150 * diasDeAluguel + KmPercorridos * 0.25))
    }
}
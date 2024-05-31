const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 5) + 1;

while (true) {
    const chute = parseInt(prompt("Digite um número de 1 a 5: "));
    if (numeroAleatorio === chute) {
        console.log("Parabéns, vc acertou!")
        break
    } else
        console.log("Tente novamente")
}
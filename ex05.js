const prompt = require('prompt-sync')();

const escolhas = ['pedra', 'papel', 'tesoura']
const escolhaDoComputador = escolhas[Math.floor(Math.random() * escolhas.length)]
const escolhaDoJogador = prompt("Pedra, papel ou tesoura?: ")

let resultado;

if (escolhaDoJogador === escolhaDoComputador)
    console.log("Empate!")
else if ((escolhaDoJogador === 'pedra' && escolhaDoComputador === 'tesoura') || (escolhaDoJogador === 'papel' && escolhaDoComputador === 'pedra') || (escolhaDoJogador === 'tesoura' && escolhaDoComputador === 'papel'))
    console.log("Você ganhou!")
else
    console.log("Você perdeu!")
const prompt = require('prompt-sync')();

function criarMatrizIdentidade(tamanho) {
    // Inicializa a matriz com zeros
    let matriz = [];
    for (let i = 0; i < tamanho; i++) {
        let linha = [];
        for (let j = 0; j < tamanho; j++) {
            linha.push(0);
        }
        matriz.push(linha);
    }

    // Define os elementos da diagonal principal como 1
    for (let i = 0; i < tamanho; i++) {
        matriz[i][i] = 1;
    }

    return matriz;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const tamanho = 7;
const matrizIdentidade = criarMatrizIdentidade(tamanho);
imprimirMatriz(matrizIdentidade);

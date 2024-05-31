const prompt = require('prompt-sync')();

// Função para criar e preencher uma matriz 3x3 com valores fornecidos pelo usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para calcular a média dos elementos da diagonal secundária
function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return soma / matriz.length;
}

// Função principal
function main() {
    // Cria a matriz 3x3
    console.log("Digite os valores da matriz 3x3:");
    let matriz = criarMatriz();

    // Calcula a média dos elementos da diagonal secundária
    let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

    // Multiplica os elementos da diagonal principal pela média da diagonal secundária
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][i] *= mediaDiagonalSecundaria;
    }

    // Imprime a matriz modificada
    console.log("Matriz modificada:");
    console.table(matriz);
}

main();

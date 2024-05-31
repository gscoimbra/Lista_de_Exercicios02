const prompt = require('prompt-sync')();

// Função para criar uma matriz 10x10 e preencher com valores do usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
        let linha = [];
        for (let j = 0; j < 10; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para calcular a soma dos elementos acima da diagonal principal
function somaAcimaDiagonal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Função para calcular a soma dos elementos abaixo da diagonal principal
function somaAbaixoDiagonal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Função principal
function main() {
    // Cria a matriz 10x10
    console.log("Digite os valores da matriz 10x10:");
    let matriz = criarMatriz();

    // Calcula a soma dos elementos acima e abaixo da diagonal principal
    let somaAcima = somaAcimaDiagonal(matriz);
    let somaAbaixo = somaAbaixoDiagonal(matriz);

    // Imprime os resultados
    console.log("Soma dos elementos acima da diagonal principal:", somaAcima);
    console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);
}

main();

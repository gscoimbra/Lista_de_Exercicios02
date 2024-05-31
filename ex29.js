const prompt = require('prompt-sync')();

// Função para criar uma matriz 5x5 e preencher com valores do usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        let linha = [];
        for (let j = 0; j < 5; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para calcular a soma da linha 4
function somaLinha4(matriz) {
    let soma = 0;
    for (let j = 0; j < matriz[3].length; j++) {
        soma += matriz[3][j];
    }
    return soma;
}

// Função para calcular a soma da coluna 2
function somaColuna2(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][1];
    }
    return soma;
}

// Função para calcular a soma da diagonal principal
function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

// Função para calcular a soma de todos os elementos da matriz
function somaTotal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Função principal
function main() {
    // Cria a matriz 5x5
    console.log("Digite os valores da matriz 5x5:");
    let matriz = criarMatriz();

    // Calcula as somas solicitadas
    let somaLinha4Result = somaLinha4(matriz);
    let somaColuna2Result = somaColuna2(matriz);
    let somaDiagonalPrincipalResult = somaDiagonalPrincipal(matriz);
    let somaTotalResult = somaTotal(matriz);

    // Imprime as somas e a matriz
    console.log("Soma da linha 4:", somaLinha4Result);
    console.log("Soma da coluna 2:", somaColuna2Result);
    console.log("Soma da diagonal principal:", somaDiagonalPrincipalResult);
    console.log("Soma de todos os elementos da matriz:", somaTotalResult);
    console.log("Matriz:");
    console.table(matriz);
}

main();

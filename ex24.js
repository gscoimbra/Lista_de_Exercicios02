const prompt = require('prompt-sync')();

// Função para gerar uma matriz com valores aleatórios, incluindo negativos
function gerarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            // Gera um valor aleatório entre -10 e 10
            let valor = Math.floor(Math.random() * 21) - 10;
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para contar elementos negativos em cada linha da matriz
function contarNegativosPorLinha(matriz) {
    let contagemNegativos = [];
    for (let i = 0; i < matriz.length; i++) {
        let contagem = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contagem++;
            }
        }
        contagemNegativos.push(contagem);
    }
    return contagemNegativos;
}

// Função para imprimir a matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Função principal
function main() {
    const linhas = 6;
    const colunas = 8;

    // Gera a matriz M[1..6, 1..8]
    let matriz = gerarMatriz(linhas, colunas);

    console.log("Matriz M:");
    imprimirMatriz(matriz);

    // Conta os elementos negativos por linha e armazena no vetor C
    let vetorC = contarNegativosPorLinha(matriz);

    console.log("Vetor C com a quantidade de elementos negativos por linha:");
    console.log(vetorC);
}

main();

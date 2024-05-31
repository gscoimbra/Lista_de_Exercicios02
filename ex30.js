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

// Função para calcular as somas das linhas e colunas da matriz
function calcularSomas(matriz) {
    let somasLinhas = [];
    let somasColunas = [];
    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = 0;
        let somaColuna = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }
        somasLinhas.push(somaLinha);
        somasColunas.push(somaColuna);
    }
    return { somasLinhas, somasColunas };
}

// Função principal
function main() {
    // Cria a matriz 5x5
    console.log("Digite os valores da matriz 5x5:");
    let matriz = criarMatriz();

    // Calcula as somas das linhas e colunas
    let { somasLinhas, somasColunas } = calcularSomas(matriz);

    // Imprime a matriz e os vetores de somas
    console.log("Matriz:");
    console.table(matriz);
    console.log("Vetor de somas das linhas:");
    console.log(somasLinhas);
    console.log("Vetor de somas das colunas:");
    console.log(somasColunas);
}

main();

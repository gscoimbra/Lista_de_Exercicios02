const prompt = require('prompt-sync')();

// Função para gerar uma matriz de 15x20 com valores reais
function gerarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            // Lê um valor real para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para a posição [${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para calcular a soma de cada coluna
function calcularSomaColunas(matriz) {
    let colunas = matriz[0].length;
    let somaColunas = Array(colunas).fill(0);
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < colunas; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }
    
    return somaColunas;
}

// Função principal
function main() {
    const linhas = 15;
    const colunas = 20;

    console.log(`Digite os valores para a matriz de ${linhas}x${colunas}:`);
    
    // Gera a matriz de 15x20
    let matriz = gerarMatriz(linhas, colunas);

    // Calcula a soma de cada coluna
    let somaColunas = calcularSomaColunas(matriz);

    // Mostra a soma de cada coluna
    for (let j = 0; j < colunas; j++) {
        console.log(`Soma da coluna ${j + 1}: ${somaColunas[j]}`);
    }
}

main();

const prompt = require('prompt-sync')();

// Função para gerar uma matriz de tamanho especificado
function gerarMatriz(linhas, colunas, nomeMatriz) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            // Lê um valor real para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para a matriz ${nomeMatriz} na posição [${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para calcular a matriz produto P
function calcularMatrizProduto(matrizA, matrizB) {
    let linhas = matrizA.length;
    let colunas = matrizA[0].length;
    let matrizP = [];
    
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(matrizA[i][j] * matrizB[i][j]);
        }
        matrizP.push(linha);
    }
    
    return matrizP;
}

// Função para imprimir a matriz
function imprimirMatriz(matriz, nomeMatriz) {
    console.log(`Matriz ${nomeMatriz}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Função principal
function main() {
    const linhas = 3;
    const colunas = 5;

    // Gera as matrizes A e B
    console.log(`Digite os valores para a matriz A de ${linhas}x${colunas}:`);
    let matrizA = gerarMatriz(linhas, colunas, 'A');

    console.log(`Digite os valores para a matriz B de ${linhas}x${colunas}:`);
    let matrizB = gerarMatriz(linhas, colunas, 'B');

    // Calcula a matriz produto P
    let matrizP = calcularMatrizProduto(matrizA, matrizB);

    // Imprime as matrizes A, B e P
    imprimirMatriz(matrizA, 'A');
    imprimirMatriz(matrizB, 'B');
    imprimirMatriz(matrizP, 'P');
}

main();

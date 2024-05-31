const prompt = require('prompt-sync')();

// Função para criar uma matriz de tamanho especificado e preencher com valores do usuário
function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para multiplicar todos os elementos da matriz por um valor
function multiplicarMatrizPorValor(matriz, valor) {
    let vetor = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor.push(matriz[i][j] * valor);
        }
    }
    return vetor;
}

// Função para imprimir um vetor
function imprimirVetor(vetor) {
    console.log("Vetor V:");
    console.log(vetor.join(', '));
}

// Função principal
function main() {
    const linhas = 6;
    const colunas = 6;

    // Cria a matriz M
    console.log("Digite os valores da matriz M(6,6):");
    let matrizM = criarMatriz(linhas, colunas);

    // Lê o valor A
    let valorA = parseFloat(prompt("Digite o valor de A: "));

    // Multiplica a matriz M pelo valor A e armazena os resultados em um vetor V
    let vetorV = multiplicarMatrizPorValor(matrizM, valorA);

    // Imprime o vetor V
    imprimirVetor(vetorV);
}

main();

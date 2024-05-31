const prompt = require('prompt-sync')();

// Função para criar e preencher uma matriz 50x50 com valores fornecidos pelo usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
        let linha = [];
        for (let j = 0; j < 50; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função principal
function main() {
    // Cria a matriz 50x50
    console.log("Digite os valores da matriz 50x50:");
    let matriz = criarMatriz();

    // Multiplica cada linha pelo elemento da diagonal principal
    for (let i = 0; i < 50; i++) {
        let diagonalPrincipal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= diagonalPrincipal;
        }
    }

    // Imprime a matriz modificada
    console.log("Matriz após as multiplicações:");
    console.table(matriz);
}

main();

const prompt = require('prompt-sync')();

// Função para criar uma matriz 12x13 e preencher com valores do usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 12; i++) {
        let linha = [];
        for (let j = 0; j < 13; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para dividir todos os elementos de cada linha pelo maior elemento em módulo
function dividirPorMaiorElemento(matriz) {
    let matrizModificada = [];
    for (let i = 0; i < matriz.length; i++) {
        let linha = matriz[i];
        let maiorElemento = Math.max(...linha.map(Math.abs)); // Encontra o maior elemento em módulo
        let linhaModificada = linha.map(elemento => elemento / maiorElemento); // Divide todos os elementos pelo maior elemento em módulo
        matrizModificada.push(linhaModificada);
    }
    return matrizModificada;
}

// Função principal
function main() {
    // Cria a matriz 12x13
    console.log("Digite os valores da matriz 12x13:");
    let matrizM = criarMatriz();

    // Divide todos os elementos de cada linha pelo maior elemento em módulo
    let matrizModificada = dividirPorMaiorElemento(matrizM);

    // Imprime a matriz original e a modificada
    console.log("Matriz original:");
    console.table(matrizM);
    console.log("Matriz modificada:");
    console.table(matrizModificada);
}

main();

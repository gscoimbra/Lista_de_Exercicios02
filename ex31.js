const prompt = require('prompt-sync')();

// Função para criar uma matriz 30x30 e preencher com valores do usuário
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 30; i++) {
        let linha = [];
        for (let j = 0; j < 30; j++) {
            // Lê um valor para cada posição na matriz
            let valor = parseInt(prompt(`Digite o valor para V[${i+1}][${j+1}]: `));
            linha.push(valor);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para contar quantos valores iguais a A estão na matriz e criar a matriz X
function contarValoresEcriarX(matriz, A) {
    let contador = 0;
    let matrizX = [];
    for (let i = 0; i < matriz.length; i++) {
        let linhaX = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                contador++;
            } else {
                linhaX.push(matriz[i][j]);
            }
        }
        matrizX.push(linhaX);
    }
    return { contador, matrizX };
}

// Função principal
function main() {
    // Lê o número inteiro A
    let A = parseInt(prompt("Digite um número inteiro A: "));

    // Cria a matriz 30x30
    console.log("Digite os valores da matriz 30x30:");
    let matrizV = criarMatriz();

    // Conta quantos valores iguais a A estão na matriz e cria a matriz X
    let { contador, matrizX } = contarValoresEcriarX(matrizV, A);

    // Imprime os resultados
    console.log(`Quantidade de valores iguais a A na matriz: ${contador}`);
    console.log("Matriz X:");
    console.table(matrizX);
}

main();

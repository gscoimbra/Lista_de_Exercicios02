const prompt = require('prompt-sync')();

// Função para ler um vetor de 6 posições
function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        let elemento = parseFloat(prompt(`Digite o elemento ${i + 1}: `));
        vetor.push(elemento);
    }
    return vetor;
}

// Função para calcular a soma dos elementos do vetor
function calcularSoma(vetor) {
    let soma = 0;
    for (let elemento of vetor) {
        soma += elemento;
    }
    return soma;
}

// Função para calcular o produto dos elementos do vetor
function calcularProduto(vetor) {
    let produto = 1;
    for (let elemento of vetor) {
        produto *= elemento;
    }
    return produto;
}

// Função para calcular a média dos elementos do vetor
function calcularMedia(vetor) {
    let soma = calcularSoma(vetor);
    return soma / vetor.length;
}

// Função para ordenar os elementos do vetor em ordem crescente
function ordenarVetor(vetor) {
    return vetor.sort((a, b) => a - b);
}

// Função principal
function main() {
    // Ler o vetor
    let vetor = lerVetor();

    // Ler a operação a ser realizada
    let operacao = parseInt(prompt("Escolha a operação (1 - soma, 2 - produto, 3 - média, 4 - ordenar, 5 - mostrar vetor): "));

    // Realizar a operação conforme a escolha do usuário
    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", calcularSoma(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", calcularProduto(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", calcularMedia(vetor));
            break;
        case 4:
            console.log("Vetor ordenado:", ordenarVetor(vetor));
            break;
        case 5:
            console.log("Vetor:", vetor);
            break;
        default:
            console.log("Opção inválida.");
    }
}

// Chamada da função principal
main();

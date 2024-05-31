const prompt = require('prompt-sync')();

// Função para ler um vetor de tamanho especificado
function lerVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        let elemento = parseFloat(prompt(`Digite o elemento ${i + 1}: `));
        vetor.push(elemento);
    }
    return vetor;
}

// Função para compactar o vetor, removendo os valores nulos e negativos
function compactarVetor(vetor) {
    let vetorCompactado = [];
    for (let elemento of vetor) {
        if (elemento > 0) {
            vetorCompactado.push(elemento);
        }
    }
    return vetorCompactado;
}

// Função principal
function main() {
    // Ler o vetor A de 100 posições
    let vetorA = lerVetor(100);

    // Compactar o vetor A
    let vetorB = compactarVetor(vetorA);

    // Exibir o vetor B compactado
    console.log("Vetor B (compactado):", vetorB);
}

// Chamada da função principal
main();

const prompt = require('prompt-sync')();

// Função para ler um vetor de tamanho especificado
function lerVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        let elemento = parseInt(prompt(`Digite o número ${i + 1}: `));
        vetor.push(elemento);
    }
    return vetor;
}

// Função para verificar se dois vetores são iguais
function saoIguais(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        return false;
    }
    for (let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] !== vetor2[i]) {
            return false;
        }
    }
    return true;
}

// Função principal
function main() {
    // Ler o resultado oficial da Loto
    console.log("Digite o resultado oficial da Loto:");
    let resultadoOficial = lerVetor(5);

    // Ler as 50 apostas
    let ganhadorEncontrado = false;
    for (let i = 0; i < 50; i++) {
        console.log(`Digite os números da aposta ${i + 1}:`);
        let aposta = lerVetor(5);
        if (saoIguais(aposta, resultadoOficial)) {
            console.log("Ganhador!");
            ganhadorEncontrado = true;
            break; // Encerra o loop se encontrar um ganhador
        }
    }

    // Se nenhum ganhador foi encontrado, exibir uma mensagem
    if (!ganhadorEncontrado) {
        console.log("Nenhum ganhador encontrado.");
    }
}

// Chamada da função principal
main();

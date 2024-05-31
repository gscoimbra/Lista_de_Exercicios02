const prompt = require('prompt-sync')();

// Função para preencher os vetores de acordo com a paridade dos números lidos
function preencherVetores() {
    let vetorPar = [];
    let vetorImpar = [];
    let countPar = 0;
    let countImpar = 0;

    for (let i = 0; i < 30; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

        if (numero % 2 === 0) {
            vetorPar.push(numero);
            countPar++;

            if (countPar === 5) {
                console.log("Vetor Par cheio:", vetorPar);
                vetorPar = [];
                countPar = 0;
            }
        } else {
            vetorImpar.push(numero);
            countImpar++;

            if (countImpar === 5) {
                console.log("Vetor Ímpar cheio:", vetorImpar);
                vetorImpar = [];
                countImpar = 0;
            }
        }
    }

    // Verifica se os vetores não estão vazios e os imprime
    if (vetorPar.length > 0) {
        console.log("Vetor Par:", vetorPar);
    }
    if (vetorImpar.length > 0) {
        console.log("Vetor Ímpar:", vetorImpar);
    }
}

// Chamada da função principal
preencherVetores();

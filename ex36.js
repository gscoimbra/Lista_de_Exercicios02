const prompt = require('prompt-sync')();

// Função para ler o gabarito do teste
function lerGabarito() {
    let gabarito = [];
    for (let i = 0; i < 13; i++) {
        let resposta = parseInt(prompt(`Digite a resposta da questão ${i + 1}: `));
        gabarito.push(resposta);
    }
    return gabarito;
}

// Função para ler as respostas de um apostador
function lerRespostas(numeroApostador) {
    let respostas = [];
    for (let i = 0; i < 13; i++) {
        let resposta = parseInt(prompt(`Digite a resposta da questão ${i + 1} para o apostador ${numeroApostador}: `));
        respostas.push(resposta);
    }
    return respostas;
}

// Função para verificar o número de acertos de um apostador
function verificarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 13; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

// Função principal
function main() {
    // Ler o gabarito do teste
    console.log("=== Gabarito do teste ===");
    let gabarito = lerGabarito();

    // Ler as respostas dos apostadores e verificar os acertos
    for (let i = 1; i <= 100; i++) {
        console.log(`=== Apostador ${i} ===`);
        let respostas = lerRespostas(i);
        let numeroAcertos = verificarAcertos(gabarito, respostas);
        console.log(`Número de acertos: ${numeroAcertos}`);

        // Verificar se o apostador é o ganhador
        if (numeroAcertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    }
}

// Chamada da função principal
main();

const prompt = require('prompt-sync')();

// Função para ler o gabarito da prova
function lerGabarito() {
    let gabarito = [];
    for (let i = 0; i < 20; i++) {
        let resposta = prompt(`Digite a resposta da questão ${i + 1}: `);
        gabarito.push(resposta);
    }
    return gabarito;
}

// Função para ler as respostas de um aluno
function lerRespostas(numeroAluno) {
    let respostas = [];
    for (let i = 0; i < 20; i++) {
        let resposta = prompt(`Digite a resposta da questão ${i + 1} para o aluno ${numeroAluno}: `);
        respostas.push(resposta);
    }
    return respostas;
}

// Função para contar o número de acertos de um aluno
function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

// Função principal
function main() {
    // Ler o gabarito da prova
    console.log("=== Gabarito da prova ===");
    let gabarito = lerGabarito();

    // Ler as respostas dos alunos e contar os acertos
    for (let i = 1; i <= 50; i++) {
        console.log(`=== Aluno ${i} ===`);
        let respostas = lerRespostas(i);
        let numeroAcertos = contarAcertos(gabarito, respostas);
        console.log(`Número de acertos: ${numeroAcertos}`);

        // Verificar se o aluno está aprovado ou reprovado
        if (numeroAcertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

// Chamada da função principal
main();

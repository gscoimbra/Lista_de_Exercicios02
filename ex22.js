const prompt = require('prompt-sync')();

function calcularEstatisticas() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let countPessoas = 0;
    let countSalarioAte350 = 0;
    let maiorSalario = 0;

    while (true) {
        const salario = parseFloat(prompt('Digite o salário (ou um valor negativo para sair): '));
        if (salario < 0) {
            break;
        }
        
        const numeroFilhos = parseInt(prompt('Digite o número de filhos: '), 10);

        totalSalario += salario;
        totalFilhos += numeroFilhos;
        countPessoas++;

        if (salario <= 350) {
            countSalarioAte350++;
        }

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
    }

    if (countPessoas === 0) {
        console.log('Nenhuma pessoa foi registrada.');
        return;
    }

    const mediaSalario = totalSalario / countPessoas;
    const mediaFilhos = totalFilhos / countPessoas;
    const percentualSalarioAte350 = (countSalarioAte350 / countPessoas) * 100;

    console.log(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
    console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioAte350.toFixed(2)}%`);
}

calcularEstatisticas();

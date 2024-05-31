const prompt = require('prompt-sync')();

// Constantes
const NUM_EMPREGADOS = 80;
const DESCONTO_INSS = 0.12;

// Função para calcular a dedução do INSS e o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    const deducaoINSS = salarioBruto * DESCONTO_INSS;
    const salarioLiquido = salarioBruto - deducaoINSS;
    return { deducaoINSS, salarioLiquido };
}

// Função para ler dados dos empregados
function lerDadosEmpregados() {
    const empregados = [];
    for (let i = 0; i < NUM_EMPREGADOS; i++) {
        console.log(`\nDigite os dados do empregado ${i + 1}:`);
        const matricula = prompt('Matrícula: ');
        const nome = prompt('Nome: ');
        const salarioBruto = parseFloat(prompt('Salário bruto: '));

        empregados.push({ matricula, nome, salarioBruto });
    }
    return empregados;
}

// Função para emitir contracheques
function emitirContracheques(empregados) {
    empregados.forEach(empregado => {
        const { deducaoINSS, salarioLiquido } = calcularSalarioLiquido(empregado.salarioBruto);
        console.log(`\nContracheque do empregado:`);
        console.log(`Matrícula: ${empregado.matricula}`);
        console.log(`Nome: ${empregado.nome}`);
        console.log(`Salário bruto: R$ ${empregado.salarioBruto.toFixed(2)}`);
        console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
        console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    });
}

// Execução do programa
const empregados = lerDadosEmpregados();
emitirContracheques(empregados);

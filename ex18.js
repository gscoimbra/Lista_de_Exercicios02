const prompt = require('prompt-sync')();

// Criação do registro para o funcionário
let funcionario = {
    nome: '',
    cargo: '',
    salario: 0
};

// Ler os dados do funcionário
funcionario.nome = prompt('Digite o nome do funcionário: ');
funcionario.cargo = prompt('Digite o cargo do funcionário: ');
funcionario.salario = parseFloat(prompt('Digite o salário do funcionário: '));

// Exibir o conteúdo do registro
console.log("\nDados do Funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);

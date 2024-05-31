const prompt = require('prompt-sync')();

let salarioTotalHomens = 0;
let salarioTotalMulheres = 0;

while (true) {
    let salario = parseFloat(prompt("Salário: "));
    if (isNaN(salario) || salario < 0) {
        console.log("Insira um salário válido");
        continue;
    }
    let genero = prompt("Masculino ou Feminino: ");
    if (genero === "Masculino") {
        salarioTotalHomens += salario;
    } else if (genero === "Feminino") {
        salarioTotalMulheres += salario;
    } else {
        console.log("Insira Masculino ou Feminino");
        continue;
    }
    let mais = prompt("Deseja inserir mais algum funcionário?(S/N): ")
    if (mais === 'S') {
        continue;
    } else {
        break;
    }
}

console.log(`Salário total pago ao homens: ${salarioTotalHomens}`);
console.log(`Salário total pago ao homens: ${salarioTotalMulheres}`);
const prompt = require('prompt-sync')();

// Função para calcular o peso ideal
function calcularPesoIdeal(alt, sexo) {
    let pesoIdeal;
    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = 72.7 * alt - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = 62.1 * alt - 44.7;
    } else {
        throw new Error('Sexo inválido. Use "masculino" ou "feminino".');
    }
    return pesoIdeal;
}

// Solicitar altura e sexo do usuário
const altura = parseFloat(prompt('Digite a altura em metros: '));
const sexo = prompt('Digite o sexo (masculino/feminino): ');

try {
    const pesoIdeal = calcularPesoIdeal(altura, sexo);
    console.log(`O peso ideal para uma pessoa de sexo ${sexo} e altura ${altura}m é: ${pesoIdeal.toFixed(2)} kg`);
} catch (error) {
    console.error(error.message);
}

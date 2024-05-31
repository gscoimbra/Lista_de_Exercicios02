const prompt = require('prompt-sync')();

// Função para validar e formatar um horário
function validarHorario(horario) {
    const partes = horario.split(':');
    if (partes.length !== 3) {
        return false;
    }

    const horas = parseInt(partes[0], 10);
    const minutos = parseInt(partes[1], 10);
    const segundos = parseInt(partes[2], 10);

    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        return false;
    }

    if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
        return false;
    }

    return true;
}

// Função para ler e validar horários
function lerHorarios() {
    const horarios = [];
    for (let i = 0; i < 5; i++) {
        let horarioValido = false;
        let horario;

        while (!horarioValido) {
            horario = prompt(`Digite o horário ${i + 1} no formato HH:MM:SS: `);
            horarioValido = validarHorario(horario);

            if (!horarioValido) {
                console.log('Horário inválido. Por favor, tente novamente.');
            }
        }

        horarios.push(horario);
    }
    return horarios;
}

// Função para exibir horários no formato HH.MM.SS
function exibirHorarios(horarios) {
    console.log('\nHorários informados:');
    horarios.forEach(horario => {
        const partes = horario.split(':');
        console.log(`${partes[0]}.${partes[1]}.${partes[2]}`);
    });
}

// Execução do programa
const horarios = lerHorarios();
exibirHorarios(horarios);

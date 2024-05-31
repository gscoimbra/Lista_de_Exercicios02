// Definindo a estrutura de dados
let hoteis = [];
let reservas = [];
let idHotelAtual = 1;
let idReservaAtual = 1;

class Hotel {
  constructor(nome, cidade, quartosTotais) {
    this.id = idHotelAtual++;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
  }
}

class Reserva {
  constructor(idHotel, nomeCliente) {
    this.idReserva = idReservaAtual++;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }
}

// Funcionalidades
function adicionarHotel(nome, cidade, quartosTotais) {
  const novoHotel = new Hotel(nome, cidade, quartosTotais);
  hoteis.push(novoHotel);
}

function buscarHoteisPorCidade(cidade) {
  const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
  return hoteisNaCidade.length > 0 ? hoteisNaCidade : "Nenhum hotel encontrado nesta cidade.";
}

function fazerReserva(idHotel, nomeCliente) {
  const hotel = hoteis.find(hotel => hotel.id === idHotel);
  if (hotel && hotel.quartosDisponiveis > 0) {
    const novaReserva = new Reserva(idHotel, nomeCliente);
    reservas.push(novaReserva);
    hotel.quartosDisponiveis--;
    return `Reserva feita com sucesso no hotel ${hotel.nome}.`;
  } else {
    return "Não há quartos disponíveis neste hotel.";
  }
}

function cancelarReserva(idReserva) {
  const reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);
  if (reservaIndex !== -1) {
    const reserva = reservas[reservaIndex];
    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    reservas.splice(reservaIndex, 1);
    hotel.quartosDisponiveis++;
    return "Reserva cancelada com sucesso.";
  } else {
    return "Reserva não encontrada.";
  }
}

function listarReservas() {
  return reservas.map(reserva => {
    const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
    return {
      idReserva: reserva.idReserva,
      nomeCliente: reserva.nomeCliente,
      hotel: {
        id: hotel.id,
        nome: hotel.nome,
        cidade: hotel.cidade
      }
    };
  });
}

// Testando as funcionalidades
adicionarHotel("Hotel A", "São Paulo", 20);
adicionarHotel("Hotel B", "Rio de Janeiro", 15);

console.log(buscarHoteisPorCidade("São Paulo"));
console.log(buscarHoteisPorCidade("Rio de Janeiro"));

console.log(fazerReserva(1, "João"));
console.log(fazerReserva(1, "Maria"));

console.log(cancelarReserva(1));

console.log(listarReservas());

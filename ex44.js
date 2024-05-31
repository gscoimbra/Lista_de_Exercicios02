function contarPropriedadesString(objeto) {
    let contador = 0;
    for (let propriedade in objeto) {
      if (typeof objeto[propriedade] === 'string') {
        contador++;
      }
    }
    return contador;
  }
  
  const objeto = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
    email: 'joao@example.com'
  };
  
  const numeroDeStrings = contarPropriedadesString(objeto);
  console.log(numeroDeStrings); // Saída esperada: 3
  
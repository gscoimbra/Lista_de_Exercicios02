function contarOcorrencias(array) {
    const contador = {};
    array.forEach(string => {
      contador[string] = contador[string] ? contador[string] + 1 : 1;
    });
    return contador;
  }
  
  const arrayDeStrings = ['a', 'b', 'a', 'c', 'b', 'a'];
  const resultado = contarOcorrencias(arrayDeStrings);
  console.log(resultado);
  
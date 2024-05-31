const dados = {
    numero: 10,
    texto: "Olá",
    lista1: [1, 2, 3],
    lista2: ["a", "b", "c"],
    naoArray: { chave: "valor" }
  };
  
  function filtrarArrays(objeto) {
    const novoObjeto = {};
  
    for (const chave in objeto) {
      if (Array.isArray(objeto[chave])) {
        novoObjeto[chave] = objeto[chave];
      }
    }
  
    return novoObjeto;
  }
  
  const apenasArrays = filtrarArrays(dados);
  console.log(apenasArrays);
  
function transformarObjeto(objeto, funcao) {
    const novoObjeto = {};
    for (let chave in objeto) {
      if (Object.hasOwnProperty.call(objeto, chave)) {
        novoObjeto[chave] = funcao(objeto[chave]);
      }
    }
    return novoObjeto;
  }
  
  const objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
  };
  
  function dobrar(valor) {
    return valor * 2;
  }
  
  const objetoTransformado = transformarObjeto(objetoEntrada, dobrar);
  console.log(objetoTransformado);
  
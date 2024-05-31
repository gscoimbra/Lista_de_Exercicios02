function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = {};
  
    // Adiciona os itens do inventário da loja A ao inventário combinado
    for (let item in inventarioLojaA) {
      inventarioCombinado[item] = inventarioLojaA[item];
    }
  
    // Adiciona os itens do inventário da loja B ao inventário combinado ou soma as quantidades se o item já existe
    for (let item in inventarioLojaB) {
      if (inventarioCombinado[item]) {
        inventarioCombinado[item] += inventarioLojaB[item];
      } else {
        inventarioCombinado[item] = inventarioLojaB[item];
      }
    }
  
    return inventarioCombinado;
  }
  
  const inventarioLojaA = {
    'maçã': 10,
    'banana': 15,
    'laranja': 20
  };
  
  const inventarioLojaB = {
    'banana': 20,
    'uva': 25,
    'laranja': 15
  };
  
  const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
  console.log(inventarioCombinado);
  
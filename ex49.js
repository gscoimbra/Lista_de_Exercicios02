function agruparTransacoesPorCategoria(transacoes) {
    const categorias = {};
  
    // Itera sobre cada transação
    transacoes.forEach(transacao => {
      const { categoria, valor } = transacao;
  
      // Adiciona a transação à categoria correspondente
      if (!categorias[categoria]) {
        categorias[categoria] = {
          transacoes: [],
          subtotal: 0
        };
      }
      categorias[categoria].transacoes.push(transacao);
      categorias[categoria].subtotal += valor;
    });
  
    return categorias;
  }
  
  const transacoes = [
    { id: 1, valor: 100, data: '2024-05-28', categoria: 'Alimentação' },
    { id: 2, valor: 50, data: '2024-05-29', categoria: 'Transporte' },
    { id: 3, valor: 200, data: '2024-05-30', categoria: 'Alimentação' },
    { id: 4, valor: 80, data: '2024-05-31', categoria: 'Lazer' },
    { id: 5, valor: 150, data: '2024-06-01', categoria: 'Transporte' }
  ];
  
  const transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);
  console.log(transacoesPorCategoria);
  
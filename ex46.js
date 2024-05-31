function sumarizarVendas(vendas) {
    const resumo = {};
    vendas.forEach(venda => {
      if (resumo[venda.vendedor]) {
        resumo[venda.vendedor] += venda.valor;
      } else {
        resumo[venda.vendedor] = venda.valor;
      }
    });
    return resumo;
  }
  
  const vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Pedro', valor: 300 },
    { vendedor: 'Maria', valor: 100 }
  ];
  
  const resumo = sumarizarVendas(vendas);
  console.log(resumo);
  
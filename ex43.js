const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };

function combinarObjetos(objeto1, objeto2) {
  const novoObjeto = { ...objeto1, ...objeto2 };
  return novoObjeto;
}

const objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado);

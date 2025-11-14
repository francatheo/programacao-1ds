function calcularPrecoFinal(produto) {
  const desconto = produto.desconto ?? 0;

  // Exibe o preço inicial
  console.log(`Preço inicial de ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);

  const precoFinal = produto.preco - (produto.preco * desconto / 100);

  // Exibe o preço final
  console.log(`Preço final de ${produto.nome}: R$ ${precoFinal.toFixed(2)}`);
}

// Exemplo de uso
const produto1 = {
  nome: "Fone de ouvido",
  preco: 200,
  desconto: 25
};

calcularPrecoFinal(produto1);

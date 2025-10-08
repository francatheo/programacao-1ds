let nomesClientes = [];
let emailsUnicos = new Set();
let telefonesPorId = new Map();

// Coletando 10 nomes
for (let i = 0; i < 10; i++) {
  let nome = prompt(`Digite o nome do cliente ${i + 1}:`);
  nomesClientes.push(nome);
}

// Coletando 10 e-mails
for (let i = 0; i < 10; i++) {
  let email = prompt(`Digite o e-mail único do cliente ${i + 1}:`);
  emailsUnicos.add(email);
}

// Coletando 10 pares de ID e telefone
for (let i = 0; i < 10; i++) {
  let id = prompt(`Digite o ID do cliente ${i + 1}:`);
  let telefone = prompt(`Digite o telefone do cliente ${i + 1}:`);
  telefonesPorId.set(id, telefone);
}

console.log("Lista de Nomes Cadastrados:");
nomesClientes.forEach(nome => {
  console.log(nome);
});

console.log("\nConjunto de E-mails Únicos:");
emailsUnicos.forEach(email => {
  console.log(email);
});

console.log("\nMapa de Telefones por ID:");
telefonesPorId.forEach((telefone, id) => {
  console.log(`ID: ${id}, Telefone: ${telefone}`);

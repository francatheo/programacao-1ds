let palavra = prompt("Digite uma palavra que comece com a letra A:");
while (palavra.charAt(0).toUpperCase() !== "A") {
  palavra = prompt("Tente novamente. Digite uma palavra que comece com A:");
}
console.log("Palavra aceita:", palavra);
let palavra = prompt("Digite uma palavra com mais de 8 letras:");
while (palavra.length <= 8) {
  palavra = prompt("Muito curta! Digite uma palavra com mais de 8 letras:");
}
console.log("Palavra aceita:", palavra);
let palavra = prompt("Digite uma palavra com mais de 8 letras:");
while (palavra.length <= 8) {
  palavra = prompt("Muito curta! Digite uma palavra com mais de 8 letras:");
}
console.log("Palavra aceita:", palavra);
let soma = 0;
while (soma <= 500) {
  let numero = Math.floor(Math.random() * 100);
  console.log("Gerado:", numero);
  soma += numero;
}
console.log("Soma final:", soma);
let numero = parseInt(prompt("Digite o número do calçado (entre 34 e 44):"));
while (isNaN(numero) || numero < 34 || numero > 44) {
  numero = parseInt(prompt("Número inválido. Digite entre 34 e 44:"));
}
console.log("Número aceito:", numero);
let numero = 0;
while (numero % 3 !== 0 || numero % 5 !== 0 || numero === 0) {
  numero = Math.floor(Math.random() * 100);
  console.log("Gerado:", numero);
}
console.log("Número múltiplo de 3 e 5 encontrado:", numero);
let idade = parseInt(prompt("Digite sua idade (entre 18 e 60):"));
while (isNaN(idade) || idade < 18 || idade > 60) {
  idade = parseInt(prompt("Idade inválida. Digite entre 18 e 60:"));
}
console.log("Idade aceita:", idade);
let senha = prompt("Digite uma senha com pelo menos 1 letra e 1 número:");
while (!(/[a-zA-Z]/.test(senha) && /\d/.test(senha))) {
  senha = prompt("Senha inválida. Digite uma senha com pelo menos 1 letra e 1 número:");
}
console.log("Senha aceita:", senha);

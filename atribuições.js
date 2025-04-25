let x = 10; // Declara a variável x e atribui o valor inicial 10
console.log(`Valor inicial de x: ${x}`); // Imprime o valor inicial

// Operadores de atribuição com operação (atualizam o valor de x)
x += 5;    // Soma 5 ao valor atual de x (10 + 5 = 15)
console.log(`Após x += 5: ${x}`);

x -= 3;    // Subtrai 3 do valor atual de x (15 - 3 = 12)
console.log(`Após x -= 3: ${x}`);

x *= 2;    // Multiplica o valor atual de x por 2 (12 * 2 = 24)
console.log(`Após x *= 2: ${x}`);

x /= 4;    // Divide o valor atual de x por 4 (24 / 4 = 6)
console.log(`Após x /= 4: ${x}`);

x %= 5;    // Atribui a x o resto da divisão por 5 (6 % 5 = 1)
console.log(`Após x %= 5: ${x}`);

x **= 3;   // Eleva x à potência de 3 (1 ** 3 = 1)
console.log(`Após x **= 3: ${x}`);

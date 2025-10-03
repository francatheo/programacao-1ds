// Programa Verificador de Senha Simples

// 1. Criar uma variável com a senha correta
let senha_correta = "12345";

// 2. Criar uma variável com a senha digitada pelo usuário
let senha_digitada = "12345"; // Altere este valor para testar diferentes senhas

// 3. Verificar se a senha digitada é igual à senha correta
if (senha_digitada === senha_correta) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Senha incorreta. Tente novamente.");
}

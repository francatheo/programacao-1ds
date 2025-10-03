// Programa de Validação de Compra

// 1. Criar variáveis para saldo disponível e valor da compra
let saldo_disponivel = 100;
let valor_compra = 75;

// 2. Verificar se o saldo é suficiente para realizar a compra
if (saldo_disponivel >= valor_compra) {
    let saldo_restante = saldo_disponivel - valor_compra;
    console.log("Compra aprovada! Seu novo saldo é: " + saldo_restante);
} else {
    console.log("Saldo insuficiente. A compra não pode ser realizada.");
}

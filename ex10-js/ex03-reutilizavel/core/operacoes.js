function adicionarDinheiro(saldoAtual, valor) {
    return saldoAtual + valor;
}

function removerDinheiro(saldoAtual, valor) {
    if (valor > saldoAtual) {
        throw new Error("Saldo insuficiente."); //Lança um erro se o valor for maior que o saldo 
    }
    return saldoAtual - valor;
}

module.exports = { adicionarDinheiro, removerDinheiro };

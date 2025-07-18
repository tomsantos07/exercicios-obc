// aqui estão as lógicas de negócios

//funções compartilhadas
function validarNumero(input) {
    const numero = parseFloat(input);
    if (isNaN(numero)) {
        console.log('Valor inválido. Digite apenas números.');
        return false;
    }
    if (numero < 0) {
        console.log("Digite um valor maior que zero.");
        return false;
    }
    if (numero ===0) {
        console.log("Digite um valor diferente de zero.");
        return false
    }
    return numero;
}

function adicionarDinheiro(saldoAtual, valor) {
    return saldoAtual + valor;
}

function removerDinheiro(saldoAtual, valor) {
    if (valor > saldoAtual) {
        throw new Error("Saldo insuficiente."); //Lança um erro se o valor for maior que o saldo 
    }
    return saldoAtual - valor;
}

// aqui está o ajuste de compatibilidade do node com o browser
if (typeof module !== 'undefined' && module.exports) {
    // node exporta as functions
    module.exports = { validarNumero, adicionarDinheiro, removerDinheiro };
} else {
    // jogando pro escopo global window
    window.operacoes = { validarNumero, adicionarDinheiro, removerDinheiro };
}
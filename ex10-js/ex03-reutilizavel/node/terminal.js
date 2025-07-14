const readline = require('readline');
const { adicionarDinheiro, removerDinheiro } = require('../core/operacoes')

// Configuração para ler inputs do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 0; // Saldo inicial

function validarNumero(input) {
const numero = parseFloat(input);
if (isNaN(numero)) { // se a entrada não for numero
    console.log("Valor inválido. Digite apenas números.");
    return false;
} 
if (numero < 0) { // caso o u ser digite um número negativo
    console.log("Digite um valor maior que zero");
    return false; 
}

if (numero === 0) { // se o user digitar zero
    console.log("Digite um valor diferente de zero.");
    return false;
}
return numero; //retorna o número se for válido
}

// Perguntar para o user
function perguntar() {
    rl.question(`
    Saldo atual: R$ ${saldo}
    Escolha uma opção:
    1. Adicionar Dinheiro
    2. Remover Dinheiro
    3. Sair
    Opção:`, (opcao) => {
        switch (opcao) {
            case '1':
                //add dinheiro
                rl.question('Quando deseja adicionar? ', (valorInput) => {
                    const valor = validarNumero(valorInput)
                    if (valor !== false) {
                        saldo = adicionarDinheiro(saldo, valor);
                        console.log(`Novo saldo: R$ ${saldo}`);
                    }
                    perguntar(); // pra voltar ao menu   
                });
            break;
            case '2':
                //remove dinheiro
                rl.question('Quanto deseja remover? ', (valorInput) => {
                    const valor = validarNumero(valorInput);
                    try {
                        saldo = removerDinheiro(saldo, valor);
                        console.log(`Novo saldo: R$ ${saldo}`);
                    } catch (erro) {
                        console.log(erro.message); // "Saldo insuficiente"       
                    } 
                    perguntar(); //volta ao menu
                });
            break;

            case '3':
                console.log('Saindo...');
                rl.close();
            break;
        
            default:
                console.log('Opção inválida!');
                perguntar(); 
        }
    });
}

perguntar();

const readline = require('readline');
const { adicionarDinheiro, removerDinheiro } = require('../core/operacoes')

// Configuração para ler inputs do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 0; // Saldo inicial

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
                    const valor = parseFloat(valorInput);
                    saldo = adicionarDinheiro(saldo, valor);
                    console.log(`Novo saldo: R$ ${saldo}`);
                    perguntar(); // pra voltar ao menu   
                });
            break;
            case '2':
                //remove dinheiro
                rl.question('Quanto deseja remover? ', (valorInput) => {
                    const valor = parseFloat(valorInput);
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

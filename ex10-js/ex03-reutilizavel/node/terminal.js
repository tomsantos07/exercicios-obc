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
                
            break;

            case '2':
                
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

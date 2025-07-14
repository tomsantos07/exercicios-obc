import { validarNumero, adicionarDinheiro, removerDinheiro } from '../core/operacoes.js'

let saldo = 0;

function iniciarCofre() {
    const opcao = prompt(`
        Saldo atual: R$ ${saldo}
        Escolha uma opção:
        1. Adicionar dinheiro
        2. Remover Dinheiro
        3. Sair
        `);
    switch (opcao) {
    case "1":
         const valorAdicionar = validarNumero(prompt("Quanto deseja adicionar?"));
            if (valorAdicionar !== false) {
                saldo = adicionarDinheiro(saldo, valorAdicionar);
                alert(`Novo saldo: R$ ${saldo}`);
            }
            iniciarCofre();
        
        break;

    case "2":
        const valorRemover = validarNumero(prompt("Quanto deseja remover?"));
                if (valorRemover !== false) {
                    try {
                        saldo = removerDinheiro(saldo, valorRemover);
                        alert(`Novo saldo: R$ ${saldo}`);
                    } catch (erro) {
                        alert(erro.message);
                    }
                }
                iniciarCofre();
        break;

    case "3":
        alert("Até logo! 👋");
    break;

    default:
        alert("Opção inválida!");
            iniciarCofre();
    break;
    }
}

iniciarCofre();

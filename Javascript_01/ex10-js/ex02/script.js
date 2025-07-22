let dinheiro = parseFloat(prompt("Quanto de dinheiro você tem disponível?"));
let opcao;

do {
    opcao = parseFloat(
        prompt(
            `Você possui R$ ${dinheiro} conto.
            Escolha uma das opções: 
            1. Adicionar dinheiro
            2. Remover dinheiro
            3. Sair
            `
        )
    )

    switch (opcao) {
        case 1:
            opcao = parseFloat(prompt("Quanto você quer adicionar?"));
            dinheiro += opcao;
            alert(`Agora você possui ${dinheiro} conto.`);
            break;

        case 2:
            opcao = parseFloat(prompt("Quanto você gostaria de remover?"));
            if (opcao > dinheiro) {
                alert("Você não possui esta quantia para remover.")
            } else {
                dinheiro -= opcao;
                alert(`Agora você possui ${dinheiro} conto.`);
            }
            break;

        case 3:
            alert("Você está saindo do sistema...")
            alert("Aplicativo encerrado com sucesso.")
            break;

        default:
            alert("Opção inválida.")
            break;
    }
} while (opcao !== 3);
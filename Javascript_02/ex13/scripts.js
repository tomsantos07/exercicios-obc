const imoveis = [];
let opcao = "";

do {
    opcao = prompt(`
        Imóveis Cadastrados: ${imoveis.length}

        Escolha uma opção:

        1. Cadastrar Novo Imóvel
        2. Consultar Imóveis Cadastrados
        3. Sair
        `)

        switch (key) {
            case "1":
                const imovel = {};

                imovel.proprietario = prompt("Digite o nome do proprietário:");
                imovel.quarto = prompt("Quantos quartos possui?");
                imovel.banheiro = prompt("Quantos banheiros possui?");
                imovel.garagem = prompt("Possui garagem? Sim/Não");

                const confirmacao = confirm(`
                    Salvar este imóvel?
                    
                    Proprietário: ${imovel.proprietario}
                    Quartos: ${imovel.quarto}
                    Banheiros: ${imovel.banheiro}
                    Garagem: ${imovel.garagem}
                    `)

                    if (confirmacao) {
                        imoveis.push(imovel)
                    }

                break;

            case "2":
                let exibeImoveis = "";
                for (let i = 0; i < imoveis.length; i++) {
                    exibeImoveis += imoveis[i]
                    alert(exibeImoveis);
                }
                break;
            
            case "3":
                alert("Saindo...");
                return
            default:
                alert("Opção inválida.");
                break;
        }
} while (opcao !== "3");
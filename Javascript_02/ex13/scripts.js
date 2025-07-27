const imoveis = [];
let opcao = "";

do {
    opcao = prompt(`
        Imóveis Cadastrados: ${imoveis.length}

        Escolha uma opção:

        1. Cadastrar Novo Imóvel
        2. Consultar Imóveis Cadastrados
        3. Sair
        `);

        const imovel = {};
        
        switch (opcao) {
            case "1":

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
                for (let i = 0; i < imoveis.length; i++) {
                    alert(`
                        Imóvel: ${i +1}
                        Proprietário: ${imovel.proprietario}
                        Quartos: ${imovel.quarto}
                        Banheiros: ${imovel.banheiro}
                        Garagem: ${imovel.garagem}
                        `);
                }
                break;
            
            case "3":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida.");
                break;
        }

} while (opcao !== "3");
let baralho = [];

function pegarCartas() {
    let cartas = "";
    if (cartas.length > 0) {
        for (let i = 0; i < cartas.length; i++) {
            cartas += i;
        }
    }

    const opcao = prompt(`
        Cartas adicionadas: ${baralho.length === 0 ? "0" : baralho}

        Escolha uma opção:
        1. Adicionar uma carta
        2. Puxar uma carta
        3. Sair
        `);

    switch (opcao) {
        case "1":
            let nomeDaCarta = prompt("Digite o nome da carta: ");
            if (nomeDaCarta && nomeDaCarta.trim() !== "") {
                baralho.push(nomeDaCarta.trim())
                alert(`A carta ${nomeDaCarta} foi adicionada.`)
            } else {
                alert("Digite um nome válido")
            } 
            pegarCartas();
            break;
        
        case "2":
            if (baralho.length === 0) {
                alert("Não há cartas.")
            } else {
                const cartaRetirada = baralho.shift();
                alert(`A carta ${cartaRetirada} foi retirada do baralho!`)
            } 
            pegarCartas();
            break;

        case "3":
            alert("Encerrando...");
            return;
    
        default:
            alert("Opção inválida.");
            pegarCartas();
            break;
    }
}

pegarCartas();

let fila = [];

function gerenciarFila() {

    let lista = "";
    if (fila.length > 0) {
        for (let i = 0; i < fila.length; i++) {
            lista += `${i + 1}º. ${fila[i]}\n`;
        }
    } 
    
    const opcao = prompt(`
        Pacientes na Fila: ${fila.length === 0 ? "Nenhum paciente agendado" : lista}
        Escolha uma opção:
            1. Agendar paciente.
            2. Consultar paciente.
            3. Sair.
        `)
    
    switch (opcao) {
        case "1":
            let nome = prompt("Informe o nome do paciente: ");
            // typeof nome === "string" ? fila.push(nome) : "Digite um nome válido";
            if (nome && nome.trim() !== "") {
                fila.push(nome.trim());
                alert(`O paciente de nome ${nome} foi agendado.`)
            } else {
                alert("Digite um nome válido.")
            }   gerenciarFila();    
            break;
    
        case "2":
            if (fila.length === 0) {
                alert("Não há pacientes na fila.");
            } else {
                const pacienteAtendido = fila.shift();
                alert(`Paciente ${pacienteAtendido} atendido!`)
            }   gerenciarFila();
            break;
        
        case "3":
            alert("Saindo...");
            return;
    
        default:
            alert("Opção inválida.")
            gerenciarFila();
            break;
    }
}

gerenciarFila();

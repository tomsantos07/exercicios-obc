let opcao = "5";

do {
    opcao = prompt(
        `   Seja bem vindo!
         Escolha uma das opções abaixo:
         1. Escolha a opção Um
         2. Escolha a opção Dois
         3. Escolha a opção Três 
         4. Escolha a opção Quatro
         5. Encerrar`
    ) 
    switch (opcao) {
        case "1":
        alert("Você escolheu a opção Um.");
        break;
    
        case "2":
        alert("Você escolheu a opção Dois.");
        break;

        case "3":
        alert("Você escolheu a opção Três.");
        break;

        case "4":
        alert("Você escolheu a opção Quatro.");
        break;

        case "5":
        alert("Você escolheu encerrar.");
        alert("O programa está sendo encerrado...");
        break;

        default:
        alert("Opção inválida!")
    }
} while (opcao !== "5") 
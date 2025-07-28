function calculaTriangulo () {
    const base = prompt("Digite o número da base do triângulo: ");
    const altura = prompt("Digite o número da altura do triângulo: ");
    return base * altura / 2; 
}

function calculaRetangulo() {
    const base = prompt("Digite o número da base do retângulo: ");
    const altura = prompt("Digite o número da altura do retângulo: ");
    return base * altura;
}

function calculaQuadrado() {
    const lado = prompt("Digite o número do lado do quadrado: ");
    return lado * lado;
}

function calculaTrapezio() {
    const baseMaior = parseFloat(prompt("Digite o número da base maior: "));
    const baseMenor = parseFloat(prompt("Digite o número da base menor: "));
    const altura = prompt("Digite o número da altura do trapézio: ");
    return (baseMaior + baseMenor) * altura / 2;
}

function calculaCirculo() {
    const raio = prompt("Digite o número do raio: ");
    return 3.147 * (raio * raio);
}

function exibeMenu() {
    return prompt(`
        Escolha uma opção:
        1. Calcular área do triângulo
        2. Calcular área do retângulo
        3. Calcular área do quadrado
        4. Calcular área do trapézio
        5. Calcular área do círculo
        6. Sair
        `);
}

function executar() {
    let opcao = "";
    let resultado;

    do {
        opcao = exibeMenu();
        switch (opcao) {
            case "1":
                resultado = calculaTriangulo();
                alert(`O resultado é ${resultado}.`)
                break;
    
            case "2":
                resultado = calculaRetangulo();
                alert(`O resultado é ${resultado}.`)
                break;
    
            case "3":
                resultado = calculaQuadrado();
                alert(`O resultado é ${resultado}.`)
                break;
    
            case "4":
                resultado = calculaTrapezio();
                alert(`O resultado é ${resultado}.`)
                break;
    
            case "5":
                resultado = calculaCirculo();
                alert(`O resultado é ${resultado}.`)
                break;
    
            case "6":
                alert("Encerrando...")
                break;
        
            default:
                prompt("Opção inválida.")
                break;
        }    
        
    } while (opcao !== "6");
}

executar();

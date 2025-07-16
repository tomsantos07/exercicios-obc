const numeroDeEntrada = parseFloat(prompt("Digite o número da tabuada que deseja aprender: "));

function validaNumero () {
    if (isNaN(numeroDeEntrada)) {
        alert("Digite um número válido.")
        return false;
    } 
    if ( !isNaN(numeroDeEntrada)) {
        for (let i = 0; i <= 20; i++) {
        let result = 0;
        result = numeroDeEntrada * i;
        alert(`
            ${numeroDeEntrada} x ${i} = ${result}
            `);
        }
    }
}

validaNumero();

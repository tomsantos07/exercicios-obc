const numeroDeEntrada = parseFloat(prompt("Digite o número da tabuada que deseja aprender: "));

function validaNumero () {
    if (isNaN(numeroDeEntrada)) {
        alert("Digite um número válido.")
        return false;
    }   else  {
        let result = 0;
        for (let i = 0; i <= 20; i++) {
        let calc = numeroDeEntrada * i;
        result += `${numeroDeEntrada} x ${i} = ${calc} \n`
        }
        alert(`${result}`);
        return true;
    }
}

validaNumero();

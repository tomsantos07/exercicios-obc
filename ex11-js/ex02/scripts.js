const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

// o palavra.length - 1 pega a última letra da palavra que for digitada pelo user
// a condição i >= 0 vai fazer que seja percorrido até a primeira letra da palavra (indice 0)
for (let i = palavra.length - 1; i >= 0; i--) {
    //aqui, basicamente a palavraInvertida vai receber o conteúdo de palavra ao contrário
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    alert(`${palavra} é um palíndromo.`);
} else {
    alert(`
        ${palavra} não é um palíndromo.
        ${palavra} é diferente de ${palavraInvertida}
        '`);
}
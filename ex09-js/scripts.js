const touristName = prompt("Qual é o seu nome?");
let cities = "";
let count = 0;

let continuing = prompt("Você visitou alguma cidade? Sim/Não");

while (continuing === "Sim") {
    let city = prompt("Qual é a cidade visitada?");
    cities += "- " + city + "\n";
    count++
    continuing = prompt("Você visitou alguma outra cidade? Sim/Não")
}

alert(
    "Turista: " + touristName +
    "\nQuantidade de cidades visitadas: " + continuing +
    "\nCidades visitadas:\n" + cities
)
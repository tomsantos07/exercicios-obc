const carName1 = prompt("Digite o nome do primeiro carro:");
const carSpeed1 = parseFloat(prompt("Digite a velocidade do primeiro carro (km/h):"))
const carName2 = prompt("Digite o nome do segundo carro:");
const carSpeed2 = parseFloat(prompt("Digite a velocidade do segundo carro (km/h):"))

if (carSpeed1 > carSpeed2) {
    alert("O carro " + carName1 + " é mais rápido que o carro " + carName2 + ".");
} else if (carSpeed1 < carSpeed2) {
    alert("O carro " + carName2 + " é mais rápido que o carro " + carName1 + ".");
} else {
    alert("Os carros " + carName1 + " e " + carName2 + " têm a mesma velocidade."); 
}


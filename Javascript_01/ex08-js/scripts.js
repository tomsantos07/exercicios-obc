const meterValue = parseFloat(prompt("Digite um valor em metros: "));
const mediaUnit = prompt(`
    Digite a ABREVIAÇÃO da medida para qual deseja converter:
    milímetro (mm)
    centímetro (cm)
    decímetro (dm)
    decâmetro (dam)
    hectômetro (hm)
    quilômetro (km)
`);

let result;

switch (mediaUnit) {
    case "mm":
    result = meterValue * 1000
        alert(`${meterValue}m equivale(m) a ${result} milímetro(s).`)
        break;

    case "cm":
        result = meterValue * 100
        alert(`${meterValue}m equivale(m) a ${result} centímetro(s).`)
        break;

    case "dm":
        result = meterValue * 10
        alert(`${meterValue}m equivale(m) a ${result} decímetro(s).`)
        break;
  
    case "dam":
        result = meterValue / 10
        alert(`${meterValue}m equivale(m) a ${result} decâmetro(s).`)
        break;

    case "hm":
        result = meterValue / 100
        alert(`${meterValue}m equivale(m) a ${result} hectômetro(s).`)
        break;
    
    case "km":
        result = meterValue / 1000
        alert(`${meterValue}m equivale(m) a ${result} quilômetro(s).`)
        break;

    default:
        break;
}


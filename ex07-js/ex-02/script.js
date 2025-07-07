const charName1 = prompt("Digite o nome do personagem que vai realizar um ataque: ");
const atackPower = parseFloat(prompt(`Digite o poder de ataque do personagem ${charName1}: `));

const charName2 = prompt("Digite o nome do personagem que vai se defender: ");
let lifePoints = parseFloat(prompt(`Digite o número de pontos de vida do personagem ${charName2}:`));
const defensePoints = parseFloat(prompt(`Digite o número de pontos de defesa do personagem ${charName2}:`));
const shield = confirm(`${charName2} possui um escudo?`);

let fightDamage;

if (atackPower > defensePoints && !shield) {
    fightDamage = atackPower - defensePoints;
    lifePoints -= fightDamage;
    alert(`${charName2} sofreu dano de ${fightDamage} pontos e agora possui ${lifePoints } pontos de vida.`);

} else if (atackPower > defensePoints && shield) {
    fightDamage = (atackPower - defensePoints)/2;
    lifePoints -= fightDamage
    alert(`${charName2} sofreu dano de ${fightDamage} pontos e agora possui ${lifePoints} pontos de vida.`);

} else if (atackPower <= defensePoints) {
    fightDamage = 0;
    alert(`${charName2} bloqueou o ataque com seu escudo e não sofreu dano. Pontos de vida: ${lifePoints}`)
}


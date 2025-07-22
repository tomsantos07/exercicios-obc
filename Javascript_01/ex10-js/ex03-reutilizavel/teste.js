// const { somar } = require('./core/operacoes');
// console.log(somar(2, 3));

const { adicionarDinheiro, removerDinheiro } = require('./core/operacoes');

console.assert(adicionarDinheiro(100, 50) === 150, "Erro ao adicionar dinheiro.");
console.assert(removerDinheiro(100, 30) === 130, "Erro ao adicionar dinheiro.");
console.log(removerDinheiro(10, 30) === Error, "Erro na aplicação");

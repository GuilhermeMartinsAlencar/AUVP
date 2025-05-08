const fs = require('fs');

const dadosPath = 'paises.json';
const paisesPath = 'paisescertos.json';

const dados = JSON.parse(fs.readFileSync(dadosPath, 'utf8'));
const paises = JSON.parse(fs.readFileSync(paisesPath, 'utf8'));

// função auxiliar para procurar o país certo
function corrigirPais(nomeAntigo) {
  const encontrado = paises.find(p => p.pais.toLowerCase() === nomeAntigo.toLowerCase());
  return encontrado ? encontrado.pais : nomeAntigo;
}

const dadosAtualizados = dados.map(item => ({
  ...item,
  pais: corrigirPais(item.pais)
}));

fs.writeFileSync(dadosPath, JSON.stringify(dadosAtualizados, null, 2));

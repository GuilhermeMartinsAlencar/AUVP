import * as fs from "fs";

const main = async () => {
  const paisesCertos = fs.readFileSync("./paises-certos.json", "utf-8");
  const paisesCertosJson = JSON.parse(paisesCertos);

  const objPaisesCertos = Object.values(paisesCertosJson);

  const nomesCorretos = fs.readFileSync("./paises.json", "utf-8");
  const parsedNomesCorretos = JSON.parse(nomesCorretos);

  const result = [];

  for (let i = 0; i < objPaisesCertos.length; i++) {
    const pais = objPaisesCertos[i];
    const arrayDePaises = Object.values(parsedNomesCorretos);
    const mask = arrayDePaises[i];

    result.push({
      pais: pais.pais,
      img: pais.img,
      ddi: pais.ddi,
      continente: pais.continente,
      mascara: mask,
    });
  }

  fs.writeFileSync("./result.json", JSON.stringify(result, null, 2), "utf-8");
};

main();

console.log("Arquivo result.json criado com sucesso!");

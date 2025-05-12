console.log('Hello World!');
let idade = 19;

function verificarIdade(idade) {
  if (idade < 18) {
   console.log("ola");
   return 'Menor de idade';
  }
  console.log('Maior de idade');
  return 'Maior de idade';
}

verificarIdade(idade);
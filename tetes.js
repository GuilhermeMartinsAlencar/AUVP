function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  // Adicionando DDIS à primeira parte do JSON
  Object.keys(paises).forEach(key => {
    const paisNome = paises[key].pais;
    // Normalizar o nome para comparação
    const normalizedPaisNome = normalizeString(paisNome);
    
    // Encontrar o DDIS correspondente na segunda parte do JSON (também normalizado)
    Object.keys(DDIS).forEach(ddisKey => {
      if (normalizeString(ddisKey) === normalizedPaisNome) {
        paises[key].DDIS = DDIS[ddisKey];
      }
    });
  });
  
  console.log(paises);




  







let selectedMask = "";

// Função para extrair a parte da máscara com apenas os caracteres "#"
function limparDDIDaMascara(mascara) {
  const primeiroIndice = mascara.indexOf('#');
  return mascara.slice(primeiroIndice);
}

// Aplica a máscara no campo com os caracteres fixos
function aplicarMascara(valor, mascara) {
  let i = 0;
  const valorNumerico = valor.replace(/\D/g, "");
  const mascaraSemDDI = limparDDIDaMascara(mascara);
  let resultado = "";

  for (let char of mascaraSemDDI) {
    if (char === "#") {
      if (i < valorNumerico.length) {
        resultado += valorNumerico[i++];
      } else {
        break;
      }
    } else {
      resultado += char;
    }
  }

  return resultado;
}

// Aplica a máscara conforme o usuário digita
function formatarTelefone() {
  const telefoneInput = document.getElementById('phone');
  if (selectedMask) {
    telefoneInput.value = aplicarMascara(telefoneInput.value, selectedMask);
  }
}

// Carrega a lista de países e configura os cliques
async function numberlistcountry() {
  const dados = await fetch('./result.json')
    .then(response => response.json());

  const dadosArray = Object.keys(dados).map(k => dados[k]);
  const numberList = document.getElementById('number-list');
  numberList.innerHTML = '';

  dadosArray.forEach(d => {
    const newNumberLi = document.createElement("li");
    const newNumberImage = document.createElement('img');
    newNumberImage.src = d.img;

    const newNumberName = document.createElement('span');
    newNumberName.textContent = d.pais;

    const newNumberNumber = document.createElement('p');
    newNumberNumber.textContent = ` ${d.ddi}`;

    newNumberLi.appendChild(newNumberImage);
    newNumberLi.appendChild(newNumberName);
    newNumberLi.appendChild(newNumberNumber);
    numberList.appendChild(newNumberLi);

    // Ao clicar em um país
    newNumberLi.addEventListener('click', () => {
      troca = false;

      selectedMask = d.mascara;

      const telefoneInput = document.getElementById('phone');
      telefoneInput.placeholder = limparDDIDaMascara(selectedMask);
      telefoneInput.value = '';

      const bandeira = document.getElementById("imgDDi");
      bandeira.src = d.img;
      bandeira.alt = d.ddi;

      // Exibir o DDI ao lado da bandeira, se quiser (opcional)
      // document.getElementById("ddiText").textContent = d.ddi;

      numberList.style.display = 'none';
    });
  });

  numberList.style.display = troca ? 'none' : 'block';
  troca = !troca;
}

// Inicializa o input com o evento
window.onload = () => {
  document.getElementById('phone').addEventListener('input', formatarTelefone);
};
 
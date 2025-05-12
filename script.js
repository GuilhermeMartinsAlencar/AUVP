function toggleMenu() {
  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    loadUtils: () =>
      import(
        "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
      ),
  });
}

toggleMenu();

document
  .querySelector("#phone")
  .style.setProperty("margin", "20px 0px 0px 60px", "important");

let lastScrollTop = 0;
let arrumar = true;
let currentSection = 0;
let ultimoP = null; // Guarda o último <p> clicado
let toggle = true;
let ultimoBotao = null; // Guarda o último botão clicado
let blinkEffect = null; // Guarda o intervalo do piscar
let tempo = null;
let troca = true;

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input) => {
  const key = input.id; // Usando o id como chave

  // Carrega valor salvo (se tiver)
  const saved = localStorage.getItem(key);
  if (saved !== null) {
    input.value = saved;
  }

  // Salva valor ao digitar
  input.addEventListener("input", () => {
    localStorage.setItem(key, input.value);
  });
});

// FUNÇÂO PARA NÂO REINICIAR AO APERTAR ENTER

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // impede o comportamento padrão
    console.log("Enter pressionado, mas sem reload");
  }
});
//

// BARRA PROGRESSO

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const progressBar = document.getElementById("progressBar");
  const groups = form.querySelectorAll(".input-group");

  function updateProgress() {
    let filled = 0;

    groups.forEach((group) => {
      const inputs = group.querySelectorAll("input, select, textarea");
      let groupFilled = false;

      inputs.forEach((input) => {
        if (input.value.trim() !== "" && !groupFilled) {
          filled++;
          groupFilled = true;
        }
      });
    });

    const progress = (filled / groups.length) * 100;
    progressBar.style.width = progress + "%";
  }

  // Escuta todos os inputs dentro de todos os grupos
  groups.forEach((group) => {
    const inputs = group.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", updateProgress);
    });
  });

  // NOVO: escutar botões dentro dos <li> que preenchem inputs
  // Escutar botões dentro dos <li> que preenchem inputs
  const botoes = form.querySelectorAll("li button");
  botoes.forEach((button) => {
    button.addEventListener("click", function () {
      const valor = this.value || this.innerText;
      const input = this.closest(".input-group").querySelector("input");

      if (input) {
        // Se o input já tem o mesmo valor do botão → desmarcar
        if (input.value === valor) {
          input.value = ""; // limpa o input
        } else {
          input.value = valor; // define novo valor
        }

        updateProgress(); // força atualização da barra
      }
    });
  });
});
//



window.addEventListener("scroll", function () {
    let scrollTop = scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {

        let valido = true;
        const nome = document.getElementById("first_name").value;
        const campo =  document.getElementById("erroNome")
        const campo01 = document.getElementById("errosobreNome");
        const sobrenome = document.getElementById("last_name").value;
        const telefone = document.getElementById("phone").value;
        const campo02 = document.getElementById("telefone");
        const email = document.getElementById("email").value; 
        const campo03 = document.getElementById("erroEmail");

      
        if (nome === "") {
        campo.style.display = 'block'
        campo.innerHTML = "\u26A0 Preencha este campo";
            
        }
        if (sobrenome === "") {
            campo01.style.display = "block"

            document.getElementById("errosobreNome").innerHTML = "\u26A0 Preencha este campo";
        }
        if (telefone === "") {
            campo02.style.display = "block"

            document.getElementById("telefone").innerHTML = "\u26A0 Preencha este campo";
        }
        if (email === "") {
            campo03.style.display = "block"

            document.getElementById("erroEmail").innerHTML = "\u26A0 Preencha este campo";
        }   
        if (nome === "" || sobrenome === "" || telefone === "" || email === "") {
            document.getElementById('nx3').style.display = "none";       
            document.body.style.overflow = "auto";
        }  
    
    
    }
        
    lastScrollTop = scrollTop;
}); 



document.addEventListener("DOMContentLoaded", function () {
    if (arrumar === true) {
        // Seleciona todos os campos que devem ativar o evento
        const camposInput = document.querySelectorAll("#first_name, #last_name, #phone, #email");

        camposInput.forEach(campo => {
            campo.addEventListener("input", function() {
                document.getElementById("erroNome").style.display = 'none';
                document.getElementById("errosobreNome").style.display = "none";
                document.getElementById("telefone").style.display = "none";
                document.getElementById("erroEmail").style.display = "none";
                
                document.body.style.overflow = "hidden";
                document.getElementById('nx3').style.display = "block";     
                if (currentSection = 1){
                    currentSection = 0;
                }  
             

            });
        });
    }
});
 



//   ROLAGEM COM PAUSA E BOTAO DE ROLAGEM E  // 






if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = function () {
  window.scrollTo(0, 0);
};


console.log("Aguarde...");

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.container');

    console.log("Seções encontradas:", sections);

    const totalSections = sections.length;
    let isScrolling = false;

    window.addEventListener('wheel', (event) => {
        



        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            // Rolando para baixo
            if (currentSection < totalSections - 1) {
                currentSection++;
            }
        } else {
            // Rolando para cima
            if (currentSection > 0) {
                currentSection--;
            }
        }
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
            isScrolling = false;
        }, 1500); // Tempo de bloqueio da rolagem
    });

    document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (currentSection < totalSections - 1) {
            currentSection++;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
});
document.querySelectorAll(".butonok").forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("ola");

        if (currentSection < totalSections - 1) {
            currentSection++;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    });
});
    document.getElementById("btndwon").addEventListener("click", (event) => {

        if (currentSection < totalSections - 1) {
            currentSection++;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });

    })



    document.getElementById("btnCima").addEventListener("click", (event) => {

        if (currentSection <= totalSections - 1) {
            currentSection--;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });


    })
}); 
  

// TAG NUMERO

// TAG 1

// TAG NUMERO 3

function iniciarPiscar(button) {
  let colors = ["#597465", "#294C39"];
  let i = 0;

  let blinkEffect = setInterval(() => {
    button.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 90); // Muda de cor a cada 300ms

  // Para o efeito e esconde após 2 segundos
  setTimeout(() => {
    clearInterval(blinkEffect); // Para o piscar
    button.style.backgroundColor = "#597465"; // Reseta a cor
  }, 1000);
}

function clicar(event) {
  const button = event.currentTarget;
  const checkSpan = button.querySelector(".checkcaixa");

  const sections = document.querySelectorAll(".container");
  console.log("Seções encontradas:", sections);
  const totalSections = sections.length;

  checkSpan.textContent = "\u2713";

  // Se clicar no mesmo, desmarca
  if (ultimoP === button) {
    button.style.backgroundColor = "";
    checkSpan.textContent = "";
    ultimoP = null;
    return;
  }

  // Marca o novo

  if (ultimoP && ultimoP !== button) {
    ultimoP.style.backgroundColor = "";
    let oldSpan = ultimoP.querySelector(".checkcaixa");
    if (oldSpan) oldSpan.textContent = "";
  }

  setTimeout(() => {
    if (currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, 1200);

  let inputaca = document.getElementById("00NU4000001Fe2z").value;

  inputaca = button;

  console.log(inputaca.value);

  iniciarPiscar(button);

  button.setAttribute("onclick", "arrumar02(event) ");
  ultimoP = button;
}

function arrumar02(event) {
  const button = event.currentTarget;
  const checkSpan = button.querySelector(".checkcaixa");
  const sections = document.querySelectorAll(".container");
  console.log("Seções encontradas:", sections);
  const totalSections = sections.length;

  // Se clicar no mesmo, desmarca
  if (ultimoP === button) {
    button.style.backgroundColor = "";
    checkSpan.textContent = "";
    ultimoP = null;
    return;
  }

  if (ultimoP && ultimoP !== button) {
    ultimoP.style.backgroundColor = "";
    let oldSpan = ultimoP.querySelector(".checkcaixa");
    if (oldSpan) oldSpan.textContent = "";
    checkSpan.textContent = "";
  }
  setTimeout(() => {
    if (currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, 1200);

  checkSpan.textContent = "\u2713";
  iniciarPiscar(button);
  button.setAttribute("onclick", "clicar(event)");
  ultimoP = button;
}

// TAG NUMERO 5

function cetinha01() {
  var opçoes = document.getElementById("opçoesesta");
  var Ok = document.getElementById("OK");
  let butao = document.getElementById("Butaoceta01");
  butao.textContent = "\u276F";

  if (toggle) {
    Ok.style.display = "none";
    opçoes.style.display = "block";
    butao.style.transform = "rotate(270deg)";
  } else {
    opçoes.style.display = "none";
    Ok.style.display = "block";
    butao.style.transform = "rotate(90deg)";
  }
  toggle = !toggle;
}

function selectOption(event) {
  let botao = document.getElementById("buttonceta");
  let opcoes = document.getElementById("opçoesesta");
  const selectedText = event.target.textContent;
  const selectedItem = event.target;
  const sections = document.querySelectorAll(".container");
  console.log("Seções encontradas:", sections);
  const totalSections = sections.length;

  let butao = document.getElementById("Butaoceta01");
  butao.style.transform = "rotate(0deg)";
  butao.textContent = "\u0078"; // ou "\276F", mas com "u" é mais claro

  // Atribui o texto ao campo de input
  document.getElementById("00NU4000000sMef").value = selectedText;
  let input = document.getElementById("00NU4000000sMef").value;
  input = selectedText;
  console.log(input);

  // Faz a lista piscar antes de desaparecer
  let colors = ["#597465", "#113822", "#597465", "#113822"];
  let i = 0;

  let blinkEffect = setInterval(() => {
    selectedItem.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 90); // Muda de cor a cada 300ms

  // Para o efeito e esconde após 2 segundos
  setTimeout(() => {
    clearInterval(blinkEffect); // Para o piscar
    opcoes.style.display = "none"; // Esconde o elemento
    selectedItem.style.backgroundColor = ""; // Reseta a cor
    if (currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, 1000);

  botao.setAttribute("onclick", "apagarSelecao01()");
}

function apagarSelecao01() {
  let input = document.getElementById("00NU4000000sMef");
  let botao = document.getElementById("buttonceta");
  var Ok = document.getElementById("OK");
  let butao = document.getElementById("Butaoceta01");

  butao.style.transform = "rotate(90deg)";
  butao.textContent = "\u276F"; // ou "\276F", mas com "u" é mais claro

  input.value = ""; // Limpa o input
  Ok.style.display = "block";
  toggle = !toggle;
  botao.setAttribute("onclick", "cetinha01()"); // Restaura o clique original
}

// TAG NUMERO 6

function cetinha02() {
  var opçoesre = document.getElementById("opçoesregime");
  var Ok = document.getElementById("OK01");
  let butao = document.getElementById("Butaoceta02");
  butao.textContent = "\u276F";

  if (toggle) {
    Ok.style.display = "none";
    opçoesre.style.display = "block";
    butao.style.transform = "rotate(270deg)";
  } else {
    Ok.style.display = "block";
    opçoesre.style.display = "none";
    butao.style.transform = "rotate(90deg)";
  }
  toggle = !toggle;
}
function selectOption01(event) {
  let botao = document.getElementById("buttaoceta02");
  let opcoes = document.getElementById("opçoesregime");
  const selectedText = event.target.textContent;
  const selectedItem = event.target;
  const sections = document.querySelectorAll(".container");
  console.log("Seções encontradas:", sections);
  const totalSections = sections.length;

  let butao = document.getElementById("Butaoceta02");
  butao.style.transform = "rotate(0deg)";
  butao.textContent = "\u0078";

  // Atribui o texto ao campo de input

  document.getElementById("00NU4000000sMmj").value = selectedText;
  let input = document.getElementById("00NU4000000sMmj").value;
  input = selectedText;
  console.log(input);

  // Faz a lista piscar antes de desaparecer
  let colors = ["#597465", "#113822", "#597465", "#113822"];
  let i = 0;

  let blinkEffect = setInterval(() => {
    selectedItem.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 90); // Muda de cor a cada 300ms

  // Para o efeito e esconde após 2 segundos
  setTimeout(() => {
    clearInterval(blinkEffect); // Para o piscar
    opcoes.style.display = "none"; // Esconde o elemento
    selectedItem.style.backgroundColor = ""; // Reseta a cor
    if (currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, 1000);

  botao.setAttribute("onclick", "apagarSelecao02()");
}

function apagarSelecao02() {
  let input = document.getElementById("00NU4000000sMmj");
  let botao = document.getElementById("buttaoceta02");
  var Ok = document.getElementById("OK01");
  let butao = document.getElementById("Butaoceta02");
  butao.style.transform = "rotate(90deg)";

  butao.textContent = "\u276F"; // ou "\276F", mas com "u" é mais claro
  input.value = ""; // Limpa o input
  Ok.style.display = "block";
  toggle = !toggle;
  botao.setAttribute("onclick", "cetinha02()"); // Restaura o clique original
}

// TAG NUMERO 8 DE PULAR LINHA AO SEGURA SHIFT + ENTER

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("00NU4000000sMrZ");

  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Enter bloqueado.");
    }
  });
});

// TAG 11

function efeitopiscar(event) {
  const selectedItem = event.target;

  if (ultimoBotao && ultimoBotao !== selectedItem) {
    clearInterval(blinkEffect); // para o piscar antigo
    ultimoBotao.style.backgroundColor = "#294C39"; // cor de fundo padrão
    ultimoBotao.style.color = "white"; // cor do texto padrão
  }
  if (ultimoBotao && ultimoBotao === selectedItem) {
    ultimoBotao.style.backgroundColor = "#294C39"; // cor de fundo padrão
    ultimoBotao.style.color = "white"; // cor do texto padrão
    return;
  }

  let colors = ["#597465", "white"];
  let i = 0;

  blinkEffect = setInterval(() => {
    selectedItem.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 95); // Pisca a cada 90ms

  // Para o efeito após 800ms e define cor final
  setTimeout(() => {
    clearInterval(blinkEffect);
    selectedItem.style.backgroundColor = "white"; // cor final
    selectedItem.style.color = "#597465"; // cor do texto
  }, 800);

  ultimoBotao = selectedItem; // atualiza o último botão clicado

  const sections = document.querySelectorAll(".container");
  const totalSections = sections.length;

  setTimeout(() => {
    if (currentSection < totalSections - 1) {
      currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

let inputok = document.getElementById("okbutaofinal");

inputok.addEventListener("click", function () {
  document.querySelector(".errofinal").style.display = "flex";
  inputok.style.display = "none";
});



// TAG 12

function taglast(event) {
  setTimeout(() => {
    document.querySelector(".errofinal").style.display = "none";
  }, 800);

  let inputenviar = document.getElementById("submit");

  setTimeout(() => {
    inputenviar.style.display = "block";
    inputok.style.display = "none";
  }, 800);

  let button = event.currentTarget;
  let colors = ["#597465", "#113822"];
  let i = 0;
  let checkSpan = button.querySelector(".verificaçao");

  console.log(button);
  

  checkSpan.textContent = "\u2713";

  if (ultimoP === button) {
    button.style.backgroundColor = "";
    checkSpan.textContent = "";

    ultimoP = null;
    return;
  }

  // Marca o novo
  checkSpan.textContent = "\u2713";

  if (ultimoP && ultimoP !== button) {
    ultimoP.style.backgroundColor = "";
    let oldSpan = ultimoP.querySelector(".verificaçao");

    if (oldSpan) oldSpan.textContent = "";
  }

  let blinkEffect = setInterval(() => {
    button.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 90); // Muda de cor a cada 300ms

  // Para o efeito e esconde após 2 segundos
  setTimeout(() => {
    clearInterval(blinkEffect); // Para o piscar
    button.style.backgroundColor = "#597465"; // Reseta a cor
  }, 600);

  button.setAttribute("onclick", "arrumar03(event)");
  ultimoP = button;
}
function arrumar03(event) {
  let inputenviar = document.getElementById("submit");
  let inputok = document.getElementById("okbutaofinal");

  let button = event.currentTarget;

  const checkSpan = button.querySelector(".verificaçao");

  // Se clicar no mesmo, desmarca
  if (ultimoP === button) {
    button.style.backgroundColor = "";
    checkSpan.textContent = "";
    inputenviar.style.display = "none";
    inputok.style.display = "block";

    ultimoP = null;
    return;
  }

  if (ultimoP && ultimoP !== button) {
    ultimoP.style.backgroundColor = "";
    let oldSpan = ultimoP.querySelector(".verificaçao");
    if (oldSpan) oldSpan.textContent = "";
    checkSpan.textContent = "";
  }
  button.setAttribute("onclick", "taglast(event)");

  ultimoP = button;
}

var input = document.getElementById("phone"); // Seleciona seu input pelo ID
window.intlTelInput(input, {
  // Opções de configuração (algumas comuns):
  // initialCountry: "auto", // Tenta detectar o país inicial pelo IP
  // geoIpLookup: function(callback) { // Configura a detecção por IP
  //   fetch('https://ipapi.co/json/')
  //     .then(response => response.json())
  //     .then(data => callback(data.country_code))
  //     .catch(() => callback('us')); // Default se falhar
  // },
  preferredCountries: ["br", "us", "pt"], // Países que aparecem no topo da lista
  // separateDialCode: true, // Separa o código do país do número no input
});


let lastScrollTop = 0;
let arrumar = true
let currentSection = 0;




window.addEventListener("scroll", function () {
    let scrollTop = scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {

        let valido = true;
        const n01 = document.getElementsByClassName("n01")
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
        const camposInput = document.querySelectorAll("#first_name, #last_name, #telefone, #email");

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

    document.addEventListener('keydown', function() {
        if (currentSection < totalSections - 1) {
            currentSection++;
        }

        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    })

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




// ROLAR  A TELA AO CLICAR O ENTER
/*
const totalSections = document.querySelectorAll('.section').length;

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log("olaa")
    // Avança para a próxima seção (se existir)
    if (currentSection < totalSections - 1) {
      currentSection++;
      const offset = currentSection * window.innerHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }
});*/













// TAG NUMERO 3



function getElementOnClickUl(event) {

    let ultimoBotao = null;  // Guarda o último botão clicado
    let blinkEffect = null;  // Guarda o intervalo do piscar
    const caixinha = event.target.closest('span');

 caixinha.style.backgroundColor = "white"
    caixinha.style.color = "#294C39"
    // Procura o ancestral <li> mais próximo a partir do alvo clicado
    const li = event.target.closest('li');

    if (ultimoBotao && ultimoBotao !== li) {
        clearInterval(blinkEffect);  // para o piscar antigo
        ultimoBotao.style.backgroundColor = "#294C39";  // cor de fundo padrão
        ultimoBotao.style.color = "white";            // cor do texto padrão
      }

    // Se não encontrar uma <li> ou se o clique for no <ul> diretamente, não faz nada
    if (!li || li.tagName.toLowerCase() === 'ul') return;

    // Seleciona o checkbox dentro da <li> (ou outro seletor, se necessário)
    let checkbox = li.querySelector("input[type='checkbox']");
   
    if (checkbox) {
        // Inverte o estado do checkbox
        checkbox.checked = !checkbox.checked;
    }
   
    let colors = ["#597465","#294C39"];
    let i = 0;

  blinkEffect = setInterval(() => {
    li.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 80);  // Pisca a cada 90ms

  // Para o efeito após 800ms e define cor final
  setTimeout(() => {
    clearInterval(blinkEffect);
    li.style.backgroundColor = "#597465";  // cor final
    li.style.color = "#597465";     
  }, 800);


}










// BOTAO PARA GERAR AS LI NO INPUT DA QUESTAO 5 E 6




console.log('olaaa')
let toggle = true;

function cetinha01() {

    var opçoes = document.getElementById('opçoesesta')
    var Ok = document.getElementById('OK')

    if (toggle) {
        Ok.style.display = 'none'
        opçoes.style.display = 'block'
    } else {
        opçoes.style.display = 'none'
        Ok.style.display = 'block'

    }
    toggle = !toggle;
}


function selectOption(event) {
    let botao = document.getElementById("buttonceta");
    let opcoes = document.getElementById('opçoesesta');
    let opçaoli = document.getElementById('opçaoli')
    const selectedText = event.target.textContent;  
    const selectedItem = event.target

    

    // Atribui o texto ao campo de input  
    document.getElementById('00NU4000000sMef').value = selectedText;  

    // Faz a lista piscar antes de desaparecer
    let colors = ["#597465", "#113822", "#597465", "#113822"];
    let i = 0;
    
    let blinkEffect = setInterval(() => {
        selectedItem.style.backgroundColor = colors[i % colors.length];
        i++;
    }, 90);  // Muda de cor a cada 300ms

    
    // Para o efeito e esconde após 2 segundos
    setTimeout(() => {
        clearInterval(blinkEffect);  // Para o piscar
        opcoes.style.display = 'none';  // Esconde o elemento
        selectedItem.style.backgroundColor = "";  // Reseta a cor
    }, 1000);  

    botao.setAttribute("onclick", "apagarSelecao01()");
}

                                                                                                                                                                                                                                                                

function apagarSelecao01() {
    let input = document.getElementById("00NU4000000sMef");
    let botao = document.getElementById("buttonceta");
    var Ok = document.getElementById('OK')


    input.value = ""; // Limpa o input
    Ok.style.display = 'block'
    let imagem = document.getElementById("Butaoceta01")
    imagem.src = "pngwing.com.png"
    toggle = !toggle
    botao.setAttribute("onclick", "cetinha01()"); // Restaura o clique original
}




function cetinha02() {


    var opçoesre = document.getElementById('opçoesregime')
    var Ok = document.getElementById('OK01')
    if (toggle) {
        Ok.style.display = 'none'
        opçoesre.style.display = 'block'
    } else {
        Ok.style.display = 'block'
        opçoesre.style.display = 'none'
    }
    toggle = !toggle;

}
function selectOption01(event) {
    let botao = document.getElementById("buttaoceta02");
    let opcoes = document.getElementById('opçoesregime');
    const selectedText = event.target.textContent;  
    const selectedItem = event.target

    

    // Atribui o texto ao campo de input  
    document.getElementById('00NU4000000sMmj').value = selectedText;  

    // Faz a lista piscar antes de desaparecer
    let colors = ["#597465", "#113822", "#597465", "#113822"];
    let i = 0;
    
    let blinkEffect = setInterval(() => {
        selectedItem.style.backgroundColor = colors[i % colors.length];
        i++;
    }, 90);  // Muda de cor a cada 300ms

    
    // Para o efeito e esconde após 2 segundos
    setTimeout(() => {
        clearInterval(blinkEffect);  // Para o piscar
        opcoes.style.display = 'none';  // Esconde o elemento
        selectedItem.style.backgroundColor = "";  // Reseta a cor
    }, 1000);  
    botao.setAttribute("onclick", "apagarSelecao02()");

}

function apagarSelecao02() {
    let input = document.getElementById("00NU4000000sMmj");
    let botao = document.getElementById("buttaoceta02");
    var Ok = document.getElementById('OK01')


    input.value = ""; // Limpa o input
    Ok.style.display = 'block'
    let imagem = document.getElementById("Butaoceta02")
    toggle = !toggle
    botao.setAttribute("onclick", "cetinha02()"); // Restaura o clique original
   



}


// TAG NUMERO 8 DE PULAR LINHA AO SEGURA SHIFT + ENTER

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('00NU4000000sMrZ');

    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });

    textarea.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        console.log('Enter bloqueado.');
      }
    });
  });
  







// BUTOES DE NOTA ANIMAÇAO DE PISCAR


let ultimoBotao = null;  // Guarda o último botão clicado
let blinkEffect = null;  // Guarda o intervalo do piscar
let tempo = null;

function efeitopiscar(event) {
  const selectedItem = event.target;

  // Se clicou em outro botão, reseta o anterior
  if (ultimoBotao && ultimoBotao !== selectedItem) {
    clearInterval(blinkEffect);  // para o piscar antigo
    ultimoBotao.style.backgroundColor = "#294C39";  // cor de fundo padrão
    ultimoBotao.style.color = "white";            // cor do texto padrão
  }

  let colors = ["#597465","white"];
  let i = 0;

  blinkEffect = setInterval(() => {
    selectedItem.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 80);  // Pisca a cada 90ms

  // Para o efeito após 800ms e define cor final
  setTimeout(() => {
    clearInterval(blinkEffect);
    selectedItem.style.backgroundColor = "white";  // cor final
    selectedItem.style.color = "#597465";              // cor do texto
  }, 800);

  ultimoBotao = selectedItem;  // atualiza o último botão clicado
  const sections = document.querySelectorAll('.container');

  console.log("Seções encontradas:", sections);

  const totalSections = sections.length;

  setTimeout(() => {

    if (currentSection < totalSections - 1) {
        currentSection++;
    }

    sections[currentSection].scrollIntoView({ behavior: 'smooth' });





}, 1000);
}

    



















































/*

*/

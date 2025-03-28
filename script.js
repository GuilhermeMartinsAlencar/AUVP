



window.addEventListener('wheel', (event) => {
        


let valido = true;
        const nome = document.getElementById("first_name").value;
        const campo = document.getElementById("erroNome");
        const campo01 = document.getElementById("errosobreNome");
        const sobrenome = document.getElementById("last_name").value;
        const telefone = document.getElementById("phone").value;
        const campo02 = document.getElementById("telefone");
        const email = document.getElementById("email").value;
        const campo03 = document.getElementById("erroEmail");



        
        


        if (nome === "") {
            campo.style.display = 'block'
            document.getElementById("erroNome").innerHTML = "\u26A0 Preencha este campo";
            valido = false;
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

    })




//if ('scrollRestoration' in history) {
//  history.scrollRestoration = 'manual';
//}

//window.onload = function () {
//  window.scrollTo(0, 0);
//};


document.addEventListener("DOMContentLoaded", function () {
    let currentSection = 0;
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
    let imagem = document.getElementById("Butaoceta01")
    const selectedText = event.target.textContent;  // Pega o texto do item clicado
    document.getElementById('00NU4000000sMef').value = selectedText;  // Atribui ao campo de input
    document.getElementById('opçoesesta').style.display = 'none';  // Fecha a lista de opções
    imagem.src = "xtransparente.xcf"
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
    let imagem = document.getElementById("Butaoceta02")
    const selectedText01 = event.target.textContent;  // Pega o texto do item clicado
    document.getElementById('00NU4000000sMmj').value = selectedText01;  // Atribui ao campo de input
    document.getElementById('opçoesregime').style.display = 'none';  // Fecha a lista de opções

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



































































function getElementOnClickUl(event) {
    // Procura o ancestral <li> mais próximo a partir do alvo clicado
    let li = event.target.closest('li');

    // Se não encontrar uma <li> ou se o clique for no <ul> diretamente, não faz nada
    if (!li || li.tagName.toLowerCase() === 'ul') return;

    // Seleciona o checkbox dentro da <li> (ou outro seletor, se necessário)
    let checkbox = li.querySelector("input[type='checkbox']");

    if (checkbox) {
        // Inverte o estado do checkbox
        checkbox.checked = !checkbox.checked;
    }
}







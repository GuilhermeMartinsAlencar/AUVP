/*
let valor = true


    function getElementOnClickUl(event) {

        let blinkEffect = null;  // Guarda o intervalo do piscar
   
       const li = event.target.closest('p');
   
   
   
       // Se não encontrar uma <li> ou se o clique for no <ul> diretamente, não faz nada
       if (!li || li.tagName.toLowerCase() === 'ul') return;
   
       // Seleciona o checkbox dentro da <li> (ou outro seletor, se necessário)
       let checkbox = li.querySelector("input[type='checkbox']");
   
       if (checkbox) {
           // Inverte o estado do checkbox
           checkbox.checked = !checkbox.checked;

       }
       li.style.backgroundColor = "#294C39";  // cor final

      
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
     }, 800);

    }
     */
let varialvelglobal = "VARIAVEL DE ESCOPO GLOBAL, PODE SER ACESSADA EM QUALQUER LUGAR DO CÓDIGO/n/n";

function funçao1(){
    console.log(varialvelglobal);
    
}

function funçao2(){
    let variavellocal = "VARIAVEL DE ESCOPO LOCAL, SÓ PODE SER ACESSADA DENTRO DA FUNÇÃO";
    console.log(variavellocal);
    
}

funçao1();
funçao2();
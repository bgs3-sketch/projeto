// script.js

// QUESTÃO 1

function MAIOR_MENOR(a,b,c,d,e){

    let maior = Math.max(a,b,c,d,e);
    let menor = Math.min(a,b,c,d,e);

    return {
        maior,
        menor
    };
}

function executarMaiorMenor(){

    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);
    let d = Number(document.getElementById("n4").value);
    let e = Number(document.getElementById("n5").value);

    let resultado = MAIOR_MENOR(a,b,c,d,e);

    document.getElementById("res1").innerHTML =
    `Maior valor: ${resultado.maior} <br>
     Menor valor: ${resultado.menor}`;
}


// QUESTÃO 2

function VOGAL(c){

    c = c.toLowerCase();

    if(c == "a" || c == "e" || c == "i" || c == "o" || c == "u"){
        return 1;
    }

    return 0;
}

function executarVogal(){

    let letra = document.getElementById("letra").value;

    let resultado = VOGAL(letra);

    document.getElementById("res2").innerHTML =
    `Resultado: ${resultado}`;
}


// QUESTÃO 3

function LIMITES(li, ls){

    let pares = [];
    let soma = 0;

    for(let i = li + 1; i < ls; i++){

        if(i % 2 == 0){
            pares.push(i);
            soma += i;
        }
    }

    return {
        pares,
        soma
    };
}

function executarLimites(){

    let li = Number(document.getElementById("li").value);
    let ls = Number(document.getElementById("ls").value);

    let resultado = LIMITES(li, ls);

    document.getElementById("res3").innerHTML =
    `Pares: ${resultado.pares.join(", ")} <br>
     Soma: ${resultado.soma}`;
}


// QUESTÃO 4

function ORDEM(a,b,c){

    let numeros = [a,b,c];

    numeros.sort(function(x,y){
        return x-y;
    });

    return numeros;
}

function executarOrdem(){

    let a = Number(document.getElementById("o1").value);
    let b = Number(document.getElementById("o2").value);
    let c = Number(document.getElementById("o3").value);

    let resultado = ORDEM(a,b,c);

    document.getElementById("res4").innerHTML =
    `Ordem crescente: ${resultado.join(", ")}`;
}


// QUESTÃO 5

function POSITIVO_NEGATIVO(x){

    return x >= 0;
}

function executarPositivoNegativo(){

    let x = Number(document.getElementById("pn").value);

    let resultado = POSITIVO_NEGATIVO(x);

    if(resultado){
        document.getElementById("res5").innerHTML = "Positivo";
    }else{
        document.getElementById("res5").innerHTML = "Negativo";
    }
}


// QUESTÃO 6

function PAR_IMPAR(x){

    return x % 2 == 0;
}

function executarParImpar(){

    let x = Number(document.getElementById("pi").value);

    let resultado = PAR_IMPAR(x);

    if(resultado){
        document.getElementById("res6").innerHTML = "Par";
    }else{
        document.getElementById("res6").innerHTML = "Ímpar";
    }
}
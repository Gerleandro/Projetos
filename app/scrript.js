function insert(num) { // funcão Inserir numeros e caracteres.
    let screen = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = screen + num;
}

function clean() { // função Limpar tudo.
    let cleanAll = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = "";
}

function cleanBack() { // função Apagar um por um.
    let back = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = back.substring(0, back.length -1);
}

function calculate() { // função Calcular avaliar o problema e entrega o resultado.
    let calc = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = eval (calc);
}


           
/*  bem vindo aos comentarios... 
                blz aqui vou te explicar de forma rapida de simples
==============================================================================================
function insert é igual a função inserir 
inserir o que? > inserir num de number igual a numeros tbm inserir os caracteres +/*-
inserir a onde?  inserir na tela  igual a screen 
utilizando (  document.getElementById("screen").innerHTML  ) 
tela da calculadora

==============================================================================================
function clean() limpar todos os numeros de caracteres da tela da calculadora

==============================================================================================
function cleanBack() limparar apenas um numeros ou caracter por vez ou seja apagar um por um.

==============================================================================================
function calculate() criei um varial pra receber o problema matematico e uso EVAL () traduzindo 
pro ingles AVALIAR. ele avaliar o problema matematico e em seguida ja imprimir o resultado 
na tela da calculadora 
*/




























/* Bem vindo ao comentarios do programa aqui teremos apenas o necessarios !

1.  function insert(num) essa função é para imprimir os caracteres. 
2.  function 
*/
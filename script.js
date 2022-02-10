//alert("Entendido e operante, capitão")

var vOuF = false;
console.log(vOuF);

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

var nome = "doritos jr";
console.log(typeof(nome));

var variavel;
console.log(variavel);

let variavel2 = "doritos sr";
variavel2 = "cheetão da massa";
console.log(variavel2);

const constante = "simão bacamarte";
console.log(constante);

var escpopGlobal = "global";
console.log(escpopGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

var atribuicao = "atribua, doido";

var comparacao = 0 == 0;
console.log(comparacao);

var comparacaoIdentica = 0 === '0';
console.log(comparacaoIdentica);

/*
var adicao = 1+1;
console.log(adicao);
var subtracao = 2-1;
console.log(subtracao);
var multiplicacao = 2*8;
console.log(multiplicacao);
var divisaoReal = 6/2;
console.log(divisaoReal);
var divisaoInteira= 7%2;
console.log(divisaoInteira);
var potenciacao =4**4;
console.log(potenciacao);
*/

var array = ['string', 1, true];
console.log(array);
console.log(array[1]);
var array1 = ['stringos', 222, false, array, ['array2']];
console.log(array1);
console.log(array1[3]);

array.forEach(function(item, index){console.log(item, index)});
array.push('novo item', 30);
console.log(array);
array1.pop();
console.log(array1);
array.shift();
console.log(array);
array.unshift("doideiras mil");
console.log(array);
console.log(array.indexOf(true));
array.splice(0,3);
console.log(array);
let novoArray = array1.slice(0,3);
console.log(novoArray);

let object = {
    string: 'string',
    number: 1,
    boolean: false,
    array: ['array0001'],
    objectInterno: {
        objectInterno : 'objeto interno',
    }
}

console.log(object);
console.log(object.boolean);
console.log(object.objectInterno);
console.log(object.objectInterno.objectInterno);
var string = object.string;
console.log(string);
var arrayMil = object.array;
console.log(arrayMil);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);


var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1>0 && jogador2<jogador1){
    console.log("jogador1 marcou ponto");
    placar = jogador1>jogador2;
}else if(jogador2>0 && jogador2>jogador1){
    console.log("jogador2 marcou ponto");
    placar
}{
    console.log("ninguém marcou ponto");
}

switch(placar){
    case placar == jogador1>jogador2:
        console.log("jogador1 ganhou");
        break;
    case placar == jogador2>jogador1:
        console.log("Jogador2 ganhou");
        break;
    default:
        console.log("Ninguém ganhou");
}

let array3 = [1, 2, 3, 4, 5, 6];
for(let indice = 0; indice<array3.length; indice++){
    console.log(indice);
}

for(i in array3){
    console.log(i);
}

for(i in object){
    console.log(i);
}

for(i of array3){
    console.log(i);
}
for(i of object.string){
    console.log(i);
}

function funcao(){
    console.log("essa mensagem veio de uma função");
}
funcao();

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}

mensagem('ola', 'enfermeira');

function funcaoDeclarativa(){
    console.log("essa é uma mensagem de uma função declarativa");
}
funcaoDeclarativa();

var expressao = function expressaoFuncao(){console.log("essa é a mensagem da expressão de função com nome")}
expressao();
expressao = function(){console.log("essa é a mensagem de uma expressão de função sem nome")}
expressao();

var arrowFunction = () => {console.log("olha a arrow function aqui")}
arrowFunction();

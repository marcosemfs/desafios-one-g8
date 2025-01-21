function exibirOla() {
    console.log('Olá, Mundo!');
}

exibirOla();

function exibirOlaNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Marcos");

function calcularDobro(numero) {
    return numero * 2
}

let resultadoDobro = calcularDobro(5)
console.log(resultadoDobro);

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);

function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

function calcularQuadrado(numero) {
    return numero * numero;
}

let resultado = calcularQuadrado(127);
console.log (resultado);
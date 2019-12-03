/*
 * O método every() testa se todos os elementos do array
 * passam pelo teste implementado pela função fornecida.
 * 
 * A função callback é chamada com três argumentos: o valor 
 * do elemento corrente, o índice do elemento corrente e o 
 * array original que está sendo percorrido.
 */

function isBigEnough(element, index, array) {
  return element >= 10;
}

// [12, 5, 8, 130, 44].every(isBigEnough); // false
// const a = [12, 54, 18, 130, 44].every(isBigEnough); // true

// console.log(a);

// const b = [12, 5, 8, 130, 44].every(elem => elem >= 10); // false
// const b = [12, 54, 18, 130, 44].every(elem => elem >= 10); // true

// console.log(b);


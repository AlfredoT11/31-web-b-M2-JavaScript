//EJEMPLOS DE OPERADORES RELACIONALES Y DIRERENCIA ENTRE ==, ===, !=, !==

let a = 5;
let b ='5';
const c = 5;

//Operadores relacionales (< , >, <=, >=)
console.log(a < 10); //true
console.log(b > 10); //false
console.log(a <= 5); //true
console.log(b >= 5); //true

//Operadores relacionales (==, ===, !=, !==)
console.log(a == b); //true
console.log(a === b); //false
console.log(a === c); //true
console.log(a != b); //false
console.log(a !== b); //true
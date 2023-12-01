//Operadores lógicos &&, || y !
let a = true;
let b = false;
let c = 5 < 10; //True

console.log(a && b); //false
console.log(a && c); //true
console.log(a || b); //true
console.log(!a) //false
console.log(!b) //true 

//------Cuando usamos el mismo operador para verificar varias condiciones---------
//---- La evaluación se hace de izquierda a derecha
let ejemplo1 = (5 > 3) && (8 < 10); //true
let ejemplo2 =  (5 > 3) && (8 == 8) && (10 <= 1) //false
let ejemplo3 =  (10 <= 1) && (8 == 8) && (5 > 3) //false

//-------JERARQUÍA DE OPERADORES------

/*
    1.- () 
    2.- NOT
    3.- AND
    4.- OR
*/

let ejemplo4 = !true && false || true;
//NOT se evalúa primero -> (false && false) || true
//AND tiene mayor jerarquía que OR -> false || true
//Al final evalúa los operadore OR -> true
console.log(ejemplo4); //true

let ejemplo5 = !true && (false || true);
//Verfica los parértesis -> !true && true
//Evalúa NOT -> false && true
//Evalúa AND -> false
console.log(ejemplo5); 

let frutas = ['Pera', 'Manzana', 'Plátano', 'Sandía', 'Melón'];

console.log(frutas.length);

//Imprimir el primer elemento.
console.log(frutas[0]);

//Imprimir el último elemento.
console.log(frutas[frutas. length- 1]);

//Agrega un elemento al final del arreglo
frutas.push('Guayaba');
console.log(frutas.length);

//Elimina el elemento final del arreglo
frutas.pop();
console.log(frutas.length);

//Agrega un elemento al inicio del arreglo
frutas.unshift('Durazno');
console.log(frutas.length);

//Elimina un elemento al inicio del arreglo
frutas.shift();
console.log(frutas.length);


let alumnos = 'Enrique,Claudio,David,Fernanda';
let alumnosArreglo = alumnos.split(',');
console.log(alumnosArreglo);

//let copiaFrutas = [...frutas]; // Copiar el arreglo frutas en copiaFrutas.

console.log('Arreglo original: ' + frutas);

// Slice crea una copia de un arreglo desde el inicio hasta el valor final - 1
let copiaFrutas = frutas.slice(2, 4); //inicio, hasta donde quiero copiar - 1
console.log(copiaFrutas);

// Utilizando splice para agregar elementos
console.log('Arreglo original: ' + frutas);
let copiaFrutas2 = [...frutas];
copiaFrutas2.splice(3, 1, 'Aguacate', 'Uva');
console.log('Arreglo con agregados: ' + copiaFrutas2);

// Utilizando splice para eliminar elementos.
console.log('Arreglo original: ' + frutas);
let copiaFrutas3 = [...frutas];
copiaFrutas3.splice(1, 2);
console.log(copiaFrutas3);

let numeros = [5, 9, 21, 10, 0, 13, 91];
console.log(numeros.sort()); //Sirve para ordenar en orden alfabético
console.log(numeros.sort(function(a, b){return a-b})); //Sirve para ordenar números a partir de su vaor


let frutas1 = ['Manzana', 'Pera'];
let verduras1 = ['Zanahoria', 'Pepino'];

let frutasYVerduras = [...frutas1, 'Uva' ,...verduras1];
console.log(frutasYVerduras);


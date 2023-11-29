//alert('Ciclos');

//Ciclo while
//Imprimir los valores del 1 al 10.
let i = 1;
console.log('Antes del while');
while(i < 11){ 
    console.log(i);
    i++; // i = i + 1;
}
console.log('Después del while');

//Ciclo do-while
//El código a ejecutar se ejecuta al menos una vez.

i = 12;
console.log('Antes del do-while');
do{
    //Código a ejecutar
    console.log(i);
}while(i < 11);
console.log('Después del do-while');

let numero = 8;
let respuesta = 8;

do{
    numero = prompt('¿En qué número estoy pensando?');
}while(numero != respuesta);

//Ciclo for

console.log('Antes del for');
for(let j = 0; j < 21; j++){
    console.log(j);
}
console.log('Después del for');

//Los incrementos no tienen que ser forzosamente de 1 en 1.
//El siguiente for aumenta la variable de control de 2 en 2.
console.log('Antes del for de 2 en 2');
for(let j = 0; j < 21; j+=2){
    console.log(j);
}
console.log('Después del for de 2 en 2');

console.log('Antes del for compuesto');
for(let j = 0, k = 10; j < 21 && k < 15; j+=2, k++){
    console.log('j: ' + j);
    console.log('k: ' + k);
}
console.log('Después del for compuesto');

const frutas = ['Manzana', 'Pera', 'Uva', 'Naranja', 'Durazno'];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

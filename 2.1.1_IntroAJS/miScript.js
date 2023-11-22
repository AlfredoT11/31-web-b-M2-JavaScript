//Salidas

//alert('¡Hola mundo desde afuera!');

// Los console.log() nos permiten hacer depuración (debugging).
console.log('Hola mundo desde la consola');
console.log('Yo soy otro mensaje');

/* 
Esta función permite escribir directamente sobre el HTML.
Si nosotros escribimos código HTML, el navegador lo interpretará como tal. 
*/
document.write('<h2>Estoy en la pantalla :D</h2>');

//Entrada

let miNombre = prompt('Escribe tu nombre: ');
console.log(miNombre);


// Variables y constantes

var edad; //Declara una variable.
edad = 24; // Inicializar una variable.
var nombre = "Florencio"; //Declarar e inicializar una variable.

let clima = "Soleado"; //Declarar e inicializar una variable.

const gravedad = 9.81;
//gravedad = 8.88888; //Esto marca un error porque no se puede cambiar el valor de una constante

//Tipos de datos

//String (cadena)
let primerApellido = "Solis";
let segundoApellido = 'Medina';

console.log(typeof primerApellido);

primerApellido = 10;

console.log(typeof primerApellido);

//Number
let entero = 10;
let decimal = 6.5892;

//Boolean
let mayorDeEdad = true;
let conozcoJapon = false;

//Objecto literal
let perro = {
    generales: {
        nombre: 'Mocha',
        edad: 3,
    },
    estaVacunado: true,
    informacionNacimiento: {
        ciudad: 'Ciudad de México',
        mesNacimiento: 'Noviembre',
        diaNacimiento: 13
    }
}

console.log(perro.generales.nombre);
console.log(perro.informacionNacimiento);

const pikachu = {
    nombre: 'Tigrillo',
    edad: 7, 
    edad: 6
}


console.log(pikachu);
pikachu.edad = 8;
console.log(pikachu);

pikachu.color = 'Amarillo';

console.log(pikachu.color);

//Concatenación es unir varias cadenas en una sola
// 'Hola' + ' Mundo' = 'Hola Mundo'
// 'Tengo' + 24 + 'años' = 'Tengo24años'

/*
let nombre1 = prompt('Hola, ¿cómo te llamas?');
alert('Hola ' + nombre1 + ' .Mi nombre es Computadora'); //Concatenación
let edad1 = prompt('¿Cuántos años tienes?');
alert('Tienes ' + edad1 + ' años');
*/

console.log('2 + 2 = ' + (2+2));
console.log('3 * 2 = ' + (3*2));

//Operador módulo (%): Este operador calcula el residuo de una división.

console.log('5 % 3 = ' + (5 % 3));


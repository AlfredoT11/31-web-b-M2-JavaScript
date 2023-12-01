//Declaro mi función
function imprimirNumeros(){
    console.log("1")
    console.log("2")
    console.log("3")
}

//Mando a llamar a mi función
imprimirNumeros//No se ejecuta, sólo me manda su defición
imprimirNumeros()

//Funciones con parámetros

//Caso 1: Como no defino un valor de retorno en la función,
//su valor de respuesta es undefined
function sumaConsole(num1, num2) {
    console.log(num1 + num2)
    //return "Hola"
}

//Caso 2: Al usar return en una función, yo defino que valor me va a
//devolver al terminar de ejecutarse
//Nota: return sólo puedo definirla dentra de una función
function sumaReturn(num1, num2) {
    return num1 + num2
    console.log("Hola")//No se va a ejecutar porque se encuentra después de un return
}

//Cuando ingreso valores para mandar a llamar a la función
//éstos se conocen como ARGUMENTOS
sumaConsole(5,7)
sumaConsole(4,2)
console.log(sumaConsole(150,10) + 1 ) //undefined + 1 = NaN
console.log(sumaReturn(5,8) + 1) //5 + 8 = 14

//Orden de los parámetros
function saludar(nombre, primerApellido){
    console.log("Hola, soy " + nombre + " " + primerApellido)
}

saludar("Gutiérrez", "Pedro")

// Funciones de alto orden: Son funciones que reciben como parámetro otras funciones o las utilizan dentro de su definición
//función principal
function operacionMatematica(num1, num2, operacion) {
    return operacion(num1, num2) //suma(7, 14) -> 21
}

//función que mande como parámetro
function suma(num1, num2) {
    return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

console.log(operacionMatematica(7, 14, suma))
console.log(operacionMatematica(7, 14, resta))

//----------------------------------------------
//Funciones flecha (arrow functions)
//Las funciones flecha nos dan una sintaxis más limpia y fácil de leer
//Normalmente se almacenan en constantes
const saludarFecha = (nombre, pApellido) => {
    console.log("-> Hola, soy " + nombre + " " + pApellido)
}

saludarFecha("Juana", "Martínez")

//short arrow function
//1.- Si mi función sólo retorna un valor, puedo quitar el return explicito
//las llaves y hacer uso del return implícito
const sumaFlecha = (num1, num2) => num1 + num2

console.log(sumaFlecha(4, 4))

//2.- Si mi función sólo recibe un parámetro, puedo quitar los paréntesis de los parámetros
const saludarCorto = nombre => {
    console.log("Hola, soy " + nombre)
}
saludarCorto("Ulises")
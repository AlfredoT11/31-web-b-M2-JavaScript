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


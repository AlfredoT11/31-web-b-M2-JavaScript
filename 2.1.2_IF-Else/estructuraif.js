//Estructura básica if

let seRealizoTransaccion = true

if(seRealizoTransaccion){ //es igual a if (seRealizoTransaccion == true)
    console.log("Tu compra se hizo de manera exitosa!")
} 
console.log("Otra operación");


//Estructura básica if-else
//Ejemplo 1
if(seRealizoTransaccion){
    console.log("Tu compra se hizo de manera exitosa!")
}else{
    console.log("Fondos insuficientes, ingrese otra forma de pago");
}

console.log("Otra operación extra");

//Ejemplo 2
let eresMayorDeEdad = true

if(eresMayorDeEdad){
    console.log("Tienes acceso a la página");
}else{
    console.log("No tienes la edad suficiente para consultar la página");
}

//Estructura if-else-if
let semaforo = "amarillo"

if(semaforo == "verde"){
    console.log("Avanza");
}else if(semaforo.toLocaleLowerCase() == "Amarillo".toLocaleLowerCase()){
    console.log("Comienza a frenar");
}else if(semaforo == "rojo"){
    console.log("Detente");
}

//Estructura if-else-if-else
semaforo = "morado"
if(semaforo == "verde"){
    console.log("Avanza");
}else if(semaforo == "amarillo"){
    console.log("Comienza a frenar");
}else if(semaforo == "rojo"){
    console.log("Detente");
}else{
    console.log("El semaforo parpadea en amarillo");
}


let persona = {
    nombre: "Juan",
    edad : 19,
    locadidad: "Sur"
}

if(persona.edad >= 18 && persona.locadidad == "Norte"){
    console.log("Te puedes vacunar");
}else{
    console.log("Lo sentimos. No cumples con uno o más de los requisitos.");
}

//IF's anidados
let edad = 25;
let tieneIdentificacion = true

if(edad >= 18) {
    if(tieneIdentificacion){
        console.log("Puedes pasar al lugar");
    }
}else{
    console.log("Eres menor de edad, no puedes pasar");
}


//Variables globales: Son aquellas que no están declaradas dentro de alguna estructura o función
let edad = 19
let nombre = "Juanito Bananas" 

function mayorEdad() {
    if(edad >= 18){
        return nombre + " Eres mayor de edad"
    }else if(edad < 18){
        return nombre + " Eres menor de edad"
    }
}

console.log(mayorEdad())
console.log(edad, nombre)

//---------------------------
function menorEdad() {
    //Variable local, sólo existe dentro del bloque de código donde fue declarada
    let edad = 16
    let apodo = "Mr T"
    //La variable edad que toma en cuenta para hacer la condición
    //es la variable local edad = 16
    if(edad >= 18){
        return apodo + " Eres mayor de edad"
    }else if(edad < 18){
        return apodo + " Eres menor de edad"
    }
}

console.log(menorEdad())
console.log(edad)
//console.log(apodo) -> Me manda el mensaje de error de que no está definida esta variable
edad = ++edad
console.log(edad)

for(let i = 0 ; i < 10; i++){
 //i sólo vive aquí
}
//i ya no existe

for(let i = 0 ; i < 10; i++){
    //i sólo vive aquí
}
//i ya no existe

for(let i = 0 ; i < 10; i++){
    //i sólo vive aquí
}
//i ya no existe
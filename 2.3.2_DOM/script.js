/*
//Código de ejemplos de teoría
document.addEventListener("DOMContentLoaded", ()=>{
    const miTitulo = document.getElementById("miTitulo")
    const otroTitulo = document.getElementById("otroTitulo")

    console.log(miTitulo)
    miTitulo.style.color = "green"

    miTitulo.innerHTML = "estoy usando innerHMTL"
    otroTitulo.outerHTML = "Este es un párrafo que hice en js"

    alert("El DOM se ha cargado completamente")
    
})*/

function agregarTarea() {
    let input = document.getElementById("tareaInput")
    //.trim() elimina los espacios vacíos antes y después de la cadena de texto
    let textoTarea = input.value.trim()
    
    if(textoTarea){//El usuario debe ingresar por lo menos un caracter
        //Creo mi nueva tarea
        const listaTareas = document.getElementById("listaTareas")//Contender para poner mis tareas
        const nuevaTarea = document.createElement("li")//Creo un li para agregar mi tarea en el html
        
        nuevaTarea.innerText = textoTarea //Coloco el texto de la tarea en el list item (li)
        
        //Crear mi botón de eliminar
        const botonEliminar = document.createElement("button")
        botonEliminar.innerText = "Eliminar"
        botonEliminar.addEventListener("click", function () {
            listaTareas.removeChild(nuevaTarea)//removeChild elimina un elemento del elemento padre
        })

        nuevaTarea.appendChild(botonEliminar)

        listaTareas.appendChild(nuevaTarea) //agrega un elemento dentro de el elemento padre


    }else{
        //Mando un alert para que ponga texto
    }
}
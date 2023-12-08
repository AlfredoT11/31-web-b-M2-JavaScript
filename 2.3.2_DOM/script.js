document.addEventListener("DOMContentLoaded", ()=>{
    const miTitulo = document.getElementById("miTitulo")
    const otroTitulo = document.getElementById("otroTitulo")

    console.log(miTitulo)
    miTitulo.style.color = "green"

    miTitulo.innerHTML = "estoy usando innerHMTL"
    otroTitulo.outerHTML = "Este es un párrafo que hice en js"

    alert("El DOM se ha cargado completamente")
    
})
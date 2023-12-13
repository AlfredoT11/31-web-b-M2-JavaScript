// Simulación de base de datos de información de usuarios
let usuarios = [
    {
        usuario: "Tona",
        password: "1234"
    },
    {
        usuario: "Dolores",
        password: "12345"
    }
];


let divPrincipal = document.getElementById("principal");


// Componentes básicos
function h1(texto){
    return h1Titulo = `<h1>` + texto + `</h1>`;
}

// Páginas
function landing(){
    return h1("Bievenido al mejor cajero del país") + `
        <form>
            <label for='usuarioInput'>Usuario: </label><input type='text' id='usuarioInput' name='usuarioInput'/><br>
            <label for='passwordInput'>Password: </label><input type='password' id='passwordInput' name='passwordInput'/><br>
            <submit id='iniciarSesionSubmit'>Iniciar sesión</submit>
        </form>`;
}

function cajeroInicial(nombreUsuario){
    return h1("¡Bienvenido " + nombreUsuario + "!") 
            + `Monto: $500 MXN`;
}


function iniciarSesion(){
    let usuario = document.getElementById('usuarioInput').value;
    let password = document.getElementById('passwordInput').value;

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].usuario === usuario){
            if(usuarios[i].password === password){
                alert("Sesión iniciada");
                usuarioEnSesion = usuario;
                divPrincipal.innerHTML = cajeroInicial(usuario);
                return;
            }
        }
    }
    alert("Usuario o contraseña incorrectas");
}


// Al inicio el div principal muestra la pantalla de landing
divPrincipal.innerHTML = landing();


// Aquí se agregan los eventos a los botones.
document.getElementById("iniciarSesionSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    iniciarSesion();
});



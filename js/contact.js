// CAPTURA DE OBJETOS DE HTML DEL NAVBAR------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

//EVENTO
navToggle.addEventListener('click', function(){
    navMenu.classList.toggle("visible_menu");

    if (navMenu.classList.contains("visible_menu")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

// -----------------------FORMULARIO DE CONTACTO ----------------------
// DOM------------------------------------------
const form = document.getElementById("form");
const nombre =  document.getElementById("nombre");
const apellido =  document.getElementById("apellido");
const telefono =  document.getElementById("telefono");
const email =  document.getElementById("email");
const asunto =  document.getElementById("asunto");
const mensaje =  document.getElementById("mensaje");
const btnReset = document.getElementById("btn-reset");
const small = document.querySelectorAll("small");
const formContainer = document.querySelectorAll(".form-control");
const popup = document.getElementById('popup');
const botonPopup = document.getElementById('boton-popup');

//EVENTOS
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    let contador = 0;
    for (const aFormContainer of formContainer) {
        if(aFormContainer.classList.contains("success")) {
            contador += 1;
        }
    }

    if(contador == 6) {
        abrirPopup();
    }
});

btnReset.addEventListener("click", (e) => {
    for (const aFormContainer of formContainer) {
        if(aFormContainer.classList.contains("error")) {
            aFormContainer.classList.remove("error");
        } else if(aFormContainer.classList.contains("success")) {
            aFormContainer.classList.remove("success");
        }
    }
    
    for (const aSmall of small) {
        aSmall.innerText = "Campo Obligatorio";
    }
});

botonPopup.addEventListener("click", (e) => {
    cerrarPopup();
});

// FUNCIONES
function abrirPopup(){
    popup.classList.add('open-popup');
}

function cerrarPopup(){
    popup.classList.remove('open-popup');

    for (const aFormContainer of formContainer) {
        if(aFormContainer.classList.contains("error")) {
            aFormContainer.classList.remove("error");
        } else if(aFormContainer.classList.contains("success")) {
            aFormContainer.classList.remove("success");
        }
    };
    
    for (const aSmall of small) {
        aSmall.innerText = "Campo Obligatorio";
    };

    nombre.value = "";
    apellido.value = "";
    telefono.value = "";
    email.value = "";
    asunto.value = "";
    mensaje.value = "";
}

function checkInputs() {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const telefonoValue = telefono.value.trim();
    const emailValue = email.value.trim();
    const asuntoValue = asunto.value.trim();
    const mensajeValue = mensaje.value.trim();

    nombreValue === "" ? setErrorFor(nombre, "No puede dejar este campo vacio") : setSuccessFor(nombre);
    apellidoValue === "" ? setErrorFor(apellido, "No puede dejar este campo vacio") : setSuccessFor(apellido);
    telefonoValue === "" ? setErrorFor(telefono, "No puede dejar este campo vacio") : setSuccessFor(telefono);
    emailValue === "" ? setErrorFor(email, "No puede dejar este campo vacio") : !isEmail(emailValue) ? setErrorFor(email, "Email no válido") : setSuccessFor(email);
    asuntoValue === "" ? setErrorFor(asunto, "No puede dejar este campo vacio") : setSuccessFor(asunto);
    mensajeValue === "" ? setErrorFor(mensaje, "No puede dejar este campo vacio") : setSuccessFor(mensaje);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
    small.innerText = "";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
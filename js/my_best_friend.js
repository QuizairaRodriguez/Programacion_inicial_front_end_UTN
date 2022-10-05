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
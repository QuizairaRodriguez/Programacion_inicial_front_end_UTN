let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector("nav");

navToggle.addEventListener('click', function(){
    navMenu.classList.toggle("visible_menu");

    if (navMenu.classList.contains("visible_menu")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});
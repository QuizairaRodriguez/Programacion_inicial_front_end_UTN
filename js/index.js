// CAPTURA DE OBJETOS DE HTML DEL NAVBAR------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

// CAPTURA DE OBJETOS DE HTML DE #ANIMATIONS------------------------------------------
const moon = document.querySelector('#moon');
const horizon = document.querySelector('#horizon');
const welcome = document.querySelector('.welcome');
const rocks = document.querySelector('#rocks');
const woman = document.querySelector('#woman');


//EVENTOS
window.addEventListener('scroll', function(){
    
    let value = this.scrollY;
    console.log(value)
    moon.style.top = (500+(value/2)) +'px';
    welcome.style.bottom = (100+(value/2)) +'px';
})

navToggle.addEventListener('click', function(){
    navMenu.classList.toggle("visible_menu");

    if (navMenu.classList.contains("visible_menu")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

let moon = document.querySelector('#moon');
let horizon = document.querySelector('#horizon');
let welcome = document.querySelector('.welcome');
let rocks = document.querySelector('#rocks');
let woman = document.querySelector('#woman');
let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector("nav");

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

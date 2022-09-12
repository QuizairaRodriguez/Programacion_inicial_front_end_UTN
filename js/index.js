let moon = document.querySelector('#moon');
let horizon = document.querySelector('#horizon');
let welcome = document.querySelector('.welcome');
let rocks = document.querySelector('#rocks');
let woman = document.querySelector('#woman');

window.addEventListener('scroll', function(){
    
    let value = this.scrollY;
    console.log(value)
    moon.style.top = (500+(value/2)) +'px';
    welcome.style.bottom = (100+(value/2)) +'px';
})

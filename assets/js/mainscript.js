const hamburguesa = document.querySelector('#menu__hamburguesa');
const menu = document.querySelector('#menu__second-block');
const buttonDark = document.querySelector('#dark_and_light');
const dark = document.querySelector('#dark');
const sun = document.querySelector('#sun');
const body = document.querySelector('#body');
const cookiesCtn = document.querySelector('#ctn-cookies');
const cookiesOpacity = document.querySelector('#cookies-opacity');
const cookiesBtn = document.querySelector('#cookies-button');
// MENU HAMBURGESA

const nav = document.querySelector('#hamburger');
const mainLeft = document.querySelector('#main-list');

nav.addEventListener('click', () => {
    nav.classList.toggle('open');
    mainLeft.classList.toggle('active')
});

// FUNCIONALIDAD DE OSCURO Y CLARO

buttonDark.addEventListener('click', () => {
    dark.classList.toggle('active');
    sun.classList.toggle('active');
    buttonDark.classList.toggle('active');
    body.classList.toggle('active');


    //GUARDAR MODO EN LOCAL STORAGE
    if(document.body.classList.contains('active')){
        localStorage.setItem('dark-mode', 'true');
    } else{
        localStorage.setItem('dark-mode', 'false');
    }
});

//OBTENEMOS EL MODO ACTUAL
if(localStorage.getItem('dark-mode') === 'true'){
    body.classList.add('active');
    buttonDark.classList.add('active');
    dark.classList.add('active');
    sun.classList.add('active');
} else{
    body.classList.remove('active');
    buttonDark.classList.remove('active');
    dark.classList.remove('active');
    sun.classList.remove('active');
}

//COOKIES

if(!localStorage.getItem('cookies-aceptadas')){
	cookiesCtn.classList.remove('active');
	cookiesOpacity.classList.remove('active');
}

cookiesBtn.addEventListener('click', () =>{
    cookiesCtn.classList.add('active');
    cookiesOpacity.classList.add('active');

    localStorage.setItem('cookies-aceptadas', true);
});


function changeCss () {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("#up");
    this.scrollY > 600 ? navElement.classList.add('active') : navElement.classList.remove('active');
    }
    window.addEventListener("scroll", changeCss , false);

//MODAL

function myFunction() {
    var x, i;
    var card; 
    console.log(card)
    x = document.querySelectorAll(".card");
    for (i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            this.classList.toggle('active');
        };               
    }
}
myFunction();

//FORMULARIO

function otherFunction() {
    var x, i;
    var form; 
    x = document.querySelectorAll(".form-ctn__block");
    for (i = 0; i < x.length; i++) {
        x[i].onclick = function() {
            this.classList.add('color');
        };               
    }
}
otherFunction();
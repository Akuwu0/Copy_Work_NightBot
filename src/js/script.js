// declaracion de elemntos
const imgLogin = document.getElementById('imgLogin');
const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const cookie = document.getElementById('cookie');
const modal = document.getElementById('modal');

// carga la imagen del login y el index(register)
const cragarImgLogin = () => {
    let num = Math.floor(Math.random()*3)+1;
    imgLogin.src+='./assets/images/bg-login'+num+'.jpg';
}

// boolean para saber si esta abierto el menu
let desplegado = false;
// funcion para desplegar menu
const abrirNav = event => {
    if(event.target.nodeName == "I"){
        desplegado = true;
        nav.classList.remove('hidden');
        nav.classList.remove('sticky');
        nav.classList.add('fixed');
        nav.classList.add('z-10');
    }
    
};

// funcion para cerrar menu
const cerrarNav = () => {
    if(desplegado){
        desplegado = false;
        nav.classList.add('hidden');
        nav.classList.add('sticky');
        nav.classList.remove('fixed');
        nav.classList.remove('z-10');
    }
};

// para cuando aumnetas la resolucion con el menu desplegado.
const cambioVistaNav = () => {
    if(window.innerWidth >= 1024 && desplegado) cerrarNav(); 
};

// para registrar que has aceptados las cookies
const aceptarCookies = () => {
    localStorage.setItem('cookieAccept', true);
    cargarCookies();
}

// cargar modal de cookies
const cargarCookies = () => {
    if(localStorage.getItem('cookieAccept'))
        modal.classList.add('hidden');
}

// eventos
document.addEventListener('DOMContentLoaded', cragarImgLogin);
document.addEventListener('DOMContentLoaded', cargarCookies);
navBtn.addEventListener('click', abrirNav);
main.addEventListener('click', cerrarNav);
window.addEventListener('resize', cambioVistaNav);
cookie.addEventListener('click', aceptarCookies)


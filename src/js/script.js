const imgLogin = document.getElementById('imgLogin');
const navBtn = document.getElementById('navBtn');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const cookie = document.getElementById('cookie');
const modal = document.getElementById('modal');


const cragarImgLogin = () => {
    let num = Math.floor(Math.random()*3)+1;
    imgLogin.src='./assets/images/bg-login'+num+'.jpg';
}

let desplegado = false;
const abrirNav = event => {
    if(event.target.nodeName == "I"){
        desplegado = true;
        nav.classList.remove('hidden');
        nav.classList.remove('sticky');
        nav.classList.add('fixed');
        nav.classList.add('z-10');
    }
    
};

const cerrarNav = () => {
    if(desplegado){
        desplegado = false;
        nav.classList.add('hidden');
        nav.classList.add('sticky');
        nav.classList.remove('fixed');
        nav.classList.remove('z-10');
    }
};

const cambioVistaNav = () => {
    if(window.innerWidth >= 1024 && desplegado) cerrarNav(); 
};

const aceptarCookies = () => {
    localStorage.setItem('cookieAccept', true);
    cargarCookies();
}

const cargarCookies = () => {
    if(localStorage.getItem('cookieAccept'))
        modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', cragarImgLogin);
document.addEventListener('DOMContentLoaded', cargarCookies);
navBtn.addEventListener('click', abrirNav);
main.addEventListener('click', cerrarNav);
window.addEventListener('resize', cambioVistaNav);
cookie.addEventListener('click', aceptarCookies)


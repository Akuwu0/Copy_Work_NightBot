const imgLogin = document.getElementById('imgLogin');

const cragarImgLogin = () => {
    let num = Math.floor(Math.random()*3)+1;
    imgLogin.src='./assets/images/bg-login'+num+'.jpg';
}



document.addEventListener('DOMContentLoaded', cragarImgLogin);
const form = document.getElementById('form');
const usuInput = document.getElementById('usu');
const passInput = document.getElementById('pass');
const error = document.getElementById('error');

// validacion nombre de usuario
const usuValid = (usuario) => {
    const caracteresProhibidos = /[!@#$%^&*(),.?":{}|<>]/;
    if (usuario.length > 20 || usuario.length < 2) {
        return false;
    }
    if (usuario.includes(' ')) {
        return false;
    }
    return usuario.match(caracteresProhibidos) === null; 
};

// validacion contraseña
const passValid = (contraseña) => {
    const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return contraseña.match(regexContraseña) !== null;
};
// evento y mensaje de error ddel form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!usuValid(usuInput.value.trim())) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'El nombre de usuario no es válido.';
    } else if (!passValid(passInput.value.trim())) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'La contraseña no es válida.';
    } else {
        form.submit();
    }
});

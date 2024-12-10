const form = document.getElementById('form');
const usuInput = document.getElementById('usu');
const emailInput = document.getElementById('mail');
const passInput = document.getElementById('pass');
const pass2Input = document.getElementById('pass2');
const error = document.getElementById('error');

// comprobar email
const mailValid = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.match(regexCorreo) !== null;
};

// comprobar contraseña
const passValid = (contraseña) => {
    const regexContraseña = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return contraseña.match(regexContraseña) !== null;
};

// comprobar nombre usuario
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

// evento y mensaje de error ddel form
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if (!usuValid(usuInput.value.trim())) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'El nombre de usuario no es válido. Máximo 20 caracteres, minimo 2 y sin caracteres especiales.';
    } else if (!mailValid(emailInput.value.trim())) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'Por favor, ingresa un correo electrónico válido.';
    } else if (!passValid(passInput.value.trim())) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'La contraseña debe tener entre 8 y 16 caracteres, incluir mayúsculas, minúsculas, un número y un carácter especial.';
    } else if (pass2Input.value.trim() === '') {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'Por favor, confirma tu contraseña.';
    } else if (passInput.value !== pass2Input.value) {
        error.classList.remove('hidden');
        error.firstElementChild.textContent = 'Las contraseñas no coinciden.';
    } else {
        form.submit();
    }
});

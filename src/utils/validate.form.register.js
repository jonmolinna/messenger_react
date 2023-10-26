const validateFormRegister = (form) => {
    const errors = {};
    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (!form.name.trim()) {
        errors.name = 'Ingrese un nombre';
    }
    if (form.name.length <= 3) {
        errors.name = 'El nombre debe tener mas de tres caracteres';
    }
    if (!nameRegex.test(form.name)) {
        errors.name = 'El nombre solo acepta letras y espacios';
    }

    if (!form.username.trim()) {
        errors.username = 'Ingrese un usuario';
    }
    if (form.username.length <= 4) {
        errors.username = "El usuario debe tener mas de cuatro caracteres";
    }
    if (!usernameRegex.test(form.username)) {
        errors.username = 'Ingrese un usuario valido';
    }

    if (!form.password) {
        errors.password = 'Ingrese una contraseña';
    }
    if (form.password !== form.confirm_password) {
        errors.password = 'Las contraseñas no son iguales';
    }

    return errors;
};

export default validateFormRegister;
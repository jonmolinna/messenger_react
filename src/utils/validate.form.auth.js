const validateFormAuth = (form) => {
    const errors = {};
    if (!form.username.trim()) {
        errors.username = 'Ingrese un usuario';
    }

    if (!form.password) {
        errors.password = 'Ingrese una contraseña';
    }

    return errors;
};

export default validateFormAuth;
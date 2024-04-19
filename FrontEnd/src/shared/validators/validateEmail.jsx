

export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
}

export const emailValidateMessage = 'el email no es valido. porfa ingresa un email correcto';
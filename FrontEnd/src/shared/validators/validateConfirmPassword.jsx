
export const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
}

export const validateConfirmPasswordMessage = 'las contraseñas no coinciden';
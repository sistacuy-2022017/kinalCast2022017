

export const validatePassword = (  password ) => {
  regex = /^\S{6,12}$/;

  return regex.test(password);
}


export const validatePasswordmessage = 'la contraseña debe de tener entre 6 y 12 caracteres';

import i18next from 'i18next';

i18next.addResources('es', 'Registration', {
  registration: 'Creación de cuenta',
  registrationExplanation: 'Ingrese los siguientes datos para crear su cuenta',
  firstName: 'Nombre',
  firstNamePlaceholder: 'Ingrese su nombre',
  lastName: 'Apellido',
  lastNamePlaceholder: 'Ingrese su apellido',
  email: 'E-mail',
  emailPlaceholder: 'Ingrese su e-mail',
  password: 'Contraseña',
  passwordPlaceholder: 'Ingrese su contraseña',
  confirmPassword: 'Confirmar contraseña',
  confirmPasswordPlaceholder: 'Vuelva a ingresar su contraseña',
  required: '* Requerido',
  submit: 'Enviar',
  emailFormatError: 'El formato es inválido',
  requiredError: 'El campo es requerido',
  confirmPasswordError: 'Las contraseñas no coinciden',
  passwordLengthError: 'Debe tener al menos {{amount}} caracteres'
});

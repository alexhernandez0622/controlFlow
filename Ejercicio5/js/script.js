// Pide al usuario que ingrese una contraseña y verifica si es la contraseña correcta.


// Definir la contraseña correcta como constante
const contraseñaCorrecta = 'secreto123';

// Solicitar al usuario que ingrese una contraseña
let contraseñaIngresada = prompt('Ingresa tu contraseña:');

// Verificar si la contraseña ingresada es correcta
if (contraseñaIngresada === contraseñaCorrecta) {
  // Mostrar mensaje de éxito si la contraseña es correcta
  Swal.fire('Contraseña Correcta', '¡Bienvenido!', 'success');
} else {
  // Mostrar mensaje de error si la contraseña es incorrecta
  Swal.fire('Error', 'Contraseña incorrecta.', 'error');
}


// Pide al usuario que ingrese su nombre y muestra un mensaje de bienvenida.


// Solicitar al usuario que ingrese su nombre
let nombre = prompt("Ingresa tu nombre:");

// Verificar si el usuario ingresó un nombre
if (nombre) {
  // Mostrar un mensaje de bienvenida utilizando SweetAlert2
  Swal.fire({
    title: '¡Bienvenido!',
    text: `Hola, ${nombre}!`,
    icon: 'success',
  });
} else {
  // Mostrar un mensaje de error si el usuario no ingresó un nombre válido
  Swal.fire({
    title: 'Error',
    text: 'Debes ingresar un nombre válido',
    icon: 'error',
  });
}


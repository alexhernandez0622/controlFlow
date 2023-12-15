//  Solicita al usuario su edad y muestra un mensaje indicando si
// es mayor de edad.

// Solicitar al usuario que ingrese su edad
let edad = prompt("Ingresa tu edad:");

// Verificar si la edad ingresada es mayor o igual a 18
if (edad >= 18) {
  // Mostrar un mensaje de éxito para mayores de edad
  Swal.fire({
    title: 'Mayor de Edad',
    text: '¡Eres mayor de edad!',
    icon: 'success',
  });
} else {
  // Mostrar un mensaje informativo para menores de edad
  Swal.fire({
    title: 'Menor de Edad',
    text: 'Eres menor de edad.',
    icon: 'info',
  });
}


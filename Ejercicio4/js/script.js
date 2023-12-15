//  Simula un proceso de carga y muestra un mensaje de éxito al completarse.

// Mostrar un cuadro de diálogo de carga utilizando SweetAlert2
Swal.fire({
  title: 'Cargando...',
  timer: 2000,  // Temporizador de 2000 milisegundos (2 segundos)
  timerProgressBar: true,  // Mostrar una barra de progreso durante el temporizador
  showConfirmButton: false,  // No mostrar el botón de confirmación durante la carga
}).then(() => {
  // Mostrar un mensaje de éxito después de completar la carga
  Swal.fire('¡Listo!', 'Proceso completado con éxito.', 'success');
});

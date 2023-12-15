// Pregunta al usuario si desea recibir notificaciones y muestra un mensaje de acuerdo o desacuerdo.


// Mostrar una pregunta utilizando SweetAlert2//
Swal.fire({
  title: '¿Quieres recibir notificaciones?',
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Sí',
  cancelButtonText: 'No',
}).then((result) => {
  // Verificar la respuesta del usuario
  if (result.isConfirmed) {
    // Mostrar mensaje de acuerdo
    Swal.fire('¡Acuerdo!', 'Recibirás notificaciones.', 'success');
  } else {
    // Mostrar mensaje de desacuerdo
    Swal.fire('¡Desacuerdo!', 'No recibirás notificaciones.', 'info');
  }
});

  
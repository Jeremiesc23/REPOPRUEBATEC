import Swal from 'sweetalert2';
// Función para confirmar la edición de una entidad con SweetAlert2
export const confirmEdit = (entityName) => {
  return Swal.fire({
    title: `¿Estás seguro de que deseas editar esta ${entityName}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'CANCELAR'
  }).then((result) => {
    return result.isConfirmed;
  });
};

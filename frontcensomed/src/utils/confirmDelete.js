import Swal from 'sweetalert2';

// Función para confirmar la eliminación de una entidad con SweetAlert2
export const confirmDelete = (entityName) => {
  return Swal.fire({
    title: `¿Estás seguro de que deseas eliminar esta ${entityName}?`,
    text: "¡Esta acción no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
};

import Swal from 'sweetalert2';

export default ({ icon, title, confirmButtonText, text = '', footer = '' }) =>
  Swal.fire({
    icon,
    title,
    text,
    footer,
    confirmButtonText,
    confirmButtonColor: '#92278f',
  });

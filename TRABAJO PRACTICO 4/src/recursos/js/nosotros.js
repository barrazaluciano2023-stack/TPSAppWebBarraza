const formulario = document.getElementById('formulario-contacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const mensajeValidacion = document.getElementById('mensaje-validacion');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();
   if (nombre.value === '' || email.value === '' || mensaje.value === '') {

    mensajeValidacion.textContent = 'Por favor, complete todos los campos';

    } else {

        mensajeValidacion.textContent = '¡Gracias por contactarte con Planta tu Sueño!';
        nombre.value = '';
        email.value = '';
        mensaje.value = '';

    }
});
import productos from './productos.js';
const contenedor = document.getElementById('productos-destacados');
const productosDestacados = productos.filter(producto =>
    producto.id === 1 ||
    producto.id === 2 ||
    producto.id === 6 ||
    producto.id === 5
);
let contenido = '';

productosDestacados.forEach(producto => {

    contenido +=
        '<article>' +
            '<img src="recursos/img/' + producto.imagen + '" alt="' + producto.nombre + '">' +
            '<h3>' + producto.nombre + '</h3>' +
            '<p>$' + producto.precio + '</p>' +
        '</article>';

});

contenedor.innerHTML = contenido;
import productos from './productos.js';

const contenedor = document.getElementById('contenedor-productos');

const botonesCategorias = document.querySelectorAll('[data-categoria]');



let contenido = '';

productos.forEach(producto => {

    contenido +=
        '<article>' +
            '<img src="recursos/img/' + producto.imagen + '" alt="' + producto.nombre + '">' +
            '<h3>' + producto.nombre + '</h3>' +
            '<p>$' + producto.precio + '</p>' +
            '<button class="agregar-carrito">+</button>' +
        '</article>';

});

contenedor.innerHTML = contenido;


botonesCategorias.forEach(boton => {

    boton.addEventListener('click', () => {

        const categoriaSeleccionada = boton.dataset.categoria.toLowerCase();

        const productosFiltrados = productos.filter(producto =>
            producto.categoria.toLowerCase() === categoriaSeleccionada
        );

        let contenidoFiltrado = '';

        productosFiltrados.forEach(producto => {

            contenidoFiltrado +=
                '<article>' +
                    '<img src="recursos/img/' + producto.imagen + '" alt="' + producto.nombre + '">' +
                    '<h3>' + producto.nombre + '</h3>' +
                    '<p>$' + producto.precio + '</p>' +
                    '<button class="agregar-carrito">+</button>' +
                '</article>';

        });

        contenedor.innerHTML = contenidoFiltrado;

    });

});
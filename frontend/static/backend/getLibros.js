$(document).ready(function() {
    $.ajax({
        url: '/api/v1/libro/',  // URL del endpoint de libros
        type: 'GET',             // Método HTTP GET para obtener datos
        success: function(data) {
            // Limpiar el contenido actual de la lista de reproducción
            $('#playlist').empty();
            
            // Iterar sobre los datos recibidos y construir la lista de libros dinámicamente
            data.forEach(function(libro) {
                // Construir el elemento de botón para el libro
                var libroBtn = $('<div class="btn-group" style="width: 100%;" role="group">' +
                                    '<a href="' + libro.ruta + '" class="btn btn-outline-success text-start mb-3" style="width: 100%;" data-src="' + libro.ruta + '">' + libro.titulo + '</a>' +
                                    '<a class="btn btn-success text-start mb-3">' +
                                        '<i class="fas fa-star"></i>' +
                                    '</a>' +
                                '</div>');
                
                // Agregar elemento de botón del libro a la lista de reproducción
                $('#playlist').append(libroBtn);
            });
        },
        error: function(xhr, status, error) {
            // Manejao d errores
            console.error(error);
        }
    });
});

$(document).ready(function() {
    // Define la URL estática en una variable JavaScript
    var staticUrl = "{% static 'media/musica/' %}";
  
    $.ajax({
        url: '/api/v1/cancion/',  // URL del endpoint de cancion
        type: 'GET',             // Método HTTP GET para obtener datos
        success: function(data) {
            // Limpiar el contenido actual de la lista de reproducción
            $('#playlist').empty();
            
            // Iterar sobre los datos recibidos y construir la lista de canciones dinámicamente
            data.forEach(function(cancion) {
                // Construir el elemento de botón para la canción
                var cancionBtn = $('<div class="btn-group" style="width: 100%;" role="group">' +
                                    '<a class="btn btn-outline-success text-start mb-3" style="width: 100%;" data-src="' + cancion.ruta + '">' + cancion.titulo + '</a>' +
                                    // '<a href="{% static ' + "'" + 'media/musica/' + cancion.ruta + "'" +  ' %}' + '" class="btn btn-success text-start mb-3" download>' +
                                    //     '<i class="fas fa-star"></i>' +
                                    // '</a>'+                                
                                  '</div>');
                                '</a>'
                // Agregar elemento de botón de la canción a la lista de reproducción
                $('#playlist').append(cancionBtn);
            });
        },
        error: function(xhr, status, error) {
            // Manejo de errores
            console.error(error);
        }
    });
  });
  
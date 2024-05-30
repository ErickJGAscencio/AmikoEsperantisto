$(document).ready(function() {
  $.ajax({
      url: '/api/v1/libro/',  // URL del endpoint de libros
      type: 'GET',             // Método HTTP GET para obtener datos
      success: function(data) {
          // Manejar la respuesta exitosa
          console.log(data);  // Aquí puedes hacer lo que quieras con los datos recibidos
      },
      error: function(xhr, status, error) {
          // Manejar errores
          console.error(error);  // Por ejemplo, puedes imprimir el error en la consola
      }
  });
});
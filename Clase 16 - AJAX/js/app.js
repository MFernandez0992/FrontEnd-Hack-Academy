var app = new Vue({
    el: '#app',
    data: {
        usuarioBuscoPelicula: false,
        busqueda: '',
        resultado: null,

    }
});


// Función para buscar las peliculas en la api
function buscarPelicula(){

    // Declaro la dirección de la api con la extensión de busqueda dentro de una variable url
    var url = "https://private.omdbapi.com/?apikey=bef9c583&t=" + app.busqueda;
    console.log('Petición a ' + url),

    // Con ajax me comunico con el servicio con la variable url y la respuesta de la api la guardo dentro de la variable 'resultado' de la app
    $.ajax({

        url: url,
        success: function (respuestaServidor) {
            app.resultado = respuestaServidor;
        }
    });
}

// Le agrego un evento click al botón que llame la función buscarPelicula
$('#botonBusqueda').on('click', function() {
    app.usuarioBuscoPelicula = true;
    buscarPelicula();
    
})
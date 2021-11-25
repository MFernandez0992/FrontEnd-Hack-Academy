// // Creo una variable dónde alojar el selector del H1
// var titulo = $('h1');

// // Le agrego la clase
// titulo.addClass('destacar-titulo');

// // Le quito la clase
// titulo.removeClass('destacar-titulo');

// // Cambiarle el color con css
// titulo.css('color', 'green');
// titulo.css('background-color', 'black');

// // Cambiarle el contenido
// titulo.text('Hola Developer');

// // Oculta el elemento
// titulo.hide();

// // Muestra el elemento
// titulo.show();

// // Escuchar un botón y cambiarle la clase cuando hago click sobre él
// var titulo = $('h1');

// $('.btn').on('click', function() {
//     titulo.addClass('destacar-titulo');
// })


$('a.btn').on('click', function(){
    var nombre = $('#nombre').val();
    if(nombre === 'María'){
        alert('Bienvenida María');
    }else(
        alert('Lo siento, no te conozco')
    )
})
// Guardo los elementos que voy a utilizar en variables
var boton = $('a');
var titulo = $('h1');
var parrafo = $('p');

// Le agrego una función al botón que cuando se clickeé tome los valores de los input y los aplique en el texto
boton.on('click', function(){
    // Guardo los valores de los input dentro de variables
    var valorTitulo = $('#titulo').val();

    if (valorTitulo !== "") {
        titulo.text(valorTitulo);
    }

    var valorParrafo = $('#parrafo').val();

    if (valorParrafo !== "") {
        parrafo.text(valorParrafo);
    }

    var tamanoTitulo = $('#numero').val();
    if(tamanoTitulo !== 0){
        titulo.css('font-size', tamanoTitulo + 'px');
    }
})
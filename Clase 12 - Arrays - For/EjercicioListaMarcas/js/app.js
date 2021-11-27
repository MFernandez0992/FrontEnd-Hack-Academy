// Declaro el array que contenerá las marcas
var marcas = [];
var mostrar = $('#mostrar');
var eliminar = $('#eliminar');
var agregar = $('#agregar');


/* Pruebo que los botones esten bien lanzando alertas por cada variable asignada a un botón

$(agregar).on("click", function () {
    alert("Hola");
 });

*/

// Función que agregará las nuevas marcas al array
$(agregar).on("click", function () {
    // Extraigo el valor del input y lo almaceno en una variable
    var valorInput = $('input').val();

    // Declaro una variable que funcione para crear un nuevo li
    var nuevoItem = document.createElement('li');

    // Agrego el nuevo item al array y lo muestro en la lista
    $(nuevoItem).html(valorInput);
	marcas.push($("#listaMarcas").append(nuevoItem));
});

// Función para eliminar la última marca
$(eliminar).on('click', function() {
    marcas.pop($('#listaMarcas').remove());
});
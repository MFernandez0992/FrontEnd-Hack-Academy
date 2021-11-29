// Declaro el array que contenerá las marcas
var marcas = ["BMW", "Peugeot", "Chevrolet", "Subaru", "Nissan"];
var mostrar = $('#mostrar');
var eliminar = $('#eliminar');
var agregar = $('#agregar');


/* Pruebo que los botones esten bien lanzando alertas por cada variable asignada a un botón

$(agregar).on("click", function () {
    alert("Hola");
 });

*/

// Función que mostrará las marcas del array
$(mostrar).on("click", function mostrarMarcas() {
    for (let i = 0; i < marcas.length; i++) {
        // console.log(marcas[i]); Pruebo que la función y el for estén funcionando
        
        // Inserto en el ul las marcas, cada una con su li
        $("#listaMarcas").append('<li>' + marcas[i] + '</li>');

        // Muestro y oculto las marcas PENDIENTE
        //$("#listaMarcas").toggle();
    }
})

// Función que agregará las nuevas marcas al array
$(agregar).on("click", function () {
    // Extraigo el valor del input y lo almaceno en una variable
    var valorInput = $('input').val();

    // Declaro una variable que funcione para crear un nuevo li
    var nuevoItem = document.createElement('li');

    // Valido que el valor no exista y lo agrego al array

    if (valorInput !== "") {
        $(nuevoItem).html(valorInput);
        marcas.push(valorInput).append(nuevoItem);

    }
});

// Función para eliminar la última marca
$(eliminar).on('click', function() {
    marcas.pop();
});


// PENDIENTE
/* 
    - Que botón mostrar no repite el ul
    - Que eliminar item refresque el ul
    - Que agregar marca refresque el ul
    - Que no se puedan agregar marcas repetidas, si se intenta agregar alguna lanzar un msj de alerta
    - Agregar campo de texto que permita eliminar la marca que desee, si no existe en el array lanzar msj
*/
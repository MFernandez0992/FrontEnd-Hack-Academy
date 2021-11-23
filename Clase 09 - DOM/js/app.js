// Creo una función que busque un elemento en el DOM y le cambie la fuente


function buscarTitulo() {

    // Creo una variable donde se alojará el elemento que quiero modificar
    var titulo = document.querySelector('h1');

    // Si JS encuentra el elemento en el DOM el if retornará true modificando el elemento
    if(titulo){
        titulo.style.fontFamily = 'Times New Roman';
    }else{
        // Si no lo encuentra devolverá false alertando que no existe el elemento
        alert('No se encontró H1');
    }
}

buscarTitulo();
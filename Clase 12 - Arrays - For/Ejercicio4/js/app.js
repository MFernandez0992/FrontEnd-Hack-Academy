var nombres = ['Bruno', 'Juana', 'María', 'Pepe'];


function estaElemento(lista, item) {
    for(var i = 0; i < lista.length; i++){
        var elementoActual = lista[i];

        if(item === elementoActual){
            return true;
        }
    }
}

// Recorrer la lista usando un for
// Por cada item de la lista voy a hacer:
// - Me fijo si este elemento es igual al que estoy buscando
// - Si es igual: Return True
// - Si es falso: Return False



estaElemento(nombres, 'Pepe');
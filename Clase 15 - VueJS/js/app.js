// 1. Incluir el CDN de Vue.js
// <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>

// 2. Crear una instancia del objeto Vue
var app = new Vue({
    //el: "elemento del dom que será la raíz de la aplicación"
    el: '#app',
    data: {
        // Toda la información qué queremos que se muestre en la aplicación
        mensaje: "Este es un mensaje desde Vue",
        frutas: [{
            nombre: 'Durazno',
            color: 'Rojo'
        },
        {
            nombre: 'Naranja',
            color: 'naranja'
        }],

        direccion: 'http://www.apple.com',
        titulo: 'Web de Apple'
    }
});
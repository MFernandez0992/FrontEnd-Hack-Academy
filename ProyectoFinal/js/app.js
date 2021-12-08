// Mi código JavaScript:
var app = new Vue({
    el: '#sales',
    data: {
        exchangeRateUyu: 0,
        years: [],
        brands: [],
        models: [],
        condition: []
    }
    
});

// Guardo las URLs de las api dentro de variables
var exchange = 'https://ha.edu.uy/api/rates';
var listBrands = 'https://ha.edu.uy/api/brands';

// Carga de Tipo de Cambio:
$.ajax({
    url: exchange,
    success: function (response) {
        app.exchangeRateUyu = response.uyu;
    }
});

// Utilizo un ciclo for que generará los años y los inyectará dentro del array years
for (var i = 2021; i >= 1900; i--){
    app.years.push(i);
}

// Cargo las marcas desde la api, guardo los valores de la api dentro de la variable responde de la function
$.ajax({
    url: listBrands,
    success: function (response) {
        app.brands = response;
    }
});
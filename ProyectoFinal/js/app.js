// Mi código JavaScript:
var app = new Vue({
    el: '#sales',
    data: {
        exchangeRateUyu: 0,
        years: [],
        brands: [],
        models: [],
        condition: [],
        selectedBrand: "",
        selectedModel: "",
        selectedYear: "",
        selectedStatus: "",
        cars: []
    }
    
});

// Guardo las URLs de las api dentro de variables
var exchange = 'https://ha.edu.uy/api/rates';
var listBrands = 'https://ha.edu.uy/api/brands';
// var apiModels = 'https://ha.edu.uy/api/models?brand=' + selectedBrand;

// Carga de Tipo de Cambio:
$.ajax({
    url: exchange,
    success: function (responseExchange) {
        app.exchangeRateUyu = responseExchange.uyu;
    }
});

// Utilizo un ciclo for que generará los años y los inyectará dentro del array years
for (var i = 2021; i >= 1900; i--){
    app.years.push(i);
}

// Cargo las marcas desde la api, guardo los valores de la api dentro de la variable responde de la function
$.ajax({
    url: listBrands,
    success: function (responseBrands) {
        app.brands = responseBrands;
    }
});

// Cargo los modelos dependiendo de la marca seleccionada, con el evento change detecto cuando el usuario de click a una marca y llamo a la api de los modelos
$('#select-brand').on('change', function(){
    $.ajax({
        url: 'https://ha.edu.uy/api/models?brand=' + app.selectedBrand,
        success: function(responseModels) {
            app.models = responseModels;
        }
    })

})

$('#btn-filter').on('click', function() {
    var year = app.selectedYear;
    var modelSelected = app.selectedModel;
    var brandSelected = app.selectedBrand;
    var status = app.selectedStatus;

    console.log(year, modelSelected, brandSelected, status);

    $.ajax({
        url: `https://ha.edu.uy/api/cars?year=${year}&brand=${brandSelected}&model=${modelSelected}&status=${status}`,
        success: function (cars) {
            app.cars = cars;
        }
    })
})
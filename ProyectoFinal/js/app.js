var app = new Vue({
    el: "#sales",
    data: {
      exchangeRateUyu: 0,
      years: [],
      brands: [],
      models: [],
      brandSelected: "",
      modelSelected: "",
      yearSelected: "",
      statusSelected: "",
      cars: [],
      elUsuarioHizoPrimeraBusqueda: false,
      currencyDollar: true
    },
    filters: {
        filtroMiles: function(valorOriginal){
            return valorOriginal.toLocaleString('es-UY');
        },
    }
  });
  // Carga de Tipo de Cambio:
  var exchange = "https://ha.edu.uy/api/rates";
  $.ajax({
    url: exchange,
    success: function (response) {
      app.exchangeRateUyu = response.uyu;
    },
  });
  // Carga de años
  for (var i = 2021; i >= 1900; i--) {
    app.years.push(i);
  }
  // Carga de las marcas
  $.ajax({
    url: "https://ha.edu.uy/api/brands",
    success: function (brands) {
      app.brands = brands;
    },
  });
  // Cambio de marca
  $("#select-brand").on("change", function () {
    $.ajax({
      url: "https://ha.edu.uy/api/models?brand=" + app.brandSelected,
      success: function (models) {
        app.models = models;
      },
    });
  });

  // Función reusable para cargar autos
  function cargarAutos(){
    var year = app.yearSelected;
    var model = app.modelSelected;
    var brand = app.brandSelected;
    var status = app.statusSelected;
    console.log(year, brand, model, status);
    $.ajax({
      url:
        "https://ha.edu.uy/api/cars?year=" +
        year +
        "&brand=" +
        brand +
        "&model=" +
        model +
        "&status=" +
        status,
      success: function (carsFromApi) {
        app.cars = carsFromApi;
        app.elUsuarioHizoPrimeraBusqueda = true;
      },
    });
  }

  // Llamo a la f cargarAutos para que se muestren los autos cuando la página se cargue
//  cargarAutos();

  // Cuando haga click en Filtrar, llamo a cargarAutos()
  $("#btn-filter").on("click", function () {
    cargarAutos();
  });

    // Cuando haga click en cambiar moneda, 
    $('#btn-currency').on('click', function(){
        //console.log('click')
        app.currencyDollar = !app.currencyDollar;
    })
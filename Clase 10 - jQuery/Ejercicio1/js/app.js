$(document).ready(function() {

    // Detectar si el body tiene la clase backgroundGreen, y si la tiene al apretar el botón cambiarla por backgroundRed
    $("button").on("click", function(){
        if ($('body').hasClass('backgroundGreen')) {
            $('body').removeClass('backgroundGreen');
            $('body').addClass("backgroundRed");
        }else{
            $('body').removeClass('backgroundRed');
            $('body').addClass('backgroundGreen');
        }
    });
});
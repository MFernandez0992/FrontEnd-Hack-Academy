// Vamos a imprimir en el DOM la información de la persona

// Tomar el H1 a partir del ID
// Agregar el texto (nombre y apellido)

$('#nombre').text(`${person.firstname} ${person.lastname}`);

// Email y fecha de nacimiento
$('#birth').text(person.birth_date);
$('#email').text(person.email);

// Nacionalidades
// Recorremos el array

// Por cada nacionalidad
 // Obtenemos el <ul> y Agregamos un <li>

for (i = 0; i < person.nationality.length; i++){
    $('#nationality').append('<li>' + person.nationality[i] + '</li>');
}

// Aplicando la imagen

$('img').attr('src', person.image);

// Lista de cursos
// Recorrer el array de cursos, por cada item hago...
    // p que tenga todo

for(var item of person.education){

    // Forma larga de concatenar
    var concatenacion = ('<p>' + item.course  + " " + item.institution + '<br>' + item.year + '</p>')

    // String Literal - forma corta
    var stringLiteral = `<p>${item.course} - <strong>${item.institution}</strong> <br> <strong>${item.year}</strong> </p>`;

    $('#cajaCursos').append(stringLiteral);

}

// Lista de trabajos
person.jobs.forEach(function(item) {
   var job = `<p>${item.title} - <strong>${item.company}</strong><br>${item.year_from} - ${item.year_to}</p>`;
   
   $('#cajaJobs').append(job);
});
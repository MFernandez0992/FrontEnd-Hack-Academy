// Definir una función llamada esPar que reciba como parámetro un número cualquiera y retorne true si es par, y false si es impar

function esPar(numero){
    if(numero % 2 == 0){
        console.log('El número es par')
    }else{
        console.log('El número es impar')
    }
}

esPar(4);

function maximoDeDos(number1, number2) {
    if (number1 > number2) {
        console.log(number1);
    } else{
        console.log(number2);
    } if (number1 === number2) {
        console.log(number1);
    }
}

maximoDeDos(8, 8);

function validarNombre(nombre) {
    if ((typeof nombre === "") && (nombre !== "")) {
        console.log("Nombre es un string")
    } else {
        console.log("Nombre no es un string o está vacío")
    }
}

validarNombre("1");

function validarAnioNacimiento(anio) {
    if ((anio > 1920) &&(anio <= 2021)) {
        console.log("El año es entre 1920 y 2021");
    } else {
        console.log("El año es menor a 1920 o mayor a 2021");
    }
}

validarAnioNacimiento(1929);


function sueldoLiquido(sueldoBruto) {
    var descuento = 0.8;
    return sueldoBruto * descuento;
}

sueldoLiquido(15000);

// Si quiero guardar el valor en una variable
var salario = sueldoLiquido(20000);
console.log(salario);

// Horario de negocio

function horarioNegocio(horas) {
    if (horas < 9) {
        alert("El negocio está abierto")
    } else if (horas <0) {
        alert("Es muy temprano")
    } else if(horas > 18){
        alert('Es muy tarde')
    } 
}

horarioNegocio(23);
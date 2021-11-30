// Definir una función llamada duplicar que reciba como parámetro un número cualquiera y retorne su doble.

function duplicar(numero){
    console.log(numero * 2);
}

duplicar(6);


// Definir una función llamada mostrarNombre que reciba como parámetro dos strings cualesquiera y despliegue un alert conteniendo el texto:“Tu nombre es María y tu apellido es Pérez”(suponiendo que los argumentos ingresados fueron “María” y “Pérez”).

function mostrarNombre(nombre, apellido){
    alert(`Tu nombre es ${nombre} y tu apellido es ${apellido}`);
}

mostrarNombre("Matías", "Fernández");


// Definir una función llamada numeroAleatorio que retorne un número cualquiera entre 1 y 100. Se puede usar la función Math.random (ya definida en JavaScript).

function numeroAleatorio(){
    console.log(Math.round(Math.random()));
}
numeroAleatorio(); // PENDIENTE


// Definir una función llamada esPar que reciba como parámetro un número cualquiera y retorne true si es par, y false si es impar

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

esPar();


// Definir una función llamada maximoDeDos que reciba como argumentos dos números cualesquiera y retorne el mayor. Si los números son iguales retornar dicho número.Nota: No utilizar la función Math.max(...).

function maximoDeDos(num1, num2){
    if(num1 > num2){
        console.log(num1);
    }else{
        console.log(num2)
    }if(num1 === num2){
        console.log("Los números son iguales" + num1);
    }
}

maximoDeDos(2, 7);


// Definir una función llamada validarNombre que reciba como parámetro un string cualquiera y retorne true si el argumento recibido efectivamente es un string y además no coincida con el string vacío “”. En caso contrario, retornar false.

function validarNombre(nombre) {
    if ((typeof nombre === "") && (nombre !== "")) {
        console.log("Nombre es un string")
    } else {
        console.log("Nombre no es un string o está vacío")
    }
}

validarNombre("Hola");


/* Definir una función llamada validarAnioNacimiento que reciba como parámetro un número cualquiera y retorne true si:
- el argumento recibido efectivamente es un número y
- el argumento recibido es mayor a 1920 y
- el argumento recibido es menor o igual a 2021.
En caso contrario, la función debe retornar false.
*/

function validarAnioNacimiento(anio) {
    if(anio > 1920 && anio < 2021){
        return true;
    }else{
        return false;
    }
}

validarAnioNacimiento(1929);


// Calcular el sueldo líquido descontando impuestos
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
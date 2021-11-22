// Definir una función llamada esPar que reciba como parámetro un número cualquiera y retorne true si es par, y false si es impar

function esPar(numero){
    if(numero % 2 == 0){
        console.log('El número es par')
    }else{
        console.log('El número es impar')
    }
}

esPar(4);
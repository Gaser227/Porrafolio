/*
Funciones
*/
function mensaje(){
    console.log(msj);
}
var msj = "Mensaje de Funcion"
mensaje(msj);

function sumar(a, b, c = 3){
    return a + b + c;
}
var result = sumar(4, 5, 8);
console.log(result);
var result1 = sumar(3, 7);
console.log(result1);
/*
Funciones Recursivas
*/
var factorial = function(n){
    if((n == 0) || (n ==1)){
        return 1;
    }else{
        return(n * factorial(n-1));
    }
}
console.log(factorial(5));

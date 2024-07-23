//Imprimir numeros 1 al 5 sin usar numeros

var numeros = ["","","","",""];
var numero = [];
var i = numero.length;

do{
    i++;
    console.log("Numero "+i);
    var impresionNumeros = document.getElementById("impresionNumeros");
    impresionNumeros.innerHTML += "<p>Numero: " + i + "</p>";
}while(i<numeros.length);
var mensaje = document.getElementById("impresionNumeros");
    impresionNumeros.innerHTML += "<br><p>Observe en Consola para confirmacion</p>";

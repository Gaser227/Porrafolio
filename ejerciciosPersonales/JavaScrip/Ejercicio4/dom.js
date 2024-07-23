console.log(document.title);
document.title = "JavaScrip"
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1');
console.log(h1);
h1[0].innerHTML = "Prueba"
console.log(h1);

var boton = document.getElementById('Buton');
console.log(boton);

boton.addEventListener("click", Mensaje);

function Mensaje(){
   alert("Mensaje");
}
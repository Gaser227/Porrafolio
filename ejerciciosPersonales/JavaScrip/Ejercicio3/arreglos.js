/*
Arreglos
*/
var nombres = ["Juan", "Pedro", "Ana", "Maria"];
var verduras = new Array("Jitomate", "Tomate", "Lechuga", "Zanahoria");

console.log(nombres[2]);
console.log(verduras[3]);

console.log(nombres.length);

for(var i = 0; i <= nombres.length - 1; i++){
    console.log("El nombre",nombres[i], "Tiene el lugar", i);
}
verduras.forEach(function(elemento, indice){
    console.log(elemento, indice);
});

console.log(nombres);
nombres.push("Javier");
console.log(nombres);

console.log(verduras);
verduras.push("Papa");
console.log(verduras);

var pos = nombres.indexOf("Juan");
console.log(pos);
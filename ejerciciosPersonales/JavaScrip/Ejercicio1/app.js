/*
Basico
*/
console.log("Hello Word");
console.log(10+10);

var nombre = "Juan";
console.log("El nombre es: ", nombre);
console.log(typeof(nombre));

var edad = 25;
console.log("Su edad es: ", edad);
console.log(typeof(edad));

var sueldo = 2500;
console.log("Su sueldo es de: ", sueldo, "Que pobre");
console.log(typeof(sueldo));

/*
Operadores Matematicos
*/
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, anioAna, anioMaria, anioActual;

edadAna = 23;
edadMaria = 20;
anioActual = 2022;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

anioAna = anioActual - edadAna;
anioMaria = anioActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("El año en que nacio Ana es: ", anioAna);
console.log("El año en que nacio Maria es: ", anioMaria);
console.log(anioActual*5);
console.log(anioActual/2);

var mayorAna = edadAna > edadMaria;
console.log(mayorAna);

console.log(edadAna++);
console.log(++edadAna);

var a = 11;
var b = 5;

var c = a % 5;
console.log(c);
a += b;
console.log(a);
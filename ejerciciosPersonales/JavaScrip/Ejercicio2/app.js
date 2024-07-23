/*
If..Else
*/
var nombre = "Juan";
var casado = false;
var edad = 18;

if (casado == true){
    console.log("Papa casada");
}else if(casado == false){
    console.log("Papa soltera");
}else{
    console.log("ERROR");
}

if (edad < 12){
    console.log("Es un niño");
}else if(edad > 11 && edad <18){
    console.log("Es un adolecente");
}else if(edad > 17 && edad < 60){
    console.log("Es un adulto");
}else if(edad > 60){
    console.log("Es un anciano");
}else{
    console.log("ERROR");
}
/*
Switch
*/
var mes = 12;

switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
         console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break; 
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break; 
    case 9:
        console.log("Septiembre");
        break; 
    case 10:
        console.log("Octubre");
        break; 
    case 11:
        console.log("Noviembre");
        break; 
    case 12:
        console.log("Diciembre");
        break; 
    default:
        console.log("Mes no encontrado");
}
/*
Sentencia For
*/
for(var i = 1; i <= 10; i++){
    console.log("El valor de i es: ", i);
}
/*
Sentencia While y Do..While
*/
var j = 1;
while(j <= 10){
    console.log("El valor de j es: ", j);
    j++;
}
console.log("El valor de j es: ", j);

j = 10;
do{
    console.log("El valor de j2 es: ", j);
    j--;
}while(j >= 1)
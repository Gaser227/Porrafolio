"use strict";
/*let estudiasteJavascript : boolean =true

if (estudiasteJavascript){
    alert("Puedes chambear")
} else{
    alert("Pongase a estudiar")
} */
/*
let interMiami : number = 11
let dallasFC : number = 11
let goleador : number =1
let jugador : boolean = true

let palabras : string = "Me emocione al verlo jugar"

function juego(equipo1: number, equipo2: number, jugador: boolean): void{
    let motivo:string = ''
    if(jugador){
        equipo1 += goleador
        motivo = " Porque juega el crak"
    }

    if(equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
    if(equipo1 == equipo2) console.log("Empatan")
    if(equipo1 < equipo2) console.log("Gana FC Dallas")
}

juego(interMiami,dallasFC, jugador)
*/
/*let arreglo1: number[] = [1,2,3,4,5]
let arreglo2: string[] = ["HTML","CSS","PHP","C"]

arreglo2[0].indexOf("HTML")*/
/*type Programador = {
    nombre: string,
    edad: number,
    tecnologias: string[],
    tomaMate?: boolean | null
}*/
/*interface Programador{
    nombre: string,
    edad: number,
    tecnologias: string[],
    tomaMate: boolean | null
}

let dev ={
    nombre: "Gaser",
    edad: 22,
    tecnologias: ["AJAX","JQUery","JSon"],
    tomaMate: true
}
let dev2/*:Programador*/ /* ={
    nombre: "Alfredo",
    edad: 32,
    tecnologias: ["C","PHP","JAVA"],
    tomaMate: null,
    apellido: "Juarez",
    recibido: false
}*/
/*dev = {
    nombre: "Navarro",
    edad: 22,
    tecnologias: ["C","PHP"],
    tomaMate: false
}*/
/*function enviarCurriculum( programador : Programador){
    console.log (`Este curriculum es de: ${programador.nombre}`)
}

console.log(dev)
enviarCurriculum(dev2)*/
/*class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarCine(){
        console.log(` La pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre:string,protagonistas: string[],actores: string[]){
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }

}

const pelicula = new Pelicula("Barbie",["Barbie","Ken"],["Margot Robie","Ryan Goslin"])
const pelicula2 = new Pelicula("Oppenheimer",["Oppenheimer","Lewis"],["Cillian Murphy","Robert Downey Jr."])
pelicula2.proyectarCine()
console.log(pelicula2)*/
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteos = new Sorteo('Navarro');
sorteos.setTicket(4);
console.log(sorteos.sortear());

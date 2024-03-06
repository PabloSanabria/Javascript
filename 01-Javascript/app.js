
function obtenerAleatorio(){
    return Math.random();
}

console.log(obtenerAleatorio());

function crearObjeto(){
    return {
        nombre : "Pablo",
        apellido: "Sanabria",
    }
}
console.log(crearObjeto());
var persona = crearObjeto();

function crearFuncion(){
    
    return function (persona){
        console.log("Funcion 1 creada por " + persona.nombre);

        return function(){
            console.log("Funcion 2 creada");
        }
    }
}

var nuevaFuncion = crearFuncion();
var segFuncion = nuevaFuncion(persona);
segFuncion();

//-----------------
function Persona(nombre,apellido,edad ){
    this.nombre = nombre;
    this.apellido =  apellido;
    this.edad = edad;
    this.imprimirPersona = function(){
        return nombre +" "+ apellido +". Edad: "+ edad;
    }
}

var persona = new Persona("Pablo","Sanabria",32);

console.log(persona.imprimirPersona())
//----El Sr de los anillos

function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.estado = function(jugadorObjetivo){
        console.log(this);
        console.log(jugadorObjetivo);
    }

    this.tirarFlecha = function(jugadorObjetivo){
        if(jugadorObjetivo.pv>40){
            jugadorObjetivo.pv -= 40;
            this.estado(jugadorObjetivo);
        }else{
            jugadorObjetivo.pv = 0;
            console.info(jugadorObjetivo.nombre + " eliminado"); 
        }
        
    }
}

Jugador.prototype.curar = function( jugadorObjetivo){
    if(this.sp>=40){
        this.sp -= 40;
        jugadorObjetivo.pv +=  20;
    }else{
        console.info(this.nombre + " no tiene mas SPs")
    }
    this.estado(jugadorObjetivo);
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf, legolas)
gandalf.curar(legolas);

//-----Funciones anonimas
(function(){
    console.log("anonima")
})();

//----Sobrecarga operadores
function crearProducto(nombre, precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0;
    console.log( nombre + " " + precio) ;
}
function crearProducto100(nombre){
    crearProducto(nombre,100);
}
function crearProductoCamisa(precio){
    crearProducto("Camisa",precio);
}
crearProducto();
crearProducto100("Lapiz");
crearProductoCamisa("150");

//--Polimorfismo

function determinarDato(a){
    if (a === undefined)
        console.log("parametro undefined");
    if ( typeof a === "number")
        console.log("parametro numerico");
    if ( typeof a === "string")
        console.log("parametro texto");
    if ( typeof a === "object"){
        //console.log("parametro objeto, puede ser cualquier tipo");
        //se puede consultar por el tipo de objeto cusomizado por ejemplo Persona
        if (a instanceof Persona)
            console.log("parametro objeto del tipo Persona");
        if (a instanceof Number)
            console.log("parametro objeto del tipo numerico");
        if (a instanceof String)
            console.log("parametro objeto del tipo texto");
        if (a instanceof Boolean)
            console.log("parametro objeto del tipo bool");
    }
}
var b = new Number(3);
determinarDato(persona);
//--contexto funciones
(function () {
  console.log("naci!");
})();
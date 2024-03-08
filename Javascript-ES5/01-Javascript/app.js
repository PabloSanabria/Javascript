
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

//-----------
var fecha =  new Date(2024,3,6);
console.log(fecha);

Date.prototype.sumarDias = function(dias){
    this.setDate(this.getDate() + dias);
    return this;
}

console.log(fecha.sumarDias(10));
//----
//i = insensible
//g = todas las apariciones
//m = multilinea para "Enters"

var reg1 = RegExp("a");
var reg2 = /m/i;

var texto = "Hola Mundo";

var arr = texto.match(reg2);

console.log(arr);
//----------
try { //el try necesita un catch o un finally
    throw new Error("error manejado");//forzamos al catch

} catch (e) {//es opcional
    console.log(e);
    registroError(e.message);
    
}
finally{//si no se utiliza catch debe ir finally 
    console.log("finally");
}
function registroError(e){
    var diaError = new Date();
    console.log("Se registró un error: ",e ," a las ", diaError.getTime() );
}
//--

function crearCookie(nombre, valor){
    //Ojo con los caracteres por ejemplo el punto y coma
    //para eso escapamos los valores para cambiar los valores que puedan llegar a dar problemas por su version HTML
    var hoy =  new Date();
    hoy.setMonth(hoy.getMonth()+1);//vencimiento en un mes
    valor = escape(valor);
    //var valorOriginal = unescape(escape(valor)); Inversa
    document.cookie=nombre +"="+ valor+";expires"+hoy.toUTCString()+";";
}

function borrarCookie(nombre){
    var hoy =  new Date();
    hoy.setMonth(hoy.getMonth()-1);//vencimiento en un mes
    
    document.cookie=nombre +"="+"x;expires"+hoy.toUTCString()+";";
    
}

function getCookie(nombre){
    var cookies = document.cookie;
    var cookiesArr = cookie.split("; ");
    console.log(cookiesArr);
    return undefined;
    
    }
getCookie("nombre");
//crearCookie("nombre","Pablo");
//borrarCookie("nombre","Pablo");
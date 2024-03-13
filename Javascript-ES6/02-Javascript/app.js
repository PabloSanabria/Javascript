
const IMPUESTO_PAIS = 21;
//console.log(IMPUESTO_PAIS);
//console.log(mensaje);
//---
var saludo = "Hola Mundo";
//console.log(saludo.startsWith("H"));
//console.log(saludo.includes("mu"));
//console.log(saludo.repeat(2));
//------------------
function etiqueta(literales, ...substituciones){
    //console.log(arguments);
    //console.log(literales);
    //console.log(substituciones);
    let resultado = "";
    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];        
    }
    return resultado;
}

let unidades = 5, 
    costo = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo} pesos`; 

//console.log(mensaje);
//--
//--colocar siempre primeros los parametros obligatorios y luego los opcionales
function saludar( arr_alumnos, ...masAlumnos){
    
    //console.log(arguments);
    //console.log(arr_alumnos, masAlumnos);
}

let arr_alumnos = ["Pablo"];

let arr_alumnos2 = saludar(arr_alumnos, "Pedro", "Vilma", "Sara");

let numeros = [1,2,84,3,4,55];
let max = Math.max(...numeros);
//console.log(max);

let persona = {
    nombre: "Pablo",
    apellido:"Sanabria",
    edad: 37,
}

let persona2 = {
    nombre: "Pablo",
    apellido:"Sanabria",
    edad: 37,
    direccion:"jvg 2314",
    ciudad: "San miguel"
}

persona2.nombre = "Leonardo";
persona2.edad = 41;

persona = {...persona2, ...persona};

// console.log(persona);
// console.log(persona2);
function Persona(nombre){
    this.nombre = nombre;
}

var persona1 = new Persona("Fernando");
var noPersona = Persona("Fernando");
// console.log(persona1);
// console.log(noPersona);
// if(this instanceof Persona){
//     //inicializar o asignar valores al objeto
//     this.nombre = nombre;
// }
// else
//     throw new Error("Esta funcion debe ser utilizada con el new");

var miFuncion1 = function(valor){
    return valor;
}

let miFuncion2 = valor => valor;

let sumar = (num1,num2) => num1+num2;
let saludarP = () => "Hola Mundo desde Fn Arrow";

let saludarPersona = nombre=>{
    let saluda = `Hola ${nombre}`;
    return saluda;
}

let obtenerLibro = id => ({
    id: 3,
    nombre: "Harry Poter"
})

let saludo3 = (nombre => `Hola desde fn arrow anonima ${nombre}`)()
// console.log(miFuncion1());
// console.log(miFuncion2());
// console.log(sumar(1,5));
//console.log(saludarPersona("Pablito"));
//console.log(obtenerLibro(3));
//console.log(saludo3);
//----------
function crearPersona(nombre, apellido, edad){
    return {
        nombre,
        apellido,
        edad
    }
} 
var pers = crearPersona("Pablo","Sanabria",37); 
console.log(pers);

var obj =  {
    numero:10,
    nombre:"Pabl010",
    //Antes
    //imprimirNombre: function(){...
    imprimirNombre(){
        console.log(this.nombre);
    }
}

//obj.imprimirNombre();

var subfijo = " nombre";
var banda = {
    ["1banda " + subfijo]: "Qpersonaje",
    ["2banda " + subfijo]: "Lakonga" 
};

console.log(banda["1banda nombre"]);
console.log(banda["2banda" + subfijo]);
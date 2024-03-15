let primerNombre = Symbol();
let segundoNombre = Symbol('Segundo Nombre');//le podemos poner una alias

let persona = {
    [segundoNombre]: "Ezequiel" 
};

persona[primerNombre] = 'Fernando';
//console.log(persona[primerNombre], persona[segundoNombre]);
//console.log(segundoNombre);
///-----------
//verificar que el simbolo no hay sido creado 
let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";
// console.log(objeto[userID], userID)

//hacer referencia al simbolo creado
let userID2 = Symbol.for("userID");//este nuevo simbolo apunta a la referencia del anterior

//obtener el id de un simbolo
let idSimbolo = Symbol.for("id unico");
// console.log(Symbol.keyFor(idSimbolo));

let id3 = Symbol("id unico"); //si creamos unpo nuevo con el mismo id 
// console.log(id3 === idSimbolo);//son distintos 
// console.log(id3,idSimbolo);
//---
let items = new Set();
//ignora valores repetidos
items.add(10);
items.add(10);
items.add(11);
items.add(7);
items.add("7");//esto si lo permite xq internamente es un object

//console.log(items, items.size);
let items2 = new Set([1,2,3,4,5,7]);
//console.log(items2.has(7));//devuelve true o false
//borrar elementos
//console.log(items2, items2.size);
items2.delete(3);//compara con el contenido, no con la posicion, si no existe lo ignora
//console.log(items2, items2.size);
items2.clear();//elimina todos los elementos
//console.log(items2);
//recorrer sets
let personas = new Set(["Fernand", "PAblo", "Susana"]);
personas.forEach( function(valor, llave, setOriginal){
    //console.log(valor, llave, setOriginal);
}
);
//Convertir Set en array
let numeros = [1,2,3,2,4,7,5,6,7];
let setNumeros = new Set(numeros);
//console.log(setNumeros);
let arrNumeros = [...setNumeros];
//console.log(arrNumeros);
//Ej elimnacion de duplicados en array
function eliminarDuplicados(items){
    return [... new Set(items)];
}

//console.log(eliminarDuplicados(numeros));
//--Maps
let mapa = new Map();
mapa.set("nombre","Fernando");
mapa.set("edad",31);
mapa.set("apellido");// si no colocamos valor por defecto queda undefined
//console.log(mapa);
//console.log(mapa.get("nombre"));//obtener valor pasando key
//console.log(mapa.has("nombre"));//verifica existencia devuelve true o false
mapa.delete("nombre");//borra todo el par
mapa.clear("nombre");//elimina todos los valores del mapa
//console.log(mapa);
//--inicializar por defecto
let mapa2 = new Map([ ["nombre","Fernando"],["edad",31] ]);
//console.log(mapa2);
//recorrer un mapa
// mapa2.forEach(function(valor,llave, mapaOrigen){
//     console.log(`LLave: ${llave}, valor: ${valor}`);
//     console.log(mapaOrigen);
// })
//mapa2.forEach( (valor, llave) => console.log(`LLave: ${llave}, valor: ${valor}`)) 

//--Ciclo For Of 
//let arrNuevo = [41,72,93,52,24,77,95,46,7];
for( let i of mapa2){
    console.log(i);
}
let mapa3 = new Map();
console.log(mapa3);
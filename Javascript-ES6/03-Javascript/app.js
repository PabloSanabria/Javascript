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
console.log(objeto[userID], userID)

//hacer referencia al simbolo creado
let userID2 = Symbol.for("userID");//este nuevo simbolo apunta a la referencia del anterior

//obtener el id de un simbolo
let idSimbolo = Symbol.for("id unico");
console.log(Symbol.keyFor(idSimbolo));

let id3 = Symbol("id unico"); //si creamos unpo nuevo con el mismo id 
console.log(id3 === idSimbolo);//son distintos 
console.log(id3,idSimbolo);

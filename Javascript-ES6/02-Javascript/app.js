let gato = {
    sonido(){
        console.log("Miau");
    },
    chillido(){
        console.log("MIAU!!!");
    }
}

let perro = {
    sonido(){
        console.log("Guau");
    }
}

let angora  = Object.create(gato);
// console.log(Object.getPrototypeOf(angora) === gato);
// angora.sonido();
// angora.chillido();
// Object.setPrototypeOf(angora,perro);
// console.log(Object.getPrototypeOf(angora) === gato);
// angora.sonido();
// angora.chillido();
//--------------SUPER
let persona = {
    saludar(){
        return "HOla!, ";
    }
};

let amigo = {
    saludar(){
        //antes
        //return Object.getPrototypeOf(this).saludar(this) + "Saludos!!!";
        //ahora
        return super.saludar() + "Saludos!!!"; 
    }
};

Object.setPrototypeOf(amigo, persona);
//console.log(amigo.saludar());
let ajustes = {
    nombre: "Pablo Sanabria",
    email: "pablosanab@hotmail.com",
    facebook: "p.s.Face.com.77",
    premium: true
}
//se desestructura con el nombre que se le define en el objeto, no importa el orden
//let {nombre,email,facebook,premium} = ajustes;
//se puede modificar el nombre de la nueva variable/objeto al momento de la asignacion 
//let {premium:dePago,nombre,email,facebook} = ajustes;
//tambien se pueden declarar nuevas variable
//let {premium:dePago,nombre,email,facebook, twitter = "Pablo.x.86"} = ajustes;
//tambien se pueden declarar nuevas variable con parametros opcionales si twitter existiera 
//y tuviera valor en el objeto ajustes se mostraria ese valor
let {premium:dePago,nombre,email,facebook, twitter:cuentaTwi = "Pablo.x.86"} = ajustes;

//console.log(dePago, nombre, cuentaTwi);
///----
let autoguardado = {
    archivo: "index.js",
    cursor: {
        linea:7,
        columna:16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo:{
        subNodo:{
            cursor:{
                linea:11,
                columna:11
            }     
        }
    }
};
//primer objeto
//let {cursor}= autoguardado;
//3er objeto
// let {ultimoArchivo:{cursor:ultimoArchivo2}} = autoguardado;
// console.log(ultimoArchivo2);
//4to objeto
let {otroNodo:{subNodo:{cursor:ultimoArchivo2}}} = autoguardado;
// console.log(ultimoArchivo2);
//otra manera
let superNodo = autoguardado.otroNodo.subNodo.cursor;
// console.log(superNodo);
//-----
let frutas = ["banana", "uva", "frutilla"];
//es en orden secuencial
let [fruta1,fruta2] = frutas;
console.log(fruta1,fruta2);
//si quiero solo la 3era fruta
let [,,fruta3] = frutas;
console.log(fruta3);
//se puede sobreescibir valores 
let otraFruta = "manzana";
//aqui otraFruta toma el valor de la primera posicion del arr frutas
[otraFruta] = frutas;
console.log(otraFruta);
//-------------
//permite cambiar valores en variables
let a = 1;
let b = 2;
let temp;

[a,b]=[b,a];

console.log(a);
console.log(b);
//-----------
let colores1 = ["rojo", ["verde","amarillo"],"morado", "naranja"];

let [color1, [color2] ] = colores1;
 console.log(color1,color2);

 let colores2 = ["rojo", "verde","amarillo","morado", "naranja"];
 //hacer que los colores luego del primero se guarden en otro arreglo
 //el valor rest(...) para desdestructuracion solo sirve para arreglos no para objetos
 let [colorPrincipal, ...demasColores] = colores2;
 console.log(colorPrincipal);
 console.log(demasColores);
 //-----
 function crearjugador(nickname, 
    { hp, sp, clase }= {hp:100,sp:50,clase:"Mago"}
){
    //opciones = opciones || {};

    // let hp = opciones.hp,
    // sp = opciones.sp,
    // clase = opciones.clase;
    console.log(nickname,hp,sp,clase);
    //codigo para crear el jugador...
 }

 crearjugador("Pipino",{ 
        hp: 100, sp: 50, clase: "Mago"
});
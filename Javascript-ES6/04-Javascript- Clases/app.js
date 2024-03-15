let nombreMetodo = "gritarNombre";

class Persona {
    constructor(nombre){
        this.nombre =  nombre;
    }

    decirNombre(){
        //console.log(this.nombre);
    }   

    [nombreMetodo](){
        console.log(this.nombre.toUpperCase());
    }

    static crear(nombre){
        return new Persona(nombre);
    }
}

let yo = Persona.crear("Pablito");

let fernado = new Persona("Fernando");
fernado.decirNombre();
//console.log(typeof Persona);//devuelve function en vez de class por alguna razon desconocida

function creadorClases(definicionClase){
    return new definicionClase();
}

let objeto =  creadorClases( class {
    constructor(){
        this.nombre = undefined;
        this.edad = 30;
    }
    saludar(){
        console.log("Holis!");
    }
});

objeto.saludar();

// class Cuadrado {
//     constructor(alto){
//         this.lado  = lado;
//     }
//     getArea(){
//         return this.lado * this.lado;
//     }
// };

// function imprimirCuadrado(cuadrado){
//     if(!(cuadrado instanceof Cuadrado)){
//         //console.log("El parametro enviado no es un cuadrado");
//         return
//     }
//     //else
//         //console.log(cuadrado.getArea());
// }

//let mesa = new Cuadrado(10);
//imprimirCuadrado(mesa);
//console.log(yo);
//--Herencia
class Rectangulo {
    constructor(alto,largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }
}

let rectangulo = new Rectangulo(3,2);
console.log(rectangulo.getArea());

class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto,alto);
    }
    getArea(){
        return "Cuadrado " + (this.alto * this.alto);//ejecuta esto
        //return super.getArea();//ejecuta el metodo del padre
    }
   
}
let cuadrado = new Cuadrado(3);
console.log(cuadrado.getArea());
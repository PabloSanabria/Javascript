function evento(arg){
    console.log("Evento disparado");
    console.log(arg);//codigo de la tecla
    //muestra:
    //KeyboardEvent {isTrusted: true, key: 'e', code: 'KeyE', location: 0, ctrlKey: false, …}
    //isTrusted: true quiere decir que el evento lo disparó el usuario
    //console.log(arg.x, arg.y);//posicion en pantalla de donde se hace click en un boton por ejemplo
}

var elemento = document.getElementById("txtDemo");
elemento.addEventListener("keypress",evento);
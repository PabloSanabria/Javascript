function tareaAsincrona(){
    
    let promesa = new Promise((resolve,reject)=>{

        setTimeout(function(){
            console.log("Proceso Asincrono Terminado");
            reject();
        },1300);
    });

    return promesa;
}

//es opcional el reject
tareaAsincrona().then( function(){
    console.log("resolve: Todo Ok");
},
function(){
    console.error("reject: Todo Mal");
});;

console.log("Codigo Secuencial");
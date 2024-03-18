const getNombre = async()=>{
    return new Promise( (resolve,reject)=>{
        setTimeout(() => {
            resolve("Pablito");
        }, 3000);
    });
}

//una funcion aync no necesariamente debe tener un await
const saludo = async ()=>{
    //para que funcione el await tiene q estar en una funcion async
    const nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then( mensaje => {
    console.log(mensaje);
});
// getNombre().then(nombre => {

// });
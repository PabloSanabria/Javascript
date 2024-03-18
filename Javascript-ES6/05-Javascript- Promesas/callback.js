const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: "Fernando",
        id
    };

    //simulamos error
    if(id === 20){
        callback(`El usuario con el id ${id} no existe`);
    }
    else{//callback( err, usuario);
        callback( null, usuario);
    }

};
//getUsuarioById(id, (callback)
getUsuarioById(5, (err, usuario)=>{

    if(err){
        return console.log(err);
    }
    console.log('Usuario de BD ', usuario);
   
});
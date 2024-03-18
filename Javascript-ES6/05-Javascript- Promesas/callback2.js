const empleados = [
    {
        id:1,
        nombre: "Pablo"
    },
    {
        id:2,
        nombre: "Ezequiel"
    },
    {
        id:3,
        nombre: "Juan"
    }
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }    
];

const getEmpleado= (id, callback)=>{
    const empleadoDB = empleados.find( empleado => empleado.id === id);

    if(!empleadoDB){
        callback(`No existe el empleado con id ${id}`);
    }
    else{
        callback(null, empleadoDB);
    }
};
//crear una fn getSalario, que reciba el id de la persona y que si la persona no existe el mensaje será
//err: no se encontró un salario para el empleado {nombre del empleado} 
//Si existe: la salida será un objeto 
// {
//     nombre: "Fernando",
//     salario: 1000,
//     id: 1
// }
const getSalario = (empleado, callback) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    }
    else{
        callback(null, {
           nombre: empleado.nombre,
            salario : salarioDB.salario,
            id: empleado.id
        });
    }
}

//uso
getEmpleado(3, (err, empleado)=>{
    if(err){
        return console.error(err);
    }

    getSalario(empleado,  (err, resp)=>{
        if(err){
            return console.error(err);
        }

        console.log(`El salario del empleado ${resp.nombre} es de ${resp.salario}`);
    });
    //console.log("Empleado ", empleado);
}); 

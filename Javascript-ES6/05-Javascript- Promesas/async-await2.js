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

//definicion
const getEmpleado= async (id) => {
    const empleadoDB = empleados.find( empleado => empleado.id === id);
    
    if(!empleadoDB){
       throw new Error(`No existe el empleado con id ${id}`); //reject();
    }
    else{
        return empleadoDB;
    }    
};

const getSalario = async (empleado) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id);
    
    if(!salarioDB){
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    }
    else{
        return {
            nombre: empleado.nombre,
            salario : salarioDB.salario,
            id: empleado.id
        };
    }
}

const getInformacion = async (id)=>{
    const empleado =  await getEmpleado(id);
    const resp =  await getSalario(empleado);

    return `El empleado ${empleado.nombre} tiene un salario de ${resp.salario} pesos`;
};

getInformacion(2)
.then(console.log)
.catch(console.log);
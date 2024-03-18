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
const getEmpleado= (id) => {
    return new Promise((resolve,reject)=>{
        const empleadoDB = empleados.find( empleado => empleado.id === id);

        if(!empleadoDB){
            reject(`No existe el empleado con id ${id}`);
        }
        else{
            resolve(empleadoDB);
        }
    });
};

const getSalario = (empleado) => {
    return new Promise((resolve,reject)=>{
        const salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        }
        else{
            resolve({
            nombre: empleado.nombre,
                salario : salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

//uso
// getEmpleado(1).then( empleado => {

//     // getSalario(empleado).then( resp => {
//     //     console.log(resp);        
//     // });
//     //para no estar haceindo lo mismo que con los callbacks
//     return getSalario(empleado);
// })
// .then( resp => console.log(resp))
// .catch( err => console.log(err));
//mejorando el codigo
getEmpleado(5)
    .then( getSalario)
    .then( console.log)
.catch(console.log);


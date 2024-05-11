
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element)=>{
    
    const renderValue = (value)=>{
        element.innerHTML  = value;
    }
 
    Promise.race([
        slowPromise(),
        fastPromise(),
        mediumPromise(),
        fastFastPromise(),
        slowPromise()
    ])
    .then(renderValue)
    .catch('Error en el Race');
}

const slowPromise = ()=> new Promise( resolve => {
    setTimeout(() => {
        resolve(`Slow Promise`);
    }, 2000); 
})

const mediumPromise = ()=> new Promise( resolve => {
    setTimeout(() => {
        resolve(`Medium Promise`);
    }, 1500); 
})

const fastPromise = ()=> new Promise( resolve => {
    setTimeout(() => {
        resolve(`Fast Promise`);
    }, 1000); 
})

const fastFastPromise = ()=> new Promise( resolve => {
    setTimeout(() => {
        resolve(`Fast Fast Promise`);
    }, 500); 
})
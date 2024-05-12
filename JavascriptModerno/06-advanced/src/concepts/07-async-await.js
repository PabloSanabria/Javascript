import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element)=>{
        
    try {
        console.time('Start');
    
        //Esto demora mas 
    //    const value1 = await mediumPromise();
    //    const value2 = await fastPromise();
    //    const value3 = await fastFastPromise();
    
    //Esto demora menos
    const [value1, value2, value3] = await Promise.all([
        mediumPromise(),
        fastPromise(),
        fastFastPromise()
    ]);

       element.innerHTML = `
       1- ${ value1 } </br>
       2- ${ value2 } </br>
       3- ${ value3 } </br>
       `; 

       console.timeEnd('Start');
    } catch (error) {
        element.innerHTML = error; 
    }
}

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
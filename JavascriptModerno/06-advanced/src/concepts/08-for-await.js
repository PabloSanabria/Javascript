import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id1 = '5d86371f97c29d020f1e1f6d'; 

    //const hero = await getHeroAsync(id1);

    if(await getHeroAsync(id1)){
        element.innerHTML = `Existe el héroe: ${hero.name}` ;
        return;
    }
    element.innerHTML = 'No existe el héroe';
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}
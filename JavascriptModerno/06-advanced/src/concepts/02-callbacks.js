import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element)=>{
    
    const id = '5d86371f1efebc31def272e2';
    findHero(id, (error, heroe)=>{

        if(error)
        {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = heroe.name;
    });
}
/**
 * 
 * @param {String} heroId 
 * @param {(error: String|null, heroe:Object)=>void} callback 
 */
const findHero = (heroId, callback) =>{

    //heroes es una lista(json) invocada
    const heroeCallback = heroes.find( hero => hero.id === heroId);

    if(!heroeCallback){
        callback(`Heroe with id ${heroId} doesn´t exist`);
        return;
    }
    callback(null, heroeCallback);
}
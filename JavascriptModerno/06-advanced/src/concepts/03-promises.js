import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element)=>{
    
    const renderHero = (hero)=>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2)=>{
        element.innerHTML = `${hero1.name} - ${hero2.name}`;
    }

    const renderError = (error)=>{
        element.innerHTML = error;
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';
    
    //findHero(id1).then(superHero => renderHero(superHero));
    //findHero(id1).then(renderHero)//mejora de codigo
    //.catch(renderError);
    
    //Callback hell o promise hell
    // findHero(id1)
    //     .then( (hero1)=>{
    //         findHero(id2).
    //             then(hero2 => renderTwoHeros(hero1,hero2))
    //             .catch(renderError);
    //     })
    //     .catch(renderError);
    
    //cadena de promesas
    // let hero1;
    // findHero(id1)
    // .then(hero=>{
    //     hero1 = hero;
    //     return findHero(id2);
    // }).then(hero2=>{
    //     renderTwoHeros(hero1,hero2);
    // })
    // .catch(renderError);

    //Promise.all
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1,hero2])=>renderTwoHeros(hero1,hero2))
    .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id)=>{
    
    return new Promise( (resolve, reject)=>{
        const hero = heroes.find(hero=>hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });    
}
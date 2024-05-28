

const state = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Aquaman'
    },
    {
        id: 3,
        name: 'Spiderman'
    },
    {
        id: 4,
        name: 'Superman'
    },    
]

const index = 1;
const newName = 'Green Lantern';

// const state2 = state.map((hero, i)=>{
//     if(i === index)
//         hero.name = newName;

//     return {...hero}
//     //return hero
// });

const newState = state.with(index, {
    //...state[index],
    ...state.at(index),
    name: newName
 });

state[0].name = 'Volcan Negro';

console.table(newState);
console.log('El ultimo es: ',  newState.at(-1));


const superHeros = [
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

const superHerosCopy = structuredClone(superHeros);

superHerosCopy[0].name = 'Green Lantern' ;

console.table(superHeros)
console.table(superHerosCopy)
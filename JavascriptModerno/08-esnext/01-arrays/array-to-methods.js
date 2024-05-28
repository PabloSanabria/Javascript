const heroes = ['Batman', 'Aquaman', 'Spiderman','Superman'];
//const heroesCopy = heroes;

//heroes.sort();
//heroes.reverse();
//const heroesCopy = heroes.toSorted();

//const heroesCopy = heroes.toReversed();

//const deleteHero = heroes.splice(0,1,'Green Lantern');

const deletedHero = heroes.toSpliced(0,2,'Green Lantern');

console.table(heroes);
//console.table(heroesCopy);
//console.table(deleteHero);
console.table(deletedHero);
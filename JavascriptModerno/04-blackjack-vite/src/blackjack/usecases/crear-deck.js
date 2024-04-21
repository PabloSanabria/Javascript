import _ from 'underscore';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta    EJEMPLO: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales EJEMPLO: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new console.error('Los tipos de carta son obligatorios');    
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new console.error('Los tipos especiales son obligatorios');    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}

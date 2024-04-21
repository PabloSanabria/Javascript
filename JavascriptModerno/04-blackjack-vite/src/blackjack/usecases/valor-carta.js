/**
 * Formatea el valor de la carta
 * @param {String} carta 
 * @returns {Number} retorna el valor de una carta con su formato correspondiente
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
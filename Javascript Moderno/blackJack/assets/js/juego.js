let deck = [];
const tipos =['C','D','H','S'];
const especiales =['A','J','Q','K'];

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

let puntosJugador = 0, puntosComputadora = 0;

const smalls = document.querySelectorAll('small');

const crearDeck = ()=>{
    deck=[];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }        
    }

    for (const tipo of tipos) {
      for (const esp of especiales) {
          deck.push(esp + tipo);
      }
    } 
    console.log(deck);
    deck = _.shuffle(deck);
    
    return deck;
}


crearDeck(); 

const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas en la baraja';
    }
    const carta = deck.pop(); 

    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    
    return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10 
            : valor * 1;
}

const turnoComputadora = (puntosMinimos) => {
    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        smalls[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);
        if(puntosMinimos>21){    
            break;
        }
    }
    while((puntosComputadora<puntosMinimos) && (puntosMinimos<=21));
    
    setTimeout(() => {
        if(puntosComputadora===puntosMinimos)
        alert('Empate');
    puntosComputadora>21?alert('Jugador Win'):alert('Computadora Win'); 
    }, 50);
    
}

btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    smalls[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
//        console.warn('Perdiste no hay nadie peor que tu');        
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador===21){
        //console.info('Sos el mejor, tenes 21 puntos');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
    

});

btnDetener.addEventListener('click', ()=>{
    
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', ()=>{
    deck = crearDeck();
    puntosJugador, puntosComputadora = 0;
    smalls[0].innerText='0';
    smalls[1].innerText='0';
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnDetener.disabled = false;
    btnPedir.disabled = false;
});
//const valor = valorCarta('QD'); 
//console.log(valor);
//pedirCarta();

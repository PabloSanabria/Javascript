
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatoFuncComponent = (element)=>{
    
    // const generator = myFirstGeneratorFunction();

    // console.log(generator.next());// valor 1
    // console.log(generator.next());// valor 2
    // console.log(generator.next());// valor 3
    // console.log(generator.next());// ultimo valor
    // console.log(generator.next());// undefined
    // console.log(generator.next());// undefined
    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = ()=> {
        const {value} = genId.next(); 
        button.innerText = `Click numero ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator() {
    let currentId = 0;
    while(true)
        yield ++currentId;
}

function* myFirstGeneratorFunction() {
    
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
    
    return 'Ultimo valor';
}
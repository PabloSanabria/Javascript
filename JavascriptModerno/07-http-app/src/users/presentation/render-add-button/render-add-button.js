import { showModal } from '../render-modal/render-modal-js';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderAddButtons = ( element )=>{ 

    const fabButton =  document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener('click', ()=>{
        showModal();
    });
}
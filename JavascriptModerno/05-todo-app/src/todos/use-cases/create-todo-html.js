import { Todo } from "../models/todo.model";

export const createTodoHTML = (todo)=>{
    if(!todo) throw new Error('A TODO is required');

    const {done,description,id} = todo;

    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${done ? 'cheked':''}>
        <label>${description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    `;

    //<li class="${todo.done ? 'cheked':''}" data-id="abc">
    //</li
    const liElement =  document.createElement('li'); 
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);
    if(todo.done)
        liElement.classList.add('completed');

    return liElement;
}
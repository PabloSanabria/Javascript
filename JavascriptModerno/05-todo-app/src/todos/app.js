import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementIds = {
  ClearCompleted: ".clear-completed",
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  TodoFilters: ".filtro",
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIds.TodoList, todos);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
  const todoListUL = document.querySelector(ElementIds.TodoList);
  const clearCompletedButton = document.querySelector(
    ElementIds.ClearCompleted
  );
  const filtersLIs = document.querySelectorAll(ElementIds.TodoFilters);

  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  todoListUL.addEventListener("click", (event) => {
    const isDestroyElement = event.target.className === "destroy";

    const element = event.target.closest("[data-id]");
    if (isDestroyElement) todoStore.deleteTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  clearCompletedButton.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener("click", (element) => {
      filtersLIs.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "Todos":
            console.log(element.target.text);
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
            console.log(element.target.text);
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
            console.log(element.target.text);
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};

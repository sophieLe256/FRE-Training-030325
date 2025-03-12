// * ~~~~~~~~~~~~~~~~~~~~~~~ API ~~~~~~~~~~~~~~~~~~~~~~~
const API = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todoPath = "todos";

	const getTodos = () => {
		return fetch([baseUrl, todoPath].join("/")).then((response) =>
			response.json()
		);
	};

	const deleteTodo = (id) => {
		return fetch([baseUrl, todoPath, id].join("/")).then((response) =>
			response.json()
		);
	};

	return { getTodos, deleteTodo };
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domRef = {
		todocontainer: ".todolist-container",
	};

	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((todo) => {
			tmp += `
        <li>
					<span>${todo.id}-${todo.title}</span>
					<button class='btn' id='${todo.id}'>X</button>
				</li>
      `;
		});
		return tmp;
	};

	const render = (eleRef, tmp) => {
		eleRef.innerHTML = tmp;
	};

	return { render, domRef, createTmp};
})();

// * ~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {

  class State {
    #todolist = [];

    get todos() {
      return this.#todolist;
    }
    set todos(newtodos) {
      this.#todolist = newtodos;

      const todoContainer = document.querySelector(view.domRef.todocontainer);
      const tmp = view.createTmp(this.#todolist);
      view.render(todoContainer, tmp);
    }
  }

	return { ...api, State };
})(API, View);

// * ~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
  const state = new model.State();
  const todoContainer = document.querySelector(view.domRef.todocontainer);

  const init = () => {
    model.getTodos().then((todos) => {
      state.todos = todos.reverse();

		});
	};
  const deleteTodo = () => {
    todoContainer.addEventListener('click', e => {
      if (e.target.className === 'btn') {
        state.todos = state.todos.filter(todo => {
          return +todo.id !== +e.target.id;
        });
      }
    });
  }
  const bootstrap = () => {
    init();
    deleteTodo();
  }

	return { bootstrap };
})(Model, View);

Controller.bootstrap();

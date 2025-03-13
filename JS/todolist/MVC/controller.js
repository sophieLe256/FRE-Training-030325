import {View} from './view.js';
import {Model} from './model.js';

// * ~~~~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~~~~
export const Controller = ((model, view) => {
	const state = new model.State();
	const todoContainer = document.querySelector(
		view.domRef.todocontainer
	);

	const init = () => {
		model.getTodos().then((todos) => {
			state.todos = todos.reverse();
		});
	};
	const deleteTodo = () => {
		todoContainer.addEventListener("click", (e) => {
			if (e.target.className === "btn") {
				state.todos = state.todos.filter((todo) => {
					return +todo.id !== +e.target.id;
				});
				model.deleteTodo(e.target.id);
			}
		});
	};
	const addTodo = () => {
		const todoinput = document.querySelector(view.domRef.todoinput);

		todoinput.addEventListener("keyup", (e) => {
			if (e.code === "Enter" && !(e.target.value.trim() === "")) {
				const newTodo = new model.Todo(e.target.value);
				model.addTodo(newTodo).then(ntodo => {
          state.todos = [ntodo, ...state.todos];
        });
				e.target.value = "";
			}
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
	};

	return { bootstrap };
})(Model, View);

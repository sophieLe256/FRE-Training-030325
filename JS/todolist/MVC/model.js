import {API} from './api.js';
import {View} from './view.js';

// * ~~~~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~~~~
export const Model = ((api, view) => {
	class State {
		#todolist = [];
    #todoContainer = document.querySelector(
      view.domRef.todocontainer
    );

		get todos() {
			return this.#todolist;
		}
		set todos(newtodos) {
			this.#todolist = newtodos;

			const tmp = view.createTmp(this.#todolist);
			view.render(this.#todoContainer, tmp);
		}
	}
	class Todo {
		constructor(title) {
			this.userId = 67;
			this.title = title;
			this.completed = false;
		}
	}

	return { ...api, State, Todo };
})(API, View);

// * ~~~~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~~~~
export const View = (() => {
	const domRef = {
		todocontainer: ".todolist-container",
		todoinput: ".todolist-input",
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

	return { render, domRef, createTmp };
})();
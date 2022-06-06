import React from "react";

const ItemsCounter = ({ todosLength, todos, getTodos }) => {
	const putTodos = (arr) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alpalma95", {
			method: "PUT",
			body: JSON.stringify(arr),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.catch((err) => console.log(err.message));
	};

	const clearTodosHandler = () => {
		const filteredArray = [...todos].filter((x) => !x.done);
		if (!filteredArray.length) {
			putTodos([{ label: "Add a new task!", done: false }]);
			getTodos();
		} else {
			putTodos(filteredArray);
			getTodos();
		}
	};

	return (
		<div className="items-counter">
			<small>
				{todosLength} {`${todosLength === 1 ? `item` : `items`}`} left
			</small>
			<button className="items-counter__btn" onClick={clearTodosHandler}>
				Delete Completed
			</button>
		</div>
	);
};

export default ItemsCounter;

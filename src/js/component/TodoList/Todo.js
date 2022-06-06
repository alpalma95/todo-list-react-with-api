import React, { useState } from "react";

const Todo = ({ id, text, todos, classList, setTodosLength }) => {
	const [showRemove, setShowRemove] = useState(false);

	const putTodos = (arr) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alpalma95", {
			method: "PUT",
			body: JSON.stringify(arr),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => response.json());
	};

	const removeTodoHandler = (e) => {
		const todosCompleted = [...todos].map((x) => {
			if (e.target.id == x.id) {
				return { ...x, done: true };
			} else {
				return { ...x };
			}
		});
		putTodos(todosCompleted);

		let counter = 0;
		for (let i in todosCompleted) {
			if (!todosCompleted[i].done) {
				counter++;
			}
		}
		setTodosLength(counter);
		setShowRemove(false);
	};

	let styles = `todo-item ` + classList;

	return (
		<li
			className={styles}
			onMouseEnter={() =>
				styles.includes("completed")
					? setShowRemove(false)
					: setShowRemove(true)
			}
			onMouseLeave={() => setShowRemove(false)}>
			{text}
			<span
				role="img"
				aria-label="red cross"
				className={`todo-item__remove ${!showRemove ? `hidden` : ``}`}
				id={id}
				onClick={removeTodoHandler}>
				❌
			</span>
		</li>
	);
};

export default Todo;

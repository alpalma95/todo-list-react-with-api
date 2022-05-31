import React, { useState } from "react";

const Todo = ({ id, text, todos, setTodos, counter, setCounter }) => {
	const [showRemove, setShowRemove] = useState(false);

	const removeTodoHandler = (e) => {
		const todosArray = [...todos].map((x) => {
			let i;
			if (e.target.id === x.id) {
				i = { ...x };
				i.finished = true;
			} else {
				i = { ...x };
			}
			return i;
		});
		setTodos(todosArray);
		setCounter(counter - 1);
	};

	return (
		<li
			className="todo-item"
			onMouseEnter={() => setShowRemove(true)}
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

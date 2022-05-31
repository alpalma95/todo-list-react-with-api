import React from "react";

const Input = ({
	input,
	setInput,
	todos,
	setTodos,
	setTodosEmpty,
	counter,
	setCounter,
}) => {
	const setInputHandler = (e) => {
		setInput(e.target.value);
	};

	const newTodoHandler = (e) => {
		if (e.key === "Enter" && e.target.value !== "") {
			setTodos([
				...todos,
				{
					id: `${Math.random() * 5000}`,
					text: `${input}`,
					finished: false,
				},
			]);
			setInput("");
			setTodosEmpty(false);
			setCounter(counter + 1);
		}
	};

	return (
		<input
			placeholder="Enter a task and hit Enter!"
			type="text"
			value={input}
			onChange={setInputHandler}
			onKeyPress={newTodoHandler}
		/>
	);
};

export default Input;

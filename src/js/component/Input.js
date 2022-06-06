import React from "react";

const Input = ({
	input,
	setInput,
	todos,
	counter,
	setCounter,
	setTodosLength,
}) => {
	const setInputHandler = (e) => {
		setInput(e.target.value);
	};

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

	const newTodoHandler = (e) => {
		if (e.key === "Enter" && e.target.value !== "") {
			setInput("");
			setCounter(counter + 1);
			let newTodos = [
				...todos,
				{
					id: Math.random() * 1000,
					label: e.target.value,
					done: false,
				},
			];
			putTodos(newTodos);
			setTodosLength(newTodos.length);
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

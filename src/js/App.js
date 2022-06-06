import React, { useState, useEffect } from "react";
import Input from "./component/Input";
import TodoList from "./component/TodoList/TodoList";
import ItemsCounter from "./component/ItemsCounter";
import DecorationBox from "./component/DecorationBox";
import Header from "./component/Header";

export default function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [todosLength, setTodosLength] = useState(todos.length);
	const [counter, setCounter] = useState(0);

	const setTodosLengthHandler = () => {
		let counter = 0;
		for (let i in todos) {
			if (!todos[i].done) {
				counter++;
			}
		}
		setTodosLength(counter);
	};

	const getTodos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alpalma95")
			.then((response) => response.json())
			.then((response) => {
				let newResponse = response.map((x) => {
					return {
						id: Math.random() * 1000,
						label: x.label,
						done: x.done,
					};
				});
				setTodos(newResponse);
				setTodosLength(newResponse.length);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		setTodosLengthHandler();
	}, [todos]);

	useEffect(() => {
		getTodos();
	}, [todosLength]);

	return (
		<div className="App">
			<Header />
			<ul className="list">
				<li>
					<Input
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						setTodosLength={setTodosLength}
						counter={counter}
						setCounter={setCounter}
						getTodos={getTodos}
					/>
				</li>
				<li>
					{
						<>
							<TodoList
								className="todo-list"
								todos={todos}
								setTodos={setTodos}
								counter={counter}
								setCounter={setCounter}
								getTodos={getTodos}
								setTodosLength={setTodosLength}
							/>
							<ItemsCounter
								counter={counter}
								todosLength={todosLength}
								todos={todos}
								getTodos={getTodos}
							/>
						</>
					}
				</li>
			</ul>
			<DecorationBox classNumber="1" />
			<DecorationBox classNumber="2" />
		</div>
	);
}

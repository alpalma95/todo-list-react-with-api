import React, { useState, useEffect } from "react";
import Input from "./component/Input";
import TodoList from "./component/TodoList/TodoList";
import EmptyList from "./component/TodoList/EmptyList";
import ItemsCounter from "./component/ItemsCounter";
import DecorationBox from "./component/DecorationBox";
import Header from "./component/Header";

export default function App() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [todosEmpty, setTodosEmpty] = useState(true);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (
			todos.length === 0 ||
			todos.every((x) => {
				return x.finished;
			})
		) {
			setTodosEmpty(true);
		}
	}, [todos]);

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
						setTodosEmpty={setTodosEmpty}
						counter={counter}
						setCounter={setCounter}
					/>
				</li>
				<li>
					{todosEmpty ? (
						<EmptyList />
					) : (
						<>
							<TodoList
								className="todo-list"
								todos={todos}
								setTodos={setTodos}
								counter={counter}
								setCounter={setCounter}
							/>
							<ItemsCounter counter={counter} />
						</>
					)}
				</li>
			</ul>
			<DecorationBox classNumber="1" />
			<DecorationBox classNumber="2" />
		</div>
	);
}

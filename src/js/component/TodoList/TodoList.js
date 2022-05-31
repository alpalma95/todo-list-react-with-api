import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setTodosEmpty, counter, setCounter }) => {
	return (
		<ul>
			{todos.map((x) => {
				if (x.finished === false)
					return (
						<Todo
							key={x.id}
							id={x.id}
							text={x.text}
							todos={todos}
							setTodos={setTodos}
							setTodosEmpty={setTodosEmpty}
							counter={counter}
							setCounter={setCounter}
						/>
					);
			})}
		</ul>
	);
};

export default TodoList;

import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodosLength }) => {
	return (
		<ul>
			{todos.map((x) => (
				<Todo
					key={x.id}
					classList={`${x.done ? `completed` : ``}`}
					id={x.id}
					text={x.label}
					todos={todos}
					setTodosLength={setTodosLength}
				/>
			))}
		</ul>
	);
};

export default TodoList;

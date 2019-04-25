import React from 'react';
import Todo from './Todo';
import Form from './Form';

function TodoApp({ todos, addTodo, deleteTodo, toggleTodo }) {
	let todoList = todos.map(todo => (
		<Todo
			key={todo.id}
			id={todo.id}
			todoText={todo.todoText}
			isComplete={todo.isComplete}
			deleteTodo={deleteTodo}
			toggleTodo={toggleTodo}
		/>
	));
	return (
		<div>
			<Form submitFormData={todo => addTodo(todo)} />
			{todoList}
		</div>
	);
}

export default TodoApp;

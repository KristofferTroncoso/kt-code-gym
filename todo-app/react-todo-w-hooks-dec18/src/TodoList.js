import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, deleteTodo, toggleTodo}) {
  return (
		<ul>
			{todos.map(todo => (
				<TodoItem 
					key={todo.id} 
					id={todo.id} 
					text={todo.text} 
					isComplete={todo.isComplete} 
					deleteTodo={deleteTodo} 
					toggleTodo={toggleTodo}
				/>
			))}
		</ul>
	);
}

export default TodoList;
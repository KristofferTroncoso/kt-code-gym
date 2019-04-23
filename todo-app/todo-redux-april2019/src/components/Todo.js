import React from 'react';

function Todo({ id, todoText, isComplete, deleteTodo, toggleTodo }) {
	return (
		<li>
			<input
				type="checkbox"
				checked={isComplete ? true : false}
				onChange={() => toggleTodo(id)}
			/>
			<span style={isComplete ? { textDecoration: 'line-through' } : null}>
				{todoText}
			</span>
			<button onClick={() => deleteTodo(id)}>x</button>
		</li>
	);
}

Todo.defaultProps = {
	todoText: 'default todo',
	isComplete: false
};

export default Todo;

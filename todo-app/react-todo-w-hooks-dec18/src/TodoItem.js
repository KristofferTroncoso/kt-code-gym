import React from 'react';

function TodoItem({id, text, isComplete, deleteTodo, toggleTodo}) {
	function handleDelete() {
		deleteTodo(id)
	}

	function handleChange() {
		toggleTodo(id);
	}

	return (
		<li key={id}>
			<input type="checkbox" checked={isComplete} onChange={handleChange} />
			<span 
				style={isComplete ? {textDecoration: 'line-through', color: 'gray'} : null}
			>
			{text}
			</span>
			<button onClick={handleDelete}>x</button>
		</li>
	);
}

export default TodoItem;
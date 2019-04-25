import React, { useState } from 'react';

function TodoForm({handleTodos}) {
	const [inputText, changeInputText] = useState('');

	function handleChange(e) {
		e.preventDefault();
		changeInputText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleTodos(inputText);
		changeInputText('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text" 
				value={inputText}
				placeholder="type new todo"  
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	)
}

export default TodoForm;
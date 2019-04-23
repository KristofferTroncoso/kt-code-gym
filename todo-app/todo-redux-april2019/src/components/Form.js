import React, { useState } from 'react';

function Form({ submitFormData }) {
	const [formData, changeFormData] = useState('');

	const handleChange = e => {
		changeFormData(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		submitFormData(formData);
		changeFormData('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="New Todo"
				value={formData}
				onChange={handleChange}
			/>
		</form>
	);
}

export default Form;

import React from 'react';

function Form({addTodo}) {
  const [formText, setFormText] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(formText);
    setFormText('');
  }

  const handleChange = e => {
    setFormText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add todo" 
        onChange={handleChange}
        value={formText}
      />
    </form>
  )
}

export default Form;
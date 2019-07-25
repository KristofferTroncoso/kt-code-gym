import React from 'react';

function TodoForm({addTodo}) {
  const [formText, changeFormText] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(formText);
    changeFormText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add todo"
        value={formText}
        onChange={e => changeFormText(e.target.value)}
      />
    </form>
  )
}

export default TodoForm;
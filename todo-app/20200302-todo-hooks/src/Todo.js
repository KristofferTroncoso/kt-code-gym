import React from 'react';

function Todo({todo, deleteTodo, toggleTodo}) {
  const handleDelete = e => {
    deleteTodo(todo.id)
  }

  const handleToggle = e => {
    toggleTodo(todo.id)
  }

  return (
    <li 
      key={todo.id} 
      style={todo.isComplete ? {textDecoration: "line-through"} : null}
    >
      <button onClick={handleDelete}>x</button>
      <span onClick={handleToggle}>{todo.todoText}</span>
    </li>
  )
}

export default Todo;